import ListGroup from "react-bootstrap/ListGroup"
import { Link } from "react-router-dom"




//map function to make the list of names? 
function Contacts() {
  return (
    <div className="p-5">
      <Link to='/'>{'<- Back'}</Link>
      <h1>Contacts</h1>
      <ListGroup>
        <ListGroup.Item>Jacinta</ListGroup.Item>
        <ListGroup.Item>Cody</ListGroup.Item>
        <ListGroup.Item>Nathan</ListGroup.Item>
        <ListGroup.Item>Neal</ListGroup.Item>
        <ListGroup.Item>Duke</ListGroup.Item>
        <ListGroup.Item>Eoin</ListGroup.Item>
        <ListGroup.Item>Maddie</ListGroup.Item>
        <ListGroup.Item>Caitlin</ListGroup.Item>
        <ListGroup.Item>Jay</ListGroup.Item>
        <ListGroup.Item>Brandon</ListGroup.Item>
        <ListGroup.Item>Owen</ListGroup.Item>
        <ListGroup.Item>Henry</ListGroup.Item>
        <