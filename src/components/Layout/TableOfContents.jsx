import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import categories from '../../../content/docs/categories.yml';

// This class should not be used for listing posts, but for chapter based Docs. See PostListing for that.
// You'll also need to add your chapters to siteConfig

class TableOfContents extends React.Component {
  render() {
    const postsPerCategory = categories.map(({ id, label }) => ({
      id,
      label,
      posts: [],
    }));

    this.props.docs.forEach(({ node: { frontmatter, fields: { slug } } }) => {
      postsPerCategory
        .find(category => category.id === frontmatter.category)
        .posts.push({ slug, ...frontmatter });
    });

    console.log(postsPerCategory);

    return (
      <TableOfContentsContainer>
        <ul>
          {postsPerCategory.map(({ id, label, posts }) => (
            <li className="chapter" key={id}>
              <h5 className="tocHeading">{label}</h5>
              <ul className="chapterItems">
                {posts.map(post => (
                  <LessonContainer>
                    <Link to={post.slug}>
                      <li>
                        <span>
                          <h6>{post.title}</h6>
                        </span>
                      </li>
                    </Link>
                  </LessonContainer>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </TableOfContentsContainer>
    );
  }
}

const TableOfContentsContainer = styled.div`
  padding: ${props => props.theme.sitePadding};

  & > ul,
  .chapterItems {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  p,
  h6 {
    display: inline-block;
    font-weight: 200;
    margin: 0;
  }

  .tocHeading {
    font-weight: 200;
    color: ${props => props.theme.brand};
    margin-bottom: 10px;
  }
`;

const LessonContainer = styled.div`
  h6,
  p {
    color: black;
    margin: 0;
    line-height: 1.5;
  }
  li {
    margin: 0;
  }
  &:hover {
    li {
      span {
        border-bottom: 1px solid black;
      }
    }
  }
`;

export default TableOfContents;
