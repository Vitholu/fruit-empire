import React from 'react'
import { SectionHeader } from './FavoriteFruit'

import { UserReview1, UserReview2, UserReview3 } from '../assets/index.js'

const CardReviews = (props) => {
    return (
        <>
            <div className="flex flex-1 flex-col bg-black-g200 h-52">
                <div className="flex p-6 pl-8">
                    <img src={props.profilePicture} alt="User profile picture" />
                </div>

                <div className="flex flex-col pl-8 gap-4 pr-8">
                    <h4>{props.name}</h4>
                    <p className="text-gray-50">{props.text}</p>
                </div>
            </div>
        </>
    )
}

const Reviews = () => {
    return (
        <>
            <SectionHeader title={'Reviews'} bool={false} />

            <div className="flex gap-8 pt-20">
                <CardReviews
                    profilePicture={UserReview1}
                    name={'Maria'}
                    text={
                        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.'
                    }
                />
                <CardReviews
                    profilePicture={UserReview2}
                    name={'Anna'}
                    text={
                        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.'
                    }
                />
                <CardReviews
                    profilePicture={UserReview3}
                    name={'Jessica'}
                    text={
                        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.'
                    }
                />
            </div>
        </>
    )
}

export default Reviews
