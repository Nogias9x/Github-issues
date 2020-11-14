import React, { Component } from "react";
import IssuesList from "./components/elements/issuesList/issuesList";
import Notification from "./components/elements/notificationNav/Notificaton";

import { connect } from "react-redux";
import { addIssueAction } from "./actions";

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Notification
            onClick={this.notification}
            listIssue={this.props.highlighted}
          />
        </div>
        <div>
          <h1>Github Issues Lists:</h1>
          <IssuesList onAddIssue={(issue) => this.props.onAddIssue(issue)} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    highlighted: state.issue ? state.issue.highlighted : [],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddIssue: (issue) => {
      dispatch(addIssueAction(issue));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
