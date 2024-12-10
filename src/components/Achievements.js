import React from "react";
import styled from "styled-components";
import { FaExternalLinkAlt } from "react-icons/fa"; // Import the link icon

const achievements = [
  {
    id: 1,
    platform: "LeetCode",
    title: "LeetCode",
    description: `
      - Knight @Leetcode (rating : 1926).
      - Participated in 35+ weekly and bi-weekly contests.
      - Solved 650+ problems.
      - Best global ranks: 1183, 1387, 1425.
    `,
    link: "https://leetcode.com/u/nCoderr23/", // Add link to LeetCode
  },
  {
    id: 2,
    platform: "CodeChef",
    title: "CodeChef",
    description: `
      - 4 star @Codechef (rating : 1887).
      - Participated in 12+ contests.
      - Best global ranks: 37, 652, 1003.
    `,
    link: "https://www.codechef.com/users/amit_40", // Add link to CodeChef
  },
  {
    id: 3,
    platform: "Codeforces",
    title: "Codeforces",
    description: `
      - Specialist @Codeforces.
      - Current Rating : 1409.
      - Solved 350+ problems.
    `,
    link: "https://codeforces.com/profile/xerox_07", // Add link to Codeforces
  },
  {
    id: 4,
    platform: "GeeksforGeeks",
    title: "GeeksforGeeks",
    description: `
      - Solved 700+ problems.
      - Published 10+ Articles.
    `,
    link: "https://www.geeksforgeeks.org/user/xerox7/", // Add link to GeeksforGeeks
  },
  {
    id: 5,
    platform: "Open Source",
    title: "Open Source",
    description: `
      - GSSOC’24 Contributor.
      - SWOC’24 (Social Winter of Code) Contributor.
      - Improved UI/UX and resolved 25+ GitHub issues.
    `,
    link: "https://github.com/Xerox563", // Add link to GitHub
  },
  {
    id: 6,
    platform: "Medium",
    title: "Medium",
    description: `
      - Authored 5+ articles providing valuable insights.
      - Covered topics like popular libraries, Framer Motion, and frameworks.
    `,
    link: "https://medium.com/@amit0101ag", // Add link to Medium
  },
];

const Container = styled.div`
  padding-right: 100px;
  padding-left: 100px;
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 40px;
  padding-bottom: 40px;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(0, 212, 255, 1) 150%,
    rgba(2, 0, 36, 1) 150%
  );
  border-radius: 10px;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 30px;
  color: white;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Grid = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
`;

const Card = styled.div`
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  background: linear-gradient(to bottom, #240b36, #c31432);
  color: white;
  box-shadow: 0 4px 6px rgba(0, 0.9, 0.7, 0.5);
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
  }

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CardTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const CardDescription = styled.p`
  font-size: 1rem;
  margin-bottom: 10px;
  white-space: pre-line;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  a {
    color: white;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 5px;
    font-weight: bold;
    transition: color 0.3s;

    &:hover {
      color: #ffcc00;
    }
  }
`;

const Achievements = () => {
  return (
    <Container>
      <Title>Achievements</Title>
      <Grid>
        {achievements.map((achievement) => (
          <Card key={achievement.id}>
            <div>
              <CardTitle>{achievement.title}</CardTitle>
              <CardDescription>{achievement.description}</CardDescription>
            </div>
            <CardFooter>
              <a
                href={achievement.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit <FaExternalLinkAlt />
              </a>
            </CardFooter>
          </Card>
        ))}
      </Grid>
    </Container>
  );
};

export default Achievements;
