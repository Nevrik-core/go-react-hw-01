import styled from "@emotion/styled";


export const ContainerStats = styled.section`
    display: flex;
    flex-direction: column;
    background-color: ${props => props.theme.colors.lighterBg};
    margin: 0 auto;
    margin-top: 100px;
    width: 400px;
    margin-bottom: 50px;
    border: 1px solid #bbb;
`;

export const StatTitle = styled.h2`
    font-weight: 300;
    text-align: center;
`;

export const StatList = styled.ul`
    display: flex;
    justify-content: center;
    list-style: none;
    margin: 0;
    padding: 0;
`;


export const StatItem = styled.li`
    color: white;
    font-weight: 400;
    width: 100px;
    padding: 12px;
    text-align: center;
`;

export const StatLabel = styled.span`

`;

export const StatPercentage = styled.span`
    display: inline-block;
    margin-top: 5px;
    font-size: 22px;
    font-weight: 500;
`;


