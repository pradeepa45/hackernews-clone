import React from 'react';
import { Container, Dimmer, Feed, Loader, Segment } from 'semantic-ui-react';
import NewsTemplate from './NewsTemplate';
import useAxios from './useAxios';
import { Pagination } from 'semantic-ui-react'
import {useState} from 'react'

var startIndex, lastIndex;

function BestStories(props) {
    var Linktype = props.type;
    const [activePage, setActivePage] = useState(1);
    
    const handlePageChange = (data) =>{
        // console.log("data", data.activePage);
        setActivePage(data.activePage);
        startIndex = ((data.activePage-1)*30);
        lastIndex = startIndex + 30;
    }

    const { loading, final } = useAxios(Linktype,startIndex, lastIndex);
    document.title = "HackerNews | Best Stories";
    if (loading) {
        return (
            <div id="loa">
                <Segment raised padded inverted id='loaders'>
                    <Dimmer active>
                        <Loader></Loader>
                    </Dimmer>
                </Segment>
            </div>
        )
    }
    else {
        return (
           <div>
                
                <Container >
                    <Feed>
                        {final.map((item) => {
                            const { id, title, by, url, score, time } = item.data
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
                <Pagination onPageChange={(event,data)=>{handlePageChange(data)}} activePage={activePage} totalPages={20} />
          
           </div>  
        )
    }
}

export default BestStories;