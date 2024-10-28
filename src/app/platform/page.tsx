"use client";
import Strategy from "@/components/home/strategy";
import Video from "@/components/home/video";
import Banner from "@/components/platform/banner";
import Campaign from "@/components/platform/campaign";
import Powerful from "@/components/platform/powerful";
import Product from "@/components/platform/product";
import Simplify from "@/components/platform/simplify";
import Solutions from "@/components/platform/solutions";

export default function Platform() {
    return(<>
        <Banner />
        <Video />
        <Campaign />
        <Powerful />
        <Solutions />
        <Simplify />
        <Product />
        <Strategy />
    </>)
}