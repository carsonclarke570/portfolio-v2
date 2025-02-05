"use client"
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import cx from 'classnames'

type Alert = "success" | "error"

type Inputs = {
    name: string
    email: string
    message: string
}

export default function Contact() {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<Inputs>();
    const [disabled, setDisabled] = useState(false);
    const [alertInfo, setAlertInfo] = useState({
        display: true,
        message: 'Hello',
        type: 'success',
    });

    const toggleAlert = (message: string, type: Alert) => {
        setAlertInfo({ display: true, message, type });

        // Hide alert after 5 seconds
        setTimeout(() => {
            setAlertInfo({ display: false, message: '', type: '' });
        }, 5000);
    };

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        const { name, email, message } = data
        try {
            // Disable form while processing submission
            setDisabled(true);

            // Define template params
            const templateParams = {
                name,
                email,
                message,
            };

            // Use emailjs to email contact form data
            await emailjs.send(
                process.env["EMAILJS_SERVICE_ID"]!!,
                process.env["EMAILJS_TEMPLATE_ID"]!!,
                templateParams,
                process.env["EMAILJS_PUBLIC_KEY"]!!,
            );

            // Display success alert
            toggleAlert('Message sent sucessfully', 'success');
        } catch (e) {
            console.error(e);
            // Display error alert
            toggleAlert('Error sending message', 'error');
        } finally {
            // Re-enable form submission
            setDisabled(false);
            // Reset contact form fields after submission
            reset();
        }
    };

    return (
        <div className="my-6 mx-8 space-y-8">

            {/* {alertInfo.display && (
                <>
                    <div
                        style={{ transform: "translate(-50%, 0)" }}
                        className='ixed top-8 left-[50%] px-4 rounded-lg'
                    />
                    <div
                        style={{ transform: "translate(-50%, 0)" }}
                        className={cx("fixed top-8 left-[50%] px-4 border rounded-lg", alertInfo.type == 'error' ? "bg-red-950" : alertInfo.type == 'success' ? "border-primary-400/20 bg-primary-300/5 text-primary-500" : "")}
                    >
                        {alertInfo.message}
                    </div>
                </>

            )} */}

            <div>
                <h1 className="dark:text-zinc-50 text-zinc-800 font-header font-semibold text-4xl">
                    Contact
                </h1>

                <div className="rounded-full w-40 h-1.5 dark:bg-primary-400 bg-primary-600 mt-2 mb-4" />

            </div>

            <form className='font-paragraph grid lg:grid-cols-2 lg:gap-6 gap-4' noValidate onSubmit={handleSubmit(onSubmit)}>
                <div className='xl:col-span-1 flex flex-col'>
                    <label className={cx("mb-2 font-header", errors.name ? "font-normal italic text-sm mt-1 text-red-400" : "font-semibold text-zinc-50")} htmlFor="name">{errors.name ? errors.name.message : "Name"}</label>
                    <input type="text" id="name" className='border rounded-lg p-2 border-zinc-600 focus:border-zinc-400 focus:outline-0' placeholder='Name' {...register("name", {
                        required: {
                            value: true,
                            message: 'Please enter your name',
                        }
                    })} />
                </div>

                <div className='xl:col-span-1 flex flex-col'>
                    <label className={cx("mb-2 font-header", errors.email ? "font-normal italic text-sm mt-1 text-red-400" : "font-semibold text-zinc-50")} htmlFor='email'>{errors.email ? errors.email.message : "Email"}</label>
                    <input type="email" id='email' className='border rounded-lg p-2 border-zinc-600 focus:border-zinc-400 focus:outline-0' placeholder='Email' {...register('email', {
                        required: {
                            value: true,
                            message: 'Please enter your e-mail address',
                        },
                        pattern: {
                            value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                            message: "Invalid e-mail"
                        }

                    })} />
                </div>

                <div className='lg:col-span-2 flex flex-col'>
                    <label className={cx("mb-2 font-header", errors.message ? "font-normal italic text-sm mt-1 text-red-400" : "font-semibold text-zinc-50")} htmlFor='message'>{errors.message ? errors.message.message : "Message"}</label>
                    <textarea rows={6} className='w-full border rounded-lg p-2 border-zinc-600 focus:border-zinc-400 focus:outline-0' id='message' placeholder='Message'  {...register('message', {
                        required: {
                            value: true,
                            message: "Please don't send me an empty message :(",
                        }
                    })} />
                </div>

                <div className='lg:col-span-2 grid grid-cols-subgrid'>
                    <div className='col-start-2 flex flex-col'>
                        <button type='submit' className='self-end border px-8 py-2 rounded-lg border-primary-400/20 bg-primary-300/5 text-primary-500 hover:bg-primary-300/10' disabled={disabled}>Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}