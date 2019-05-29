import React from 'react';

interface AnotherPageProps {
    style: string;
}

export default class AnotherPage extends React.Component<AnotherPageProps> {
    TITLE = 'AnotherPage';

    render(): React.ReactNode {
        return <div>Welcome {this.TITLE};</div>;
    }
}
