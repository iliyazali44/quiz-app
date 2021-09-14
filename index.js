const quizData=[
	{ 
		question:"what is the value of 10+5*6-0*5 ?",
		a:"20",
		b:"15",
		c:"40",
		d:"5",
		correct:"c",
	},
	{ 
		question:"what is the value of 5! ?",
		a:"125",
		b:"25",
		c:"60",
		d:"120",
		correct:"d",
	},	
	{ 
		question:"who is the present Indian cricket team captain?",
		a:"Rohit Sharma",
		b:"M.S Dhoni",
		c:"Virat Kohli",
		d:"Shikhar Dhawan",
		correct:"c",
	},
	{ 
		question:"who is the Prime Minister of India?",
		a:"Narendra Modi",
		b:"Manmohan singh",
		c:"Atal Bihari Vajpayee",
		d:"Rajiv Gandhi",
		correct:"a",
	},
	{ 
		question:"what is the largest prime number between 1-100 ?",
		a:"47",
		b:"83",
		c:"91",
		d:"None of the above",
		correct:"d",
	},
];

const  quiz=document.getElementById('quiz');
const answerEls= document.querySelectorAll('.answer');
const  questionEl=document.getElementById('question');
const a_text=document.getElementById('a_text');
const  b_text=document.getElementById('b_text');
const c_text=document.getElementById('c_text');
const  d_text=document.getElementById('d_text');
const  submitBtn=document.getElementById('submit');

let currentquiz=0;
let score=0;
let correctans=0;
loadquiz();

function loadquiz(){
	deselectanswers();

	const  currentquizdata=quizData[currentquiz];

	questionEl.innerText=currentquizdata.question;
	a_text.innerText=currentquizdata.a;
	b_text.innerText=currentquizdata.b;
	c_text.innerText=currentquizdata.c;
	d_text.innerText=currentquizdata.d;
}

function getSelected(){
	let answer=undefined;
	answerEls.forEach((answerE1)=>{
		if(answerE1.checked){
			answer=answerE1.id;
		}
	});
	return answer;
}
function deselectanswers() {

	answerEls.forEach((answerE1)=>{
		answerE1.checked=false;
	});
}

let correctones=0;
let wrongones=0;
submitBtn.addEventListener("click",()=>{
	const  answer=getSelected();

	if(answer){
		if (answer===quizData[currentquiz].correct){
			score=score+4;
			correctans++;
		}
		else{
			score-=1;
			wrongones++;
		}
	
	currentquiz++;
	if(currentquiz<quizData.length){
		loadquiz();
	}else{
	
		quiz.innerHTML=`
		<h2> You answered correctly at ${correctans} /${quizData.length} </h2>
		<h2 text-align:center; style="background-color:powdergreen;color:blue;" >Total marks you scored : ${score} out of 20 </h2>
		

		<h2>No. of Attempted wrong:  ${wrongones} </h2>
		<button onclick="location.reload()">Reload</button>
		`;
	}
		
	}
});

