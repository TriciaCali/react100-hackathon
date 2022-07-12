import React, { Component } from 'react';
import ListLayout from './ListLayout';
import axios from 'axios';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bodyArea: 'fullBody',
  /*           quote:{
                quote:'',
                author:''
            }, */
            quote:'',
            exercises: [
                0: { name:'',
                    gifUrl: '',
                    },

            ],
            clickNewWorkout: false,
        };
        //bind fx here 
    }

    //add new fxs here 

componentWillMount() {
        /* let quote = {}; */
        console.log(process.env.REACT_APP_APIKEY)
        //start of temporary api replacement
        let quote =''

const options = {
    method: 'POST',
    url: 'https://motivational-quotes1.p.rapidapi.com/motivation',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': process.env.REACT_APP_APIKEY,
      'X-RapidAPI-Host': 'motivational-quotes1.p.rapidapi.com'
    },
    data: '{"key1":"value","key2":"value"}'
  };
  
  axios.request(options).then(quoteData => {
    quote = quoteData.data
    this.setState({ quote })});
; 


//end of temporary in api replacement



      //  workiing start for quote api
       /*  const options = {
            method: 'GET',
            url: 'https://bodybuilding-quotes1.p.rapidapi.com/random-quote',
            headers: {
              'X-RapidAPI-Key': '72e066e49emshcd1e7705cf8de7dp16e555jsnc11b8f72aed2',
              'X-RapidAPI-Host': 'bodybuilding-quotes1.p.rapidapi.com'
            }
          };
    axios.request(options).then(quoteData => {
        quote = quoteData.data
        this.setState({ quote })});
    ;  */
    //working end for  quote api
 
            //start of working exercise api


  const options2 = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/equipment/body%20weight',
   headers: {
       'X-RapidAPI-Key': process.env.REACT_APP_APIKEY,
       'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
   }
   };

    axios.request(options2).then(exercises => {
        exercises = exercises.data;
        this.setState({ exercises })});

//working end of exercise api

} 

    /* clickBodyArea(e){ //change state of bodyarea to what user clicked
        const bodyAreaClicked = e.target.value;
        this.setState({ bodyArea :  bodyAreaClicked});
        
        if (bodyAreaClicked == 'fullBody'){
            console.log('fullBody is selected')
        }
        else if(bodyAreaClicked == 'upperBody'){
            console.log('upperBody is selected')
        }
        else if(bodyAreaClicked == 'lowerBody'){
            console.log('lowerBody is selected')
        }
    } */
        render(){//I will refactor code to make less repetitive and more efficient
            let exerciseBurpeeName, exercise2Name, exercise3Name, exercise4Name, exercise6Name, exercise7Name, exercise8Name;
            let exerciseBurpeeGif, exercise2Gif, exercise3Gif, exercise4Gif, exercise6Gif, exercise7Gif, exercise8Gif;

            this.state.exercises.map((item,index)=>{
                if(index == 45){
                    exerciseBurpeeName=item.name
                    exerciseBurpeeGif = item.gifUrl
                }
                else if(index == 205 ){
                    exercise2Name=item.name
                    exercise2Gif = item.gifUrl
                }
                else if(index == 148){
                    exercise3Name=item.name
                    exercise3Gif = item.gifUrl
                }
                else if(index == 19){
                    exercise4Name=item.name
                    exercise4Gif = item.gifUrl
                }
                else if(index == 63){
                    exercise6Name=item.name
                    exercise6Gif = item.gifUrl
                }
                else if(index == 44){
                    exercise7Name=item.name
                    exercise7Gif = item.gifUrl
                }
                else if(index == 220 ){
                    exercise8Name=item.name
                    exercise8Gif = item.gifUrl
                }
            })

            return(
            <div>
                <img className='title-size' src='../pictures/title.png' alt='Tabata of the Day title image' />
                <div className='container'>
                
                <div className='row '>
                  <div className='col-3' >
                      <div className= 'row'>
                      <div className="d-flex align-items-center">
                  <div className=' quote-frame '>
                     <p className='center quote-text text-center'>{this.state.quote}</p>
               </div>
               </div>
                     </div>  
                  </div> 
                  <div className='col-8 offset-1'>
               <div className='row'>
{/* 
               <div className='btn btn-grey btn-outline-light btn-block'  aria-label='Basic example'>
                   Get a New Workout!</div> */}

   {/*              <div className='btn-group btn-grey' role='group' aria-label='Basic example'>
                    <button type='button' className='btn btn-outline-light btn-grey active btn-lg' onClick={ this.clickBodyArea } value='fullBody'>Full Body</button>
                    <button type='button' className='btn btn-outline-light btn-grey btn-lg' onClick={ this.clickBodyArea } value='lowerBody'>Lower Body</button>
                    <button type='button' className='btn btn-outline-light btn-grey btn-lg' onClick={ this.clickBodyArea } value='upperBody'>Upper Body</button>
                </div> */}

<br />

   
<h2 className=' center-text-pls full-width'>Tabata Total Body Burn</h2>

<p className='border-bottom center-text-pls full-width '>This short Tabata workout does the trick to tone your arms, legs and core! All the moves are bodyweight focused so you don’t need any equipment – just a timer and a mat!<br /><br /></p>

{/* //I will refactor code to make less repetitive and more efficient */}
                    <ListLayout 
                        exerciseBurpeeName ={ exerciseBurpeeName}
                        exercise2Name = {exercise2Name}
                        exercise3Name = {exercise3Name}
                        exercise4Name = {exercise4Name}
                        exercise6Name = {exercise6Name}
                        exercise7Name = {exercise7Name}
                        exercise8Name = {exercise8Name}
                        exerciseBurpeeGif= {exerciseBurpeeGif}
                        exercise2Gif = {exercise2Gif}
                        exercise3Gif = {exercise3Gif}
                        exercise4Gif = {exercise4Gif}
                        exercise6Gif = {exercise6Gif}
                        exercise7Gif = {exercise7Gif}
                        exercise8Gif = {exercise8Gif}
                    
                    />
     
        </div>
        <p className='bigger-text text-center'>Do 3 Rounds</p>
        </div>
                  </div>
        
                </div>
             </div>
            );
        }

}
export default App;
