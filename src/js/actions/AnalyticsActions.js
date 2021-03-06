import Dispatcher from "../dispatcher/Dispatcher";
import VoterStore from "../stores/VoterStore";

// ACTION_VOTER_GUIDE_VISIT = 1;
// ACTION_VOTER_GUIDE_ENTRY = 2;
// ACTION_ORGANIZATION_FOLLOW = 3;
// ACTION_ORGANIZATION_AUTO_FOLLOW = 4;
// ACTION_ISSUE_FOLLOW = 5;
// ACTION_BALLOT_VISIT = 6;
// ACTION_POSITION_TAKEN = 7;
// ACTION_VOTER_TWITTER_AUTH = 8;
// ACTION_VOTER_FACEBOOK_AUTH = 9;
// ACTION_WELCOME_ENTRY = 10;
// ACTION_FRIEND_ENTRY = 11;
// ACTION_WELCOME_VISIT = 12;

module.exports = {

  saveActionBallotVisit: function (google_civic_election_id) {
    const ACTION_BALLOT_VISIT = 6;
    console.log("AnalyticsActions, saveActionBallotVisit, google_civic_election_id: ", google_civic_election_id);

    Dispatcher.loadEndpoint("saveAnalyticsAction",
      {
        action_constant: ACTION_BALLOT_VISIT,
        google_civic_election_id: google_civic_election_id,
      });
  },

  saveActionVoterGuideVisit: function (organization_we_vote_id, google_civic_election_id) {
    const ACTION_VOTER_GUIDE_VISIT = 1;
    console.log("AnalyticsActions, saveActionVoterGuideVisit, google_civic_election_id: ", google_civic_election_id);

    Dispatcher.loadEndpoint("saveAnalyticsAction",
      {
        action_constant: ACTION_VOTER_GUIDE_VISIT,
        google_civic_election_id: google_civic_election_id,
        organization_we_vote_id: organization_we_vote_id,
      });
  },

  saveActionWelcomeVisit: function (google_civic_election_id) {
    const ACTION_WELCOME_VISIT = 12;
    console.log("AnalyticsActions, saveActionWelcomeVisit, google_civic_election_id: ", google_civic_election_id);

    Dispatcher.loadEndpoint("saveAnalyticsAction",
      {
        action_constant: ACTION_WELCOME_VISIT,
        google_civic_election_id: google_civic_election_id,
      });
  },

};
