import React, { useState } from "react";
import "./Card.css";
import Person from "../components/CardPerson/CardPerson";
import CardBody from "../components/CardBody/CardBody";
import CardFooter from "../components/CardFooter/CardFooter";

const Card = () => {
  const [state, setState] = useState({
    name: "Evelyn Sharma",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8Z2lybHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    text: `
    It was a humorously perilous business for 
    both of us. For, before we proceed further, 
    it must be said that the monkey-rope was fast at both ends. was fast at both`,

    contact: {
      location: "Washington",
      email: "example@gmail.com",
      phone: "+92-456-356-6575",
    },
  });
  return (
    <div className="card">
      <Person name={state.name} image={state.image} />
      <CardBody text={state.text} />
      <CardFooter contact={state.contact} />
    </div>
  );
};

export default Card;
