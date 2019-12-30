import React from 'react';
import new_repo from '../../assets/images/new_repo.svg';
import fork from '../../assets/images/fork.png';
import moment from 'moment';
import './Overview.scss';

const Overview = props => {
  const [state, setState] = React.useState({
    searchData: [],
    search: false,
  });

  const getFilter = (id, e) => {
    let value = e.target.value;
    let searchRes = [];
    let searchVal = true;
    if (value === "") {
      searchRes = props.repos;
      searchVal = false;
    } else if (id === "name") {
      props.repos.forEach((item) => {
        if (item.name.toLowerCase().includes(value.toLowerCase())) {
          searchRes.push(item);
        }
      })
    } else if (id === "type") {
      if (value.split(': ')[1].includes("All")) {
        searchRes = props.repos;
        searchVal = false;
      } else {
        if(value.includes("Private")) {
          props.repos.forEach((item) => {
            if (item.private === true) {
              searchRes.push(item);
            }
          })
        } else {
          props.repos.forEach((item) => {
            if (item.private === false) {
              searchRes.push(item);
            }
          })
        }
      }
    } else if (id === "language") {
      if (value.split(': ')[1].includes("All")) {
        searchRes = props.repos;
        searchVal = false;
      } else {
        props.repos.forEach((item) => {
          if (item.language !== null && item.language.toLowerCase().includes(value.split(': ')[1].toLowerCase())) {
            searchRes.push(item);
          }
        })
      }
    } 

    setState({
      ...state,
      search: searchVal,
      searchData: searchRes,
    })
  }

  let dataToShow = props.repos;

  if(state.search) {
    dataToShow = state.searchData;
  } else {
    dataToShow = props.repos;
  }

  return (
    <div className="col-md-8 col-12 pull-left">
      <div className="top-nav">
        <nav>
          <span className="nav-item">Overview</span>
          <span className="nav-item active">
            Repositories
            <span className="sub-script">11</span>
          </span>
          <span className="nav-item">
            Stars
            <span className="sub-script">5</span>
          </span>
          <span className="nav-item">
            Followers
            <span className="sub-script">2</span>
          </span>
          <span className="nav-item">
            Following
            <span className="sub-script">2</span>
          </span>
        </nav>

      </div>

      <div className="search-div row">
        <input type="search" id="repo-filter" className="col-sm repo-search-inpt width-full" placeholder="Search repositories…" autocomplete="off" onChange={e => getFilter('name', e)} />
        <div className="col-sm">
          <select className="dropbtn" onChange={e => getFilter('type', e)}>
            <option className="select-meno-item">{'Type: All'}</option>
            <option className="select-meno-item">{'Type: Public'}</option>
            <option className="select-meno-item">{'Type: Private'}</option>
          </select>
        </div>
        <div className="col-sm">
          <select className="dropbtn" onChange={e => getFilter('language', e)}>
            <option>{'Language: All'}</option>
            <option>{'Language: CSS'}</option>
            <option>{'Language: HTML'}</option>
            <option>{'Language: JavaScript'}</option>
          </select>
        </div>
        <div className="col-sm">
          <button className="dropbtn new-btn">
            <img src={new_repo} className="new-repo-icon" />
            New
          </button>
        </div>
      </div>

      <div className="all-repos">
        {
          dataToShow.map((item, index) => {
            return (
              <div className="repo" key={index}>
                <p className="repo-name">{item.name}</p>
                {
                  item.description ? (
                    <span className="desc-txt">
                      {item.description}
                    </span>
                  ) : null
                }

                <div>
                  <span className="desc-txt"></span>
                  {
                    item.language ? (
                      <span className="desc-txt">
                        <div className="yello1-dot" />
                        {item.language}
                      </span>
                    ) : null
                  }
                  {
                    item.forks_count > 0 ? (
                      <span className="desc-txt margin-left">
                        <img className="icons-small" src={fork} />
                        {item.forks_count}
                      </span>
                    ) : null
                  }
                  <span className="desc-txt margin-left">{moment(item.updated_at).format('LL')}</span>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  );

};

export default Overview;
