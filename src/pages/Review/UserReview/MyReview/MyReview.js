import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../context/AuthProvider/AuthProvider';
import MyReviewCard from '../MyReviewCard/MyReviewCard';

const MyReview = () => {
    const { user,logOut } = useContext(AuthContext)
    const [myReviews, setMyReviews] = useState([]);
    useEffect(() => {
        fetch(`https://y-five-psi.vercel.app/userReview?email=${user?.email}`,{
            headers: {
                authorization : `bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => {
                if(res.status === 401|| res.status ===403){
                    logOut()
                }
                return  res.json()
            })
            .then(data => setMyReviews(data))
    }, [user?.email , logOut])
    const handleEdit = (id, editedText) => {
        fetch(`https://y-five-psi.vercel.app/review/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ comment: editedText })
        })
            .then(res => res.json())
            .then(data => {
                alert('your changes has been added')
                console.log(data)
                
            })
    }
    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure you want to delete this order?')
        console.log(id)
        if (proceed) {
            fetch(`https://y-five-psi.vercel.app/review/${id}`, {
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


                                myReviews.map(myReview => <MyReviewCard key={myReview._id}  myReview={myReview} handleDelete={handleDelete} handleEdit={handleEdit}></MyReviewCard>)

                            }
                        </>
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyReview;