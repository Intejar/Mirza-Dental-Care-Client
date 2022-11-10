import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../context/AuthProvider/AuthProvider';
import MyReviewCard from '../MyReviewCard/MyReviewCard';

const MyReview = () => {
    const { user } = useContext(AuthContext)
    const { email } = user;
    const [myReviews, setMyReviews] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/review")
            .then(res => res.json())
            .then(data => setMyReviews(data))
    }, [])
    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure you want to delete this order?')
        console.log(id)
        if (proceed) {
            fetch(`http://localhost:5000/review/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        alert('deleted successfully')
                        const remaining = myReviews.filter(odr => odr._id !== id)
                        setMyReviews(remaining)
                    }
                })
        }

    }

    return (
        <div>
            {/* <h1>You have {myReview?.length} order</h1> */}
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>

                            </th>
                            <th>Service</th>
                            <th>User Review</th>
                            <th>Make Changes</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <>
                            {


                                myReviews.map(myReview => <MyReviewCard key={myReview._id} userEmail={email} myReview={myReview} handleDelete={handleDelete}></MyReviewCard>)

                            }
                        </>
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyReview;