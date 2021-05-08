import { Feed, Icon } from 'semantic-ui-react';

function timeConverter(UNIX_timestamp){
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
    return time;
  }

function NewsTemplate(props) {
    // console.log(props);
    
    var t = props.date; 
    // console.log(t);
    var ct = timeConverter(t);
    // console.log("ct ",ct);
    return (
        <Feed.Event id={props.id}>
            
            <Feed.Content>
                <Feed.Summary>
                    <Feed.Extra as='h1'>
                        {props.title}
                    </Feed.Extra>
                    <Feed.Extra text as='a' href={props.url} target='_blank'>
                        Click to Know more <br/>
                    </Feed.Extra>
                    <Feed.User>{props.by}</Feed.User> posted this news on  <Feed.Date>{ct}</Feed.Date>
                </Feed.Summary>
                <Feed.Meta>
                    <Feed.Like>
                        <Icon name='thumbs up' />{props.score}
                    </Feed.Like>
                </Feed.Meta>
            </Feed.Content>
        </Feed.Event>
    )
}

export default NewsTemplate;