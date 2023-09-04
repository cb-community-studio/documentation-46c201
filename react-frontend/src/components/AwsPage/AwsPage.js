import React, { useEffect } from "react";
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { connect } from "react-redux";

const AwsPage = (props) => {
    useEffect(() => { }, []);

    const AWS = () => {
        window.open(
            "https://aws.amazon.com/getting-started/guides/deploy-webapp-amplify/?pg=webappamplify",
            "_blank"
        );
    };


    const header = (
        <img alt="Card" src="https://tse1.mm.bing.net/th?id=OIP.9mNpAJn_VWhQa2fBY17JHQHaDH&pid=Api&P=0&h=180" />
    );
    const footer = (
        <div className="flex flex-wrap justify-content-end gap-2">
            <Button label="Get Started" icon="pi pi-check" onClick={AWS} />
        </div>
    );

    return (
        <div className="card flex justify-content-center">
            <Card title="Hosting Node.js in AWS Amplify" footer={footer} header={header} className="md:w-25rem">
                <p className="m-0">
                    Get Start! Follow the steps to build your Web App on AWS Amplify.
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

export default connect(mapState, mapDispatch)(AwsPage);  