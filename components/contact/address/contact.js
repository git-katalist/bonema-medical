import { useState } from "react";
import ContactForm from "../form/form";
import Details from "./details";
import { Contact } from "./styles";

export default function ContactDetails({
    handleToggle,
    handleTogg,
    setTogg,
    setToggle,
    togg,
    toggle,
}) {
    return (
        <Contact>
            <Details />
        </Contact>
    );
}
