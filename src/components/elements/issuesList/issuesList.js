import React, {Component} from "react";
import LoadMoreBtn from '../loadMoreBtn/loadMoreBtn';
import './issuesList.css';

const API = 'https://api.github.com/repos/rails/rails/issues?page=1';

class IssuesList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      issues: [],
      isLoading: false,
      error: null,
      currentIssues: 5,
      activeIssue: null,
    };
    this.loadMore = this.loadMore.bind(this);
    this.onClickHighlight = this.onClickHighlight.bind(this);
  }
    
  onClickHighlight(issueID) {
    if (issueID === this.state.activeIssue ) {
      this.setState({ activeIssue: null });
    } else {
      this.setState({ activeIssue: issueID});
    }
    
  }

  loadMore() {
    this.setState((prev) => {
      return {currentIssues: prev.currentIssues + 5};
    })
  }

  componentDidMount() {
    this.setState({ isLoading: true})

    fetch(API)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Something went wrong...');
      }})
    .then(data =>{this.setState({ issues: data, isLoading: false })})
    .catch(error => this.setState({ error, isLoading: false}));
  }

  render() {
    const {issues, isLoading, error } = this.state;

    if(error) {
      return <p>{error.message}</p>
    }

    if (isLoading) {
      return <p>Loading ...</p>
    }

    return (
      <div>
        <ul>  
          {issues.slice(0, this.state.currentIssues).map(issues =>
            <li key={issues.objectID}
            className={`segmentsList${this.state.activeIssue === issues.id ? 'Selected' : ''}`}
            onClick={() => {
              this.onClickHighlight(issues.id)
            }}
            >
              <p>ID: {issues.id} </p>
              <p>Title: {issues.title}</p>
            </li>
            )}
        </ul>
        {this.state.currentIssues <= this.state.issues.length && 
        <LoadMoreBtn text="Next" onClick={this.loadMore} />  }
        
      </div>

      
      
    );
  }
}

export default IssuesList;