import React from 'react'
import {Card} from "react-bootstrap"

const MainCard = () => {
  return (
    <div style={{backgroundColor:"#B3D6C6" , width:"30%",height:"100vh"}}>
        <p>suggestion box</p>
    <Card style={{width:"15rem" , height:"13rem" , margin:"10px 26%"}}>
    <iframe  src="https://www.youtube.com/embed/T6DJcgm3wNY" title="Man of Steel - Official Trailer 3 [HD]" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <Card.Body>
            <Card.Title className='title'> Super Man</Card.Title>
          </Card.Body>
        </Card>
        <Card style={{width:"15rem" , height:"13rem" , margin:"10px 26%"}}>
        <iframe src="https://www.youtube.com/embed/zAGVQLHvwOY" title="JOKER - Final Trailer - Now Playing In Theaters" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>          <Card.Body>
            <Card.Title className='title'> Joker</Card.Title>
          </Card.Body>
        </Card>
        <Card style={{width:"15rem" , height:"13rem" , margin:"10px 26%"}}>
        <iframe  src="https://www.youtube.com/embed/JfVOs4VSpmA" title="SPIDER-MAN: NO WAY HOME - Official Trailer (HD)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <Card.Body>
            <Card.Title className='title'> Spider Man</Card.Title>
          </Card.Body>
        </Card>
    </div>
  )
}

export default MainCard