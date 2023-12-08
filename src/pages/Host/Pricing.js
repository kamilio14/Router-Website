import { useParams } from "react-router-dom";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

export default function Pricing() {
  const hostVans = useOutletContext();
  console.log("piče", hostVans);

  return <h1>{hostVans.vans.price} $ </h1>;
}
