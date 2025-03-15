const UserProfile = (props) => {
    return (
        <div style={{ border: '1px solid gray', padding: '15px', margin: '10px', borderRadius: '8px', boxShadow: '2px 2px 10px rgba(0,0,0,0.1)' }}>
            <h2 style={{ color: 'blue', marginBottom: '5px' }}>{props.name}</h2>
            <p style={{ fontSize: '16px', margin: '5px 0' }}>Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span></p>
            <p style={{ fontStyle: 'italic', color: 'gray' }}>Bio: {props.bio}</p>
        </div>
    );
};

export default UserProfile;

