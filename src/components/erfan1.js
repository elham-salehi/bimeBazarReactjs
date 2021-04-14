import React from 'react'
import $ from 'jquery';

class Person extends React.Component {

    // componentDidMount = () => {
    //     $("#buttons").on('click',function () {
    //         $.ajax({
    //             // url: "https://www.digikala.com/ajax/product/comments/1672478/?page=1",
    //             url: "https://google.com",
    //             success: function(content) {
    //                 console.log($(content))
    //                 console.log(1)
    //             },
    //             error: function(error) {
    //                 console.log(error)
    //             }
    //         })
    //         });
    //   }
   render() {
    return (
    <div className="Person">
        <h1>salam</h1>
        <button type="button" id="buttons">click</button>
    </div>
    );
    }
   }
export default Person;