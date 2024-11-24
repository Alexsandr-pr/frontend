"use client"
import Input from '@/components/input/Input'
import React, { useState } from 'react'

const FooterForm = () => {

    const [email, setEmail] = useState<string>("");

    return (
        <form className="footer-item__form footer-form">
            <div className="footer-form__item">
                <label className="footer-form__label footer-link">
                    Subscribe to our newseller
                </label>
                <Input  
                    dark
                    type='email'
                    placeholder='Email'
                    setValue={setEmail}
                    value={email}
                />
            </div>
        </form>
    )
}

export default FooterForm