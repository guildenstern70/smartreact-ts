import React from 'react';

interface HomeProps {
    style: string;
}

export default class Home extends React.Component<HomeProps> {
    TITLE = 'Home';

    render(): React.ReactNode {
        return <div>Welcome {this.TITLE};</div>;
    }
}
