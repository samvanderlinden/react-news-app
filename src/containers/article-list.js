import React, { Component } from 'react';
import { connect } from 'react-redux';

class ArticleList extends Component {
    renderList() {
        return this.props.articles.map((article) => {
            return (
                <li key={article.title}>{article.source_name}, {article.title}, {article.date_published}</li>
            );
        })
    }
    render() {
        return (
            <ul>
                {this.renderList()}
            </ul>
        );
    }
}

function mapStateToProps(state) {
    return {
        articles: state.articles,
    }
}

export default connect(mapStateToProps)(ArticleList);