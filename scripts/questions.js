// a question object would need to know what...
// 1) the question 2) the answer 3) the three other possible answers
const questions = [
    {
        question: 'What is the capital of Alabama',
        choices: ['Birmingham','Montgomery','Hunstville','Mobile'],
        answer: 'Montgomery'
    } ,
    {
        question: 'What is the capital of Alaska',
        choices:['Juneau', 'Anchorage', 'Fairbanks', 'Bardger'],
        answer: 'Juneau'
    } ,
    {
        question: 'What is the capital of Arizona',
        choices: ['Phoenix', 'Tucson', 'Mesa', 'Scottsdale'],
        answer:'Phoenix',
    } 
    //,
    // {
    //     question: 'What is the capital of Arkansas',
    //     choices: ['Little Rock', 'Fort Smith', 'Fayetteville', 'Springdale'],
    //     answer: 'Little Rock'
    // } ,
    // {
    //     question: 'What is the capital of California',
    //     choices: ['Sacramento', 'Los Angeles', 'San Diego', 'San Jose'],
    //     answer: 'Sacramento'
    // } ,
    // {
    //     question: 'What is the capital of Colorado',
    //     choices: ['Boulder', 'Denver', 'Aurora', 'Fort Collins'],
    //     answer: 'Denver'
    // } ,
    // {
    //     question: 'What is the capital of Connecticut',
    //     choices: ['Stamford', 'New Haven', 'Bridgeport', 'Hartford'],
    //     answer: 'Hartford'
    // } ,
    // {
    //     question: 'What is the capital of Delaware',
    //     choices: ['Harrington', 'Dover', 'Wilmington', 'Delaware City'],
    //     answer: 'Dover'
    // } ,
    // {
    //     question: 'What is the capital of Florida',
    //     choices: ['Tallahassee', 'Orlando', 'Miami', 'Jacksonville'],
    //     answer: 'Tallahassee'
    // } ,
    // {
    //     question: 'What is the capital of Georgia',
    //     choices: ['Augusta', 'Atlanta', 'Savannah', 'Athens'],
    //     answer: 'Atlanta'
    // } ,
    // {
    //     question: 'What is the capital of Hawaii',
    //     choices: ['Hawi', 'Hilo', 'Honolulu','Kailua-Kona'],
    //     answer: 'Honolulu'
    // } ,
    // {
    //     question: 'What is the capital of Idaho',
    //     choices: ['Meridian', 'Nampa', 'Idaho Falls', 'Boise'],
    //     answer: 'Boise'
    // } ,
    // {
    //     question: 'What is the capital of Illinois',
    //     choices: ['Chicago', 'Springfield', 'Rockford', 'Champaign'],
    //     answer: 'Springfield'
    // } ,
    // {
    //     question: 'What is the capital of Indiana',
    //     choices: ['Indianapolis', 'Evansville', 'Fort Wayne', 'Bloomington'],
    //     answer: 'Indianapolis'
    // } ,
    // {
    //     question: 'What is the capital of Iowa',
    //     choices: ['Davenport', 'Iowa City', 'Des Moines', 'Cedar Rapids'],
    //     answer: 'Des Moines'
    // } ,
    // {
    //     question: 'What is the capital of Kansas',
    //     choices: ['Kansas City', 'Topeka', 'Wichita', 'Manhattan'],
    //     answer: 'Topeka'
    // } ,
    // {
    //     question: 'What is the capital of Kentucky',
    //     choices: ['Frankfort', 'Louisville', 'Lexington', 'Bowling Green'],
    //     answer: 'Frankfort'
    // } ,
    // {
    //     question: 'What is the capital of Louisiana',
    //     choices: ['New Orleans', 'Baton Rouge', 'Lafayette', 'Shreveport'],
    //     answer: 'Baton Rouge'
    // } ,
    // {
    //     question: 'What is the capital of Maine',
    //     choices: ['Portland', 'Augusta', 'Bangor', 'Harpswell'],
    //     answer: 'Augusta'
    // } ,
    // {
    //     question: 'What is the capital of Maryland',
    //     choices: ['Annapolis', 'Baltimore', 'Ocean City', 'Frederick'],
    //     answer: 'Annapolis'
    // } ,
    // {
    //     question: 'What is the capital of Massachusetts',
    //     choices: ['Plymouth', 'Worcester', 'Cambridge', 'Boston'],
    //     answer: 'Boston'
    // } ,
    // {
    //     question: 'What is the capital of Michigan',
    //     choices: ['Detroit', 'Lansing', 'Ann Arbor', 'Grand Rapids'],
    //     answer: 'Lansing'
    // } ,
    // {
    //     question: 'What is the capital of Minnesota',
    //     choices: ['St. Paul', 'Minnesapolis', 'Duluth', 'St. Cloud'],
    //     answer: 'St. Paul'
    // } ,
    // {
    //     question: 'What is the capital of Mississippi',
    //     choices: ['Laurel', 'Biloxi', 'Jackson', 'Oxford'],
    //     answer: 'Jackson'
    // } ,
    // {
    //     question: 'What is the capital of Missouri',
    //     choices: ['Jefferson City', 'Kansas City', 'St. Louis', 'Columbia'],
    //     answer: 'Jefferson City'
    // } ,
    // {
    //     question: 'What is the capital of Montana',
    //     choices: ['Billings', 'Bozeman', 'Helena', 'Missoula'],
    //     answer: 'Helena'
    // } ,
    // {
    //     question: 'What is the capital of Nebraska',
    //     choices: ['Lincoln', 'Nebraska City', 'Omaha', 'Grand Island'],
    //     answer: 'Lincoln'
    // } ,
    // {
    //     question: 'What is the capital of Nevada',
    //     choices: ['Carson City', 'Henderson', 'Las Vegas', 'Reno'],
    //     answer: 'Carson City'
    // } ,
    // {
    //     question: 'What is the capital of New Hampshire',
    //     choices: ['Concord', 'Manchester', 'Nashua', 'Portsmouth'],
    //     answer: 'Concord'
    // } ,
    // {
    //     question: 'What is the capital of New Jersey',
    //     choices: ['Atlantic City', 'Jersey City', 'Newark', 'Trenton'],
    //     answer: 'Trenton'
    // } ,
    // {
    //     question: 'What is the capital of New Mexico',
    //     choices: ['Albuquerque', 'Las Cruces', 'Roswell', 'Santa Fe'],
    //     answer: 'Santa Fe'
    // } ,
    // {
    //     question: 'What is the capital of New York',
    //     choices: ['Albany', 'Buffalo', 'New York City', 'Rochester'],
    //     answer: 'Albany'
    // } ,
    // {
    //     question: 'What is the capital of North Carolina',
    //     choices: ['Asheville', 'Chapel Hill', 'Charlotte', 'Raleigh'],
    //     answer: 'Raleigh'
    // } ,
    // {
    //     question: 'What is the capital of North Dakota',
    //     choices: ['Bismarck', 'Fargo', 'Grand Forks', 'Minot'],
    //     answer: 'Bismarck'
    // } ,
    // {
    //     question: 'What is the capital of Ohio',
    //     choices: ['Cincinnati', 'Cleveland', 'Columbus', 'Dayton'],
    //     answer: 'Columbus'
    // } ,
    // {
    //     question: 'What is the capital of Oklahoma',
    //     choices: ['Oklahoma City', 'Norman', 'Stillwater', 'Tulsa'],
    //     answer: 'Oklahoma City'
    // } ,
    // {
    //     question: 'What is the capital of Oregon',
    //     choices: ['Bend', 'Salem', 'Portland', 'Eugene'],
    //     answer: 'Salem'
    // } ,
    // {
    //     question: 'What is the capital of Pennsylvania',
    //     choices: ['Harrisburg', 'Philadelphia', 'Pittsburgh', 'Scranton'],
    //     answer: 'Harrisburg'
    // } ,
    // {
    //     question: 'What is the capital of Rhode Island',
    //     choices: ['Cranston', 'Newport', 'Providence', 'Warwick'],
    //     answer: 'Providence'
    // } ,
    // {
    //     question: 'What is the capital of South Carolina',
    //     choices: ['Charleston', 'Columbia', 'Greenville', 'Myrtle Beach'],
    //     answer: 'Columbia'
    // } ,
    // {
    //     question: 'What is the capital of South Dakota',
    //     choices: ['Deadwood', 'Pierre', 'Rapid City', 'Sioux Falls'],
    //     answer: 'Pierre'
    // } ,
    // {
    //     question: 'What is the capital of Tennessee',
    //     choices: ['Chattanooga', 'Knoxville', 'Nashville', 'Memphis'],
    //     answer: 'Nashville'
    // } ,
    // {
    //     question: 'What is the capital of Texas',
    //     choices: ['Austin', 'Dallas', 'Houston', 'San Antonio'],
    //     answer: 'Austin'
    // } ,
    // {
    //     question: 'What is the capital of Utah',
    //     choices: ['Ogden', 'Park City', 'Provo', 'Salt Lake City'],
    //     answer: 'Salt Lake City'
    // } ,
    // {
    //     question: 'What is the capital of Vermont',
    //     choices: ['Burlington', 'Montpelier', 'Rutland', 'Stowe'],
    //     answer: 'Montpelier'
    // } ,
    // {
    //     question: 'What is the capital of Virgina',
    //     choices: ['Alexandria', 'Norfolk', 'Richmond', 'Virginia Beach'],
    //     answer: 'Richmond'
    // } ,
    // {
    //     question: 'What is the capital of Washington',
    //     choices: ['Olympia', 'Seattle', 'Spokane', 'Tacoma'],
    //     answer: 'Olympia'
    // } ,
    // {
    //     question: 'What is the capital of West Virginia',
    //     choices: ['Charleston', 'Huntington', 'Martinsburg', 'Morgantown'],
    //     answer: 'Charleston'
    // } ,
    // {
    //     question: 'What is the capital of Wisconsin',
    //     choices: ['Kenosha', 'Madison', 'Milwaukee', 'Green Bay'],
    //     answer: 'Madison'
    // } ,
    // {
    //     question: 'What is the capital of Wyoming',
    //     choices: ['Casper', 'Cody', 'Cheyenne', 'Jackson'],
    //     answer: 'Cheyenne'
    // } 


]
