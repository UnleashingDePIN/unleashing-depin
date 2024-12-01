"use client"
import React, { useState } from "react";
import { Client } from "@notionhq/client"; // Import Notion client
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// Initialize Notion client
const notion = new Client({
  auth: process.env.NOTION_SECRET || "", // Use the secret from .env, fallback to empty string
});

const Contact = () => {
  const [formData, setFormData] = useState({
    FULL_NAME: "",
    COMPANY: "",
    EMAIL: "",
    TELEGRAM: "",
    MESSAGE: ""
  });
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        setMessage(data.message);
        setFormData({ FULL_NAME: "", COMPANY: "", EMAIL: "", TELEGRAM: "", MESSAGE: "" }); // Clear form after success
      } else {
        setMessage("Your submission could not be saved. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setMessage("Your submission could not be saved. Please try again.");
    }
  };

  return (
    <section className="px-4 py-12 md:px-8 lg:px-12">
      <h3 className="text-2xl font-bold mb-6 text-center">Contact Us</h3>
      <div className="max-w-md mx-auto">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="FULL_NAME">Full Name</Label>
            <Input 
              id="FULL_NAME" 
              type="text" 
              placeholder="Enter your full name" 
              value={formData.FULL_NAME} 
              onChange={handleChange} 
              className="text-white"
            />
          </div>
          <div>
            <Label htmlFor="COMPANY">Company</Label>
            <Input 
              id="COMPANY" 
              type="text" 
              placeholder="Enter your company name" 
              value={formData.COMPANY} 
              onChange={handleChange} 
              className="text-white"
            />
          </div>
          <div>
            <Label htmlFor="EMAIL">Email</Label>
            <Input 
              id="EMAIL" 
              type="email" 
              placeholder="Enter your email" 
              value={formData.EMAIL} 
              onChange={handleChange} 
              className="text-white"
            />
          </div>
          <div>
            <Label htmlFor="TELEGRAM">Telegram Handle</Label>
            <Input 
              id="TELEGRAM" 
              type="text" 
              placeholder="Enter your Telegram handle" 
              value={formData.TELEGRAM} 
              onChange={handleChange} 
              className="text-white"
            />
          </div>
          <div>
            <Label htmlFor="MESSAGE">Message</Label>
            <textarea 
              id="MESSAGE" 
              placeholder="Enter your message" 
              value={formData.MESSAGE} 
              onChange={(e) => setFormData(prev => ({ ...prev, MESSAGE: e.target.value }))}
              className="w-full min-h-[100px] p-2 rounded-md text-black bg-background border"
            />
          </div>
          <Button type="submit" className="w-full">Submit</Button>
        </form>
        {message && <p className="mt-4 text-center">{message}</p>}
      </div>
    </section>
  );
};

export default Contact;