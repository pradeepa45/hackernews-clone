import React from 'react';
import { Container, Dimmer, Feed, Loader, Segment } from 'semantic-ui-react';
import NewsTemplate from './NewsTemplate';
import useAxios from './useAxios';


function BestStories(props) {
    var Linktype = props.type;  
    const { loading, final } = useAxios(Linktype);

    if (loading) {
        return (
            <div id="loa">
                <Segment raised padded inverted id='loaders'>
                    <Dimmer active>
                        <Loader inverted></Loader>
                    </Dimmer>
                </Segment>
            </div>
        )
    }
    else {
        return (
            <Container >
                <Feed>
                    {final.map((item) => {
                        const {id, title, by, url, score, time } = item.data
                        return (
                            <NewsTemplate
                                key={id}
                                title={title}
                                by={by}
                                url={url}
                                score={score}
                                date={time}
                            />
                        )
                    })}
                </Feed>
            </Container>
        )
    }
}

export default BestStories;