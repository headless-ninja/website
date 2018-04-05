import React from 'react';
import styled from 'styled-components';
import Link from '../Link';
import categories from '../../../content/docs/categories.yml';

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

    return (
      <TOCList>
        {postsPerCategory.map(({ id, label, posts }) => (
          <li key={id}>
            {label && <Heading>{label}</Heading>}
            <TOCInnerList>
              {posts.map(post => (
                <li key={post.slug}>
                  <Link to={post.slug} className={post.stub ? 'stub' : null}>
                    {post.title}
                  </Link>
                </li>
              ))}
            </TOCInnerList>
          </li>
        ))}
      </TOCList>
    );
  }
}

const TOCList = styled.ul`
  padding: ${props => props.theme.sitePadding};

  list-style: none;
  margin: 0;
`;

const Heading = styled.span`
  color: ${props => props.theme.brand.pink};
  margin: 0;
  font-size: 0.9rem;
`;

const TOCInnerList = styled.ul`
  list-style: none;
  line-height: 2;
  font-size: 0.8rem;
  margin: 0;

  li {
    margin: 0;

    a {
      color: black;
      background-image: none;
    }
    a.stub {
      color: grey;
      font-style: italic;
    }

    @media (hover) {
      a:hover {
        border-bottom: 1px solid black;
      }
    }
  }
`;

export default TableOfContents;
