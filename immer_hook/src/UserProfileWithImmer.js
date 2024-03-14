import React, { useState } from 'react';
import { useImmer } from 'immer';

function UserProfileWithImmer() {

    const [userProfile, setUserProfile] = useImmer({
        name: '',
        email: '',
        contactDetails: {
            phone: '',
            address: ''
        },
        preferences: {
            newsletter: false,
            notifications: false
        }
    });

    const updateContactDetails = (newPhone, newAddress) => {
        setUserProfile(draft => {
            draft.contactDetails.phone = newPhone;
            draft.contactDetails.address = newAddress;
        });
    };


    const toggleNewsletterSubscription = () => {
        setUserProfile(draft => {
            draft.preferences.newsletter = !draft.preferences.newsletter;
        });
    };

    return (
        <div>
            <h2>User Profile</h2>
            <div>
                <h3>Name: {userProfile.name}</h3>
                <h3>Email: {userProfile.email}</h3>
                <h3>Contact Details:</h3>
                <p>Phone: {userProfile.contactDetails.phone}</p>
                <p>Address: {userProfile.contactDetails.address}</p>
                <h3>Preferences:</h3>
                <p>Newsletter: {userProfile.preferences.newsletter ? 'Subscribed' : 'Not Subscribed'}</p>
                <p>Notifications: {userProfile.preferences.notifications ? 'Enabled' : 'Disabled'}</p>
            </div>
            <div>
                <input
                    type="text"
                    placeholder="New Phone Number"
                    onChange={(e) => updateContactDetails(e.target.value, userProfile.contactDetails.address)}
                />
                <input
                    type="text"
                    placeholder="New Address"
                    onChange={(e) => updateContactDetails(userProfile.contactDetails.phone, e.target.value)}
                />
                <button onClick={toggleNewsletterSubscription}>
                    {userProfile.preferences.newsletter ? 'Unsubscribe' : 'Subscribe'} to Newsletter
                </button>
            </div>
        </div>
    );
}

export default UserProfileWithImmer;
