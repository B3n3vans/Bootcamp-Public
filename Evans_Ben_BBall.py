players = [
    {
        "name": "Kevin Durant", 
        "age":34, 
    	"position": "small forward", 
    	"team": "Brooklyn Nets"
    },
    {
    	"name": "Jason Tatum", 
    	"age":24, 
    	"position": "small forward", 
    	"team": "Boston Celtics"
    },
    {
    	"name": "Kyrie Irving", 
    	"age":32,
        "position": "Point Guard", 
    	"team": "Brooklyn Nets"
    },
    {
    	"name": "Damian Lillard", 
    	"age":33,
        "position": "Point Guard", 
    	"team": "Portland Trailblazers"
    },
    {
    	"name": "Joel Embiid", 
    	"age":32,
        "position": "Power Foward", 
    	"team": "Philidelphia 76ers"
    },
    {
        "name": "DeMar DeRozan",
        "age": 32,
        "position": "Shooting Guard",
        "team": "Chicago Bulls"
    }
]

class Player:
    def __init__(self, name):
        self.name = name['name']
        self.age = name['age']
        self.position = name['position']
        self.team = name['team']
    @classmethod
    def getTeam(cls, team_list):
        # new_Team = []
        # cls.team_list = team_list
        for teammate in team_list:
            new_Team.append(Player(teammate))
        return new_Team

Kevin = players[0]
Jason = players[1]
Kyrie = players[2]
Damian = players[3]
Joel = players[4]
Demar = players[5]

Player_Kevin = Player(Kevin)
Player_Jason = Player(Jason)
Player_Kyrie = Player(Kyrie)
Player_Damian = Player(Damian)
Player_Joel = Player(Joel)
Player_Demar = Player(Demar)

new_Team = []

# for teammate in players:
#     new_Team.append(Player(teammate))

# print(new_Team[0].name)
print(Player.getTeam(players))
print(new_Team[2].age)