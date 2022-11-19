export const leaderboardHome = `SELECT t.team_name AS name,
SUM(CASE
WHEN m.home_team_goals > m.away_team_goals THEN 3
WHEN m.home_team_goals < m.away_team_goals THEN 0
ELSE 1 END) AS totalPoints,
COUNT(m.home_team) AS totalGames,
SUM(IF (m.home_team_goals > m.away_team_goals, 1, 0)) AS totalVictories,
SUM(IF (m.home_team_goals = m.away_team_goals, 1, 0)) AS totalDraws,
SUM(IF (m.home_team_goals < m.away_team_goals, 1, 0)) AS totalLosses,
SUM(m.home_team_goals) AS goalsFavor, 
SUM(m.away_team_goals) AS goalsOwn,
SUM(m.home_team_goals) - SUM(m.away_team_goals) AS goalsBalance,
ROUND((SUM(CASE
WHEN m.home_team_goals > m.away_team_goals THEN 3
WHEN m.home_team_goals = m.away_team_goals THEN 1
ELSE 0 END) / (COUNT(m.home_team) * 3)) * 100, 2) AS efficiency
FROM teams AS t
INNER JOIN matches AS m
ON t.id = m.home_team
WHERE m.in_progress = 0
GROUP BY name
ORDER BY totalPoints DESC, totalVictories DESC, goalsBalance DESC, goalsFavor DESC, goalsOwn DESC`;

export const leaderboardAway = `SELECT t.team_name AS name,
SUM(CASE
WHEN m.away_team_goals > m.home_team_goals THEN 3
WHEN m.away_team_goals < m.home_team_goals THEN 0
ELSE 1 END) AS totalPoints,
COUNT(m.away_team) AS totalGames,
SUM(IF ( m.away_team_goals > m.home_team_goals, 1, 0)) AS totalVictories,
SUM(IF (m.home_team_goals = m.away_team_goals, 1, 0)) AS totalDraws,
SUM(IF (m.away_team_goals < m.home_team_goals, 1, 0)) AS totalLosses,
SUM(m.away_team_goals) AS goalsFavor, 
SUM(m.home_team_goals) AS goalsOwn,
SUM(m.away_team_goals) - SUM(m.home_team_goals) AS goalsBalance,
ROUND((SUM(CASE
WHEN m.away_team_goals > m.home_team_goals THEN 3
WHEN m.away_team_goals < m.home_team_goals THEN 0
ELSE 1 END) / (COUNT(m.away_team) * 3)) * 100, 2) AS efficiency
FROM teams AS t
INNER JOIN matches AS m
ON t.id = m.away_team
WHERE m.in_progress = 0
GROUP BY name
ORDER BY totalPoints DESC, totalVictories DESC, goalsBalance DESC, goalsFavor DESC, goalsOwn DESC`;
