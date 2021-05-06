import React, {useEffect, useState} from 'react';
import { Container, Dimmer, Feed, Loader, Segment } from 'semantic-ui-react';
import NewsTemplate from './NewsTemplate';
import useAxios from './useAxios';


function TopStories(props) {
    var Linktype = props.type;
    const{loading,final} = useAxios(Linktype);

    if (loading) {
        return (
            <div id="loa">
                <Segment  raised padded inverted id='loaders'>
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
                <Feed inverted>
                    {final.map((item) => {
                        return (
                            <NewsTemplate
                                key={item.data.id}
                                title={item.data.title}
                                by={item.data.by}
                                url={item.data.url}
                                score={item.data.score}
                                date={item.data.time}
                            />
                        )
                    })}
                    {/* hi */}
                </Feed>
            </Container>
        )
    }
}

export default TopStories;