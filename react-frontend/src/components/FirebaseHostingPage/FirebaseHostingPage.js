import React, { useEffect } from "react";
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { connect } from "react-redux";

const FirebaseHostingPage = (props) => {
    useEffect(() => { }, []);

    const AWS = () => {
        window.open(
            "https://firebase.google.com/",
            "_blank"
        );
    };


    const header = (
        <img alt="Card" src="https://tse1.mm.bing.net/th?id=OIP.wAGTTwgijc6aH-TRA2p3-gHaEK&pid=Api&P=0&h=180" />
    );
    const footer = (
        <div className="flex flex-wrap justify-content-end gap-2">
            <Button label="Get Started" icon="pi pi-check" onClick={AWS} />
        </div>
    );

    return (
        <div className="card flex justify-content-center">
            <Card title="Firebase Hosting with Node.js" footer={footer} header={header} className="md:w-25rem">
                <p className="m-0">
                    Get Start! Follow the steps to build your Application onto Firebase.
                </p>
            </Card>
        </div>
    );
};
const mapState = (state) => {
    //
    return {};
};
const mapDispatch = (dispatch) => ({
    //
});

export default connect(mapState, mapDispatch)(FirebaseHostingPage);  