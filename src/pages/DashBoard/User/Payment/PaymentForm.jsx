/* eslint-disable react/prop-types */
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import "./PaymentForm.css";
import { ImSpinner9 } from "react-icons/im";
import useAuth from "./../../../../hooks/useAuth";
import { createPaymentIntent, savePaymentInfo, updatePaymentStatus } from "../../../../components/shared/PaymentIntent";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const PaymentForm = ({ paymentInfo, closeModal }) => {
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  
  console.log('paymentInfo.payment.property_id',paymentInfo.payment.property_id);

  // Create Payment Intent
  useEffect(() => {
    if (paymentInfo.payment.price > 0) {
      createPaymentIntent({ price: paymentInfo.payment.price }).then((data) => {
        console.log(data.clientSecret);
        setClientSecret(data.clientSecret);
      });
    }
  }, [paymentInfo]);
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    const { paymentMethod, error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("error", error);
      setCardError(error.message);
    } else {
      setCardError("");
      console.log("payment method", paymentMethod);
    }
    setProcessing(true);
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email,
            name: user?.displayName,
          },
        },
      });

    if (confirmError) {
      console.log(confirmError);
      setCardError(confirmError.message);
    }

    console.log("payment intent", paymentIntent);

    if (paymentIntent.status === "succeeded") {
      // save payment information to the server
      // Update room status in db
      const paymentData = {
        ...paymentInfo,
        transactionId: paymentIntent.id,
        date: new Date(),
      };
      try {
        await savePaymentInfo(paymentData);
        await updatePaymentStatus(paymentInfo?.payment?.property_id, true);
        Swal.fire('Great', `Payment Successful`,'success')
        navigate ('/dashboard/myBoughtProperty')
      } catch(err){
        console.log(err);
        Swal.fire("Error",`${err.message}`, 'error')
      } finally {
        setProcessing(false);
      }
    }
  };

  return (
    <>
      <form className="my-2" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <div className="flex mt-2 justify-around">
          <button
            type="button"
            className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
            onClick={closeModal}
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={!stripe || !clientSecret || processing}
            className="inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
          >
            {processing ? (
              <ImSpinner9 className="m-auto animate-spin" size={24} />
            ) : (
              `Pay ${paymentInfo?.payment?.price}$`
            )}
          </button>
        </div>
      </form>
      {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
    </>
  );
};

export default PaymentForm;
