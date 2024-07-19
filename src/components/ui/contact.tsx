"use client"
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const [formData, setFormData] = useState({
    FULL_NAME: "",
    COMPANY: "",
    EMAIL: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted", formData); // Log form data on submit
  
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const result = await response.json();
      if (response.ok) {
        setMessage(result.message);
      } else {
        setMessage(result.message || "Your subscription could not be saved. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setMessage("Your subscription could not be saved. Please try again.");
    }
  };

  return (
    <section className="px-4 py-12 md:px-8 lg:px-12">
      <h3 className="text-2xl font-bold mb-6 text-center">Contact Us</h3>
      <div className="max-w-md mx-auto">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="FULL_NAME">Full Name</Label>
            <Input id="FULL_NAME" type="text" placeholder="Enter your full name" value={formData.FULL_NAME} onChange={handleChange} className="text-white"/>
          </div>
          <div>
            <Label htmlFor="COMPANY">Company</Label>
            <Input id="COMPANY" type="text" placeholder="Enter your company name" value={formData.COMPANY} onChange={handleChange} className="text-white"/>
          </div>
          <div>
            <Label htmlFor="EMAIL">Email</Label>
            <Input id="EMAIL" type="email" placeholder="Enter your email" value={formData.EMAIL} onChange={handleChange} className="text-white"/>
          </div>
          <Button type="submit" className="w-full">Submit</Button>
        </form>
        {message && <p className="mt-4 text-center">{message}</p>}
      </div>
    </section>
  );
};

export default Contact;