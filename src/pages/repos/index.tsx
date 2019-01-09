import moment from "moment";
import * as React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import styled from "styled-components";
import LoadingOverlay from "../../components/data/LoadingOverlay";
import LoadingOverlayInner from "../../components/data/LoadingOverlayInner";
import LoadingSpinner from "../../components/data/LoadingSpinner";
import Container from "../../components/layout/Container";
import Page from "../../components/layout/Page";

import { Dispatch } from "redux";
import { ApplicationState, ConnectedReduxProps } from "../../store";
import { fetchRequest } from "../../store/repos/actions";
import { Repo } from "../../store/repos/types";

// Separate state props + dispatch props to their own interfaces.
interface PropsFromState {
  loading: boolean;
  data: Repo[];
  errors?: string;
}

// We can use `typeof` here to map our dispatch types to the props, like so.
interface PropsFromDispatch {
  fetchRequest: typeof fetchRequest;
}

// Combine both state + dispatch props - as well as any props we want to pass - in a union type.
type AllProps = PropsFromState & PropsFromDispatch & ConnectedReduxProps;

class ReposIndexPage extends React.Component<AllProps> {
  public componentDidMount() {
    const { data } = this.props;

    if (data.length === 0) {
      this.props.fetchRequest();
    }
  }

  public render() {
    const { loading } = this.props;

    return (
      <Page>
        <Container>
          <TableWrapper>
            {loading && (
              <LoadingOverlay>
                <LoadingOverlayInner>
                  <LoadingSpinner />
                </LoadingOverlayInner>
              </LoadingOverlay>
            )}

            {this.renderRepoInfo(this.props.data)}
          </TableWrapper>
        </Container>
      </Page>
    );
  }

  private renderRepoInfo = data => {
    if (data.full_name) {
      return (
        <div>
          <div>
            <a href={data.html_url}>{data.full_name}</a>
          </div>
          <div>Description: {data.description}</div>
          <div>
            Owner: <a href={data.owner.login}>{data.owner.login}</a>
          </div>
          <div>
            Homepage: <a href={data.homepage}>{data.homepage}</a>
          </div>
          <div>Stars: {data.stargazers_count}</div>
          <div>Watchers: {data.watchers}</div>
          <div>Open issues: {data.open_issues}</div>
        </div>
      );
    }
  };

  private renderData() {
    const { data } = this.props;

    return {
      /* {data.slice(0, 20).map((repo, i) => {
          const lastMatch = moment(repo.last_match_time * 1000);

          return (
            <tr key={repo.repo_id}>
              <td>{i + 1}</td>
              <RepoDetail>
                {repo.logo_url && (
                  <RepoLogo src={repo.logo_url} alt={repo.tag} />
                )}
                <RepoName>
                  <Link to={`/repos/${repo.repo_id}`}>{repo.name}</Link>
                </RepoName>
              </RepoDetail>
              <td>{repo.rating.toFixed(0)}</td>
              <td>
                {repo.wins || 0} / {repo.losses || 0}
              </td>
              <td>
                <time
                  dateTime={lastMatch.toISOString()}
                  title={lastMatch.format("LLLL")}
                >
                  {lastMatch.fromNow()}
                </time>
              </td>
            </tr>
          );
        })} */
    };
  }
}

// It's usually good practice to only include one context at a time in a connected component.
// Although if necessary, you can always include multiple contexts. Just make sure to
// separate them from each other to prevent prop conflicts.
const mapStateToProps = ({ repos }: ApplicationState) => ({
  loading: repos.loading,
  errors: repos.errors,
  data: repos.data
});

// mapDispatchToProps is especially useful for constraining our actions to the connected component.
// You can access these via `this.props`.
const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchRequest: () => dispatch(fetchRequest())
});

// Now let's connect our component!
// With redux v4's improved typings, we can finally omit generics here.
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReposIndexPage);

const TableWrapper = styled.div`
  position: relative;
  max-width: 720px;
  margin: 0 auto;
  min-height: 200px;
`;

const RepoDetail = styled.td`
  display: flex;
  flex-direction: row;
  align-items: center;
  min-height: 66px;
`;

const RepoLogo = styled.img`
  width: 50px;
  height: 50px;
`;

const RepoName = styled.div`
  flex: 1 1 auto;
  height: 100%;
  margin-left: 1rem;

  a {
    color: red;
  }
`;
