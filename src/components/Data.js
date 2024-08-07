import { FiFlag, FiShield } from "react-icons/fi";
import { BiWalletAlt, BiKey } from "react-icons/bi";
import { FaPlane } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";

export const Data = [
    {
        icon: <FiFlag />,
        title: "HostPassword Scanner",
        description: "Receive alerts for compromised websites and vulnerable passwords so you can take action to stay secure."
    },
    {
        icon: <BiWalletAlt />,
        title: "Digital Wallet",
        description: "Securely store credit and debit cards, online banking information, and PayPal logins so you can fill them from any device."
    },
    {
        icon: <BiKey />,
        title: "Advanced Encryption",
        description: "Our security recipe starts with AES-256 bit encryption and uses multiple techniques to protect your data at rest and in transit."
    },
    {
        icon: <FaPlane />,
        title: "Travel Mode",
        description: "Remove sensitive data from your devices when you cross borders, and restore access with a click when you arrive."
    },
    {
        icon: <FiShield />,
        title: "Total Privacy",
        description: "Only you can access your data. We don’t use it, we don’t share it and we don’t sell it. You’re our customer, not our product."
    },
    {
        icon: <RiCustomerService2Fill />,
        title: "Unrivaled support",
        description: "Whenever you need it, our global team is here to help. Get free, one-on-one support from the HostPassword team."
    },
];

export const FooterData = [
    {
        category: "About",
        links: [
            { link: "Pricing & Packaging", to: "/" },
            { link: "Contact Us", to: "/" },
            { link: "Software Companies", to: "/" },
            { link: "SaaS Companies", to: "/" },
            { link: "Startups", to: "/" },
            { link: "Games", to: "/" },
            { link: "Application", to: "/" },
            { link: "Ecommerce", to: "/" },
        ]
    },
    {
        category: "Company",
        links: [
            { link: "Help", to: "/" },
            { link: "Contact Us", to: "/" },
            { link: "Privacy", to: "/" },
            { link: "Check Our Story", to: "/" },
            { link: "Work With Us", to: "/" },
            { link: "Press", to: "/" },
            { link: "Apps", to: "/" },
            { link: "Blog", to: "/" },
        ]
    },
    {
        category: "Features",
        links: [
            { link: "Wallet", to: "/" },
            { link: "Payment System", to: "/" },
            { link: "Multiple", to: "/" },
            { link: "Bussines", to: "/" },
            { link: "Merchants", to: "/" },
            { link: "Micropayments", to: "/" },
            { link: "Invoice & Billing", to: "/" },
            { link: "Fraud Detection", to: "/" },
        ]
    },
    {
        category: "Platform",
        links: [
            { link: "Fees", to: "/" },
            { link: "AnyPay for Business", to: "/" },
            { link: "Login to AnyPax", to: "/" },
            { link: "AnyPay Status", to: "/" },
            { link: "MarketPlace", to: "/" },
            { link: "Tour", to: "/" },
            { link: "Become Merchant", to: "/" },
            { link: "Market Cap", to: "/" },
        ]
    },
    {
        category: "Resources",
        links: [
            { link: "Blog", to: "/" },
            { link: "Whitepapers", to: "/" },
            { link: "Webinars", to: "/" },
            { link: "Product Datasheets", to: "/" },
            { link: "Customer Case Studies", to: "/" },
            { link: "Developer Portal", to: "/" },
            { link: "Knowledge Center", to: "/" },
            { link: "Sandbox", to: "/" },
        ]
    },
];
