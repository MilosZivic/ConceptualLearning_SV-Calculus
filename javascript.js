    
function init(){
 
    //inicijalizacije promenljivih
    elt_header = document.getElementById('header');
    elt_side_content=document.getElementById('side_content');
    elt_footer=document.getElementById('footer');
    elt_naslov=document.getElementById('naslov');
    elt_calculator=document.getElementById('graphing_calculator');
    elt_naslovna_forma=document.getElementById('naslovna_forma');


    calculator = Desmos.GraphingCalculator(elt_calculator,{
        expressionsCollapsed: true
    });
    

    //footer deo
    elt_f_ispis=document.getElementById('f_ispis');

    //side_content deo
    elt_c_ispis=document.getElementById('c_ispis');  
    elt_c_ispis.innerHTML="ovo je napisano posle init() funkcije!";

}  
    

//INIT M_101
function init_M1_1(){
alert("modul1.1");

//osnovni deo
elt_naslov.innerHTML="MODUL 1.1: TANGENTA I SEČICA";
elt_header.style.visibility="visible";
elt_side_content.style.visibility="visible";
elt_footer.style.visibility="visible";
elt_calculator.style.visibility="visible";


elt_f_ispis.innerHTML=c_m101;

elt_naslovna_forma.innerHTML='&nbsp&nbsp<b>Odaberite opcije :</b>&nbsp&nbsp&nbsp<input type="checkbox" name="tangenta" value="tangenta" id="c_tangenta" onchange="cb_handler_m101_n_1(this.name,this.checked)" checked="true">Tangenta &nbsp&nbsp&nbsp'+
'<input type="checkbox" name="secica" value="secica" id="c_secica" onchange="cb_handler_m101_n_1(this.name,this.checked)" checked="true">Sečica&nbsp&nbsp&nbsp <b>Podesite parametar h =</b> -10<input type="range" name="rastojanje" value="rastojanje" id="r_rastojanje" '+
'min="-10" max="10" step="0.1" value="2" onchange="range_handler_m101_n_1(this.value)">10';





//desmos deo
calculator.setBlank();
calculator.setExpression({id:"f(x)_1",latex:"f(x)=x^2+2x-1"});
calculator.setExpression({id:"a",latex:"a=-1.5"});
calculator.setExpression({id:"k",latex:"k=f'(a)"});
calculator.setExpression({id:"n",latex:"n=f(a)-ka"});
calculator.setExpression({id:"tangenta",latex:"y=kx+n"});
calculator.setExpression({id:"h",latex:"h=1.5",sliderBounds:{ min: -10, max: 10}});
calculator.setExpression({id:"l",latex:"l=a+h"});
calculator.setExpression({id:"m",latex:"m=(f(a)-f(l))/(a-l)"});
calculator.setExpression({id:"secica",latex:"y-f(l)=m(x-l)"});
calculator.setExpression({id:"A",latex:"A=(l,f(l))"});
calculator.setExpression({id:"B",latex:"B=(a,f(a))"});

pom_x1=calculator.HelperExpression({latex:"a"});
pom_x2=calculator.HelperExpression({latex:"l"});

//footer ispis deo
f_c=c_m101;
f_i=i_m101;
f_e=e_m101;
    

//side_content ispis deo
s_c=s_c_m101;
s_c_ispis();

e_x_koordinata=document.getElementById('x_koordinata'); //na razlicite nacine su reseni observeri, onaj donji je mogao da se resi na ovaj nacin
e_y_koordinata=document.getElementById('y_koordinata');
e_k_t=document.getElementById('k_t');
e_tackaP_2=document.getElementById('tackaP_2');//na razlicite nacine su reseni observeri, onaj gornji je mogao da se resi na ovaj nacin
e_tackaQ=document.getElementById('tackaQ');
e_k_secice=document.getElementById('k_secice');



pom_x1.observe('numericValue', function(){
    e_x_koordinata.innerHTML=(pom_x1.numericValue).toFixed(2);
    e_y_koordinata.innerHTML=(pom_x1.numericValue*pom_x1.numericValue+2*pom_x1.numericValue-1).toFixed(2);
    e_k_t.innerHTML=(2*pom_x1.numericValue+2).toFixed(2);
    e_tackaP_2.innerHTML=(pom_x1.numericValue).toFixed(2)+","+(pom_x1.numericValue*pom_x1.numericValue+2*pom_x1.numericValue-1).toFixed(2);
    e_k_secice.innerHTML="("+(pom_x2.numericValue*pom_x2.numericValue+2*pom_x2.numericValue-1).toFixed(2)+"-("+(pom_x1.numericValue*pom_x1.numericValue+2*pom_x1.numericValue-1).toFixed(2)+"))/("+pom_x2.numericValue.toFixed(2)+"-("+pom_x1.numericValue.toFixed(2)+"))<br>"+
                        "="+(((pom_x2.numericValue*pom_x2.numericValue+2*pom_x2.numericValue-1).toFixed(2)-(pom_x1.numericValue*pom_x1.numericValue+2*pom_x1.numericValue-1).toFixed(2))/(pom_x2.numericValue.toFixed(2)-pom_x1.numericValue.toFixed(2))).toFixed(2);
                        

});

pom_x2.observe('numericValue', function(){
    e_tackaQ.innerHTML= (pom_x2.numericValue).toFixed(2)+","+(pom_x2.numericValue*pom_x2.numericValue+2*pom_x2.numericValue-1).toFixed(2);
    e_k_secice.innerHTML="("+(pom_x2.numericValue*pom_x2.numericValue+2*pom_x2.numericValue-1).toFixed(2)+"-("+(pom_x1.numericValue*pom_x1.numericValue+2*pom_x1.numericValue-1).toFixed(2)+"))/("+pom_x2.numericValue.toFixed(2)+"-("+pom_x1.numericValue.toFixed(2)+"))<br>"+
                        "="+(((pom_x2.numericValue*pom_x2.numericValue+2*pom_x2.numericValue-1).toFixed(2)-(pom_x1.numericValue*pom_x1.numericValue+2*pom_x1.numericValue-1).toFixed(2))/(pom_x2.numericValue.toFixed(2)-pom_x1.numericValue.toFixed(2))).toFixed(2);

})


}
//INIT M_102
function init_M1_2(){
    alert("modul1.2");
    

elt_naslov.innerHTML="MODUL 1.2: OSOBINE GRAFIKA FUNKCIJE";
elt_header.style.visibility="visible";
elt_side_content.style.visibility="visible";
elt_footer.style.visibility="visible";
elt_calculator.style.visibility="visible";

elt_f_ispis.innerHTML=c_m102;


elt_naslovna_forma.innerHTML='&nbsp&nbsp<b>Odaberite opcije :</b> <input type="checkbox" name="f(x)" value="osnova_f-ja" id="c_f(x)" onchange="cb_handler_m102_n_1(this.name,this.checked)" checked="true">'+
'<img src="http://latex.codecogs.com/gif.latex?f(x)=ax^5+bx^4+cx^3+dx^2+gx+h" border="0"/>&nbsp&nbsp&nbsp&nbsp&nbsp<input type="checkbox" name="f1(x)" value="prvi_izvod" id="c_f1(x)" onchange="cb_handler_m102_n_1(this.name,this.checked)">'+
'<img src="http://latex.codecogs.com/gif.latex?f\'\\left(x\\right)" border="0"/>&nbsp&nbsp&nbsp&nbsp&nbsp<input type="checkbox" name="f2(x)" value="drugi_izvod" id="c_f2(x)" onchange="cb_handler_m102_n_1(this.name,this.checked)">'+
'<img src="http://latex.codecogs.com/gif.latex?f\'\'\\left(x\\right)" border="0"/>';

//desmos deo
calculator.setBlank();
calculator.setExpression({id:"f(x)_2", latex:"f(x)=ax^5+bx^4+cx^3+dx^2+gx+h"});
calculator.setExpressions([{id:"a",latex:"a=-0.7"},{id:"b",latex:"b=0.6"},{id:"c",latex:"c=1.7"},
                           {id:"d",latex:"d=-1.1"},{id:"g",latex:"g=-0.7"},{id:"h",latex:"h=0.2"}]);
calculator.setExpression({id:"1f",latex:"f'(x)", hidden:true});
calculator.setExpression({id:"2f",latex:"f''(x)", hidden:true});
calculator.setExpression({id:"raste",latex:"f\\left(x\\right)\\left\\{f'\\left(x\\right)>0\\right\\}",hidden:true});
calculator.setExpression({id:"opada",latex:"f\\left(x\\right)\\left\\{f'\\left(x\\right)<0\\right\\}",hidden:true,color: "#388c46"});
calculator.setExpression({id:"konv",latex:"f\\left(x\\right)\\left\\{f''\\left(x\\right)>0\\right\\}",hidden:true ,color:"#fa7e19"});
calculator.setExpression({id:"konk",latex:"f\\left(x\\right)\\left\\{f''\\left(x\\right)<0\\right\\}",hidden:true, color:"#000000"});






//footer ispis deo
f_c=c_m102;
f_i=i_m102;
f_e=e_m102;
    

    
//side_content ispis deo
s_c=s_c_m102;
s_c_ispis();
}


// INIT_M201
function init_M2_1(){
    alert("modul2.1");


elt_naslov.innerHTML="MODUL 2.1: <i>RIEMANN</i>-ove SUME";
elt_header.style.visibility="visible";
elt_side_content.style.visibility="visible";
elt_footer.style.visibility="visible";
elt_calculator.style.visibility="visible";

elt_f_ispis.innerHTML=c_m201;

elt_naslovna_forma.innerHTML='&nbsp&nbsp&nbsp<b>Izaberite funkciju:</b>&nbsp&nbsp <input type="radio" name="f_sel" value="f1" id="r_fsel1" onchange="r_handler_m201_n_1(this.value)" checked><img src="http://latex.codecogs.com/gif.latex?f_1(x)=2sin(x)" border="0"/>'+
'&nbsp&nbsp<input type="radio" name="f_sel" value="f2" id="r_fsel2" onchange="r_handler_m201_n_1(this.value)"><img src="http://latex.codecogs.com/gif.latex?f_2(x)=x^2" border="0"/>&nbsp&nbsp<input type="radio" name="f_sel" value="f3" id="r_fsel3" onchange="r_handler_m201_n_1(this.value)">'+
'<img src="http://latex.codecogs.com/gif.latex?f_3(x)=10/x^2" border="0"/>&nbsp&nbsp&nbsp&nbsp&nbsp<b>Podesite parametar n =</b> 10<input type="range" name="n" value="broj_koraka" id="br_koraka_n" min="10" max="50" step="10" value="10" onchange="range_handler_m201_n_1(this.value)">50';


//desmos deo
calculator.setBlank();
calculator.setExpression({id:'f(x)', latex: "f\\left(x\\right)=2\\sin\\ (x)\\ \\left\\{0\\le x\\le10\\right\\}"});
calculator.setExpression({id:'n', latex:'n=30'});
calculator.setExpression({id:'n', sliderBounds: { min: 10, max: 50, step: 10}});

var p=calculator.HelperExpression({latex:'n'});
var brojac=1;

function obrisi(){
    for(i=1;i<=50;i++){
         calculator.removeExpressions([
             {id:'A'+i},
             {id:'B'+i},
             {id:'C'+i},
             {id:'D'+i},
             {id:'poligon'+i}
             ]);
    }
 }
 p.observe('numericValue',function(){
    var m=p.numericValue;
    //console.log(m);
    var q=10/m;
   //console.log(q);

   // console.log(p.numericValue);
    
    
    if(brojac>=2){
     obrisi();   
    //calculator.setState(state);
    //console.log(brojac);
    //console.log(m);
}
for(i=q,n=1;i<=10;i=i+q,n++){
            
    var v = 'f('+(i-q/2)+')';
    calculator.setExpression({id:'A'+n, latex:'A_{'+n+'}=('+(i-q)+',0)',hidden:'true'});
    calculator.setExpression({id:'B'+n, latex:'B_{'+n+'}=('+i+',0)', hidden:'true'});
    calculator.setExpression({id:'C'+n, latex:'C_{'+n+'}=('+(i-q)+','+v+')', hidden:'true'});
    calculator.setExpression({id:'D'+n, latex:'D_{'+n+'}=('+i+','+v+')', hidden:'true'});
    calculator.setExpression({id:'poligon'+n, latex: '\\operatorname{polygon}\\left(A_{'+n+'},B_{'+n+'},D_{'+n+'},C_{'+n+'}\\right)', color: "#388c46"});
}
brojac++;
});

//footer ispis deo
f_c=c_m201;
f_i=i_m201;
f_e=e_m201;
    

    
//side_content ispis deo
s_c=s_c_m201;
s_c_ispis();
}

//INIT_202
function init_M2_2(){
    alert("modul2.2");

elt_naslov.innerHTML="MODUL 2.2: TANGENTA I SECICA";
elt_header.style.visibility="visible";
elt_side_content.style.visibility="visible";
elt_footer.style.visibility="visible";
elt_calculator.style.visibility="visible";
calculator.setExpression({id:'graph4', latex:'y=x^5'});

elt_f_ispis.innerHTML=c_m202;

//desmos deo


//footer ispis deo
f_c=c_m202;
f_i=i_m202;
f_e=e_m202;
    

    
//side_content ispis deo
s_c=s_c_m202;
s_c_ispis();
}


//INIT_301
function init_M3_1(){
    alert("modul3.1");
  

elt_naslov.innerHTML="MODUL 3.1: DIREKCIONA POLJA";
elt_header.style.visibility="visible";
elt_side_content.style.visibility="visible";
elt_footer.style.visibility="visible";
elt_calculator.style.visibility="visible";

elt_f_ispis.innerHTML=c_m301;

elt_naslovna_forma.innerHTML='&nbsp&nbsp&nbsp&nbsp<b>Izaberite y\'=F(x,y):</b> <input type="radio" name="f_sel_m301" value="f1" id="r_fsel_m301_1" onchange="r_handler_m301_n_1(this.value)" checked="true"><img src="http://latex.codecogs.com/gif.latex?y\'=x+y" border="0"/>'+
'&nbsp&nbsp&nbsp<input type="radio" name="f_sel_m301" value="f2" id="r_fsel_m301_2" onchange="r_handler_m301_n_1(this.value)"><img src="http://latex.codecogs.com/gif.latex?y\'=x^2+y^2-1" border="0"/>&nbsp&nbsp&nbsp<input type="radio" name="f_sel_m301" value="f3" id="r_fsel3_m301_3" onchange="r_handler_m301_n_1(this.value)">'+
'<img src="http://latex.codecogs.com/gif.latex?y\'=sin(x)*sin(y)" border="0"/>&nbsp&nbsp&nbsp&nbsp<b>Izaberite parametar n:</b> &nbsp&nbsp<input type="radio" name="n_sel_m301" value="n1" id="n_fsel_m301_1" onchange="r_handler_m301_n_2(this.value)" checked="true">n=1&nbsp<input type="radio" name="n_sel_m301" value="n2" id="n_fsel_m301_2" onchange="r_handler_m301_n_2(this.value)">n=0.5';


//footer ispis deo
f_c=c_m301;
f_i=i_m301;
f_e=e_m301;
    
//side_content ispis deo
s_c=s_c_m301;
s_c_ispis();




//desmos deo
calculator.setBlank();

//opcija1
calculator.setExpression({id:"f(x,y)", latex:"f(x,y)=x+y"});


//punjenje niza(liste) elementima
latex_niz="X=[";
for(i=1,dx=1,n=-11;i<=21;i++,n++){
    
    if (i==21){
        latex_niz+=n+dx+"]";
    }
    else{
    latex_niz+=n+dx+",";
    }
}
//console.log(latex_niz);

calculator.setExpression({id:"X[]",latex:latex_niz});


//generisanje "serije" izraza
s=0.3;//duzina linija
for(i=-10;i<=10;i++){

    calculator.setExpression({id:"f"+i, latex:"f\\left(X,"+i+"\\right)\\left(x-X\\right)+("+i+")\\left\\{\\left|x-X\\right|\\le\\frac{"+s+"}{\\sqrt{1+\\left(f\\left(X,"+i+"\\right)\\right)^2}}\\right\\}",color: "#388c46" });

}



/*
//punjenje niza(liste) elementima
latex_niz="X=[";
for(i=1,dx=0.5,n=-10.5;i<=42;i++,n=n+0.5){
    
    if (i==42){
        latex_niz+=n+dx+"]";
    }
    else{
    latex_niz+=n+dx+",";
    }
}
//console.log(latex_niz);

calculator.setExpression({id:"X[]",latex:latex_niz});


//generisanje "serije" izraza
s=0.15;//duzina linija
for(i=-10;i<=10;i=i+0.5){

    calculator.setExpression({id:"f"+i, latex:"f\\left(X,"+i+"\\right)\\left(x-X\\right)+("+i+")\\left\\{\\left|x-X\\right|\\le\\frac{"+s+"}{\\sqrt{1+\\left(f\\left(X,"+i+"\\right)\\right)^2}}\\right\\}" });
}

*/
}
//INIT_M301_OPCIJA1
function opcija_n1(){
    calculator.removeExpression({id:"X[]"});//brisanje niza
    
    for(i=-10;i<=10;i=i+0.5){
       calculator.removeExpression({id:"f"+i});
    }

    //punjenje niza(liste) elementima
    latex_niz="X=[";
    for(i=1,dx=1,n=-11;i<=21;i++,n++){
        
        if (i==21){
            latex_niz+=n+dx+"]";
        }
        else{
        latex_niz+=n+dx+",";
        }
    }
    calculator.setExpression({id:"X[]",latex:latex_niz});
    
    //generisanje "serije" izraza
    s=0.3;//duzina linija
    for(i=-10;i<=10;i++){
    
        calculator.setExpression({id:"f"+i, latex:"f\\left(X,"+i+"\\right)\\left(x-X\\right)+("+i+")\\left\\{\\left|x-X\\right|\\le\\frac{"+s+"}{\\sqrt{1+\\left(f\\left(X,"+i+"\\right)\\right)^2}}\\right\\}",color: "#388c46" });
    
    }
    }

    //INIT_M301_OPCIJA2
    function opcija_n2(){
        calculator.removeExpression({id:"X[]"});//brisanje niza
        for(i=-10;i<=10;i++){
            calculator.removeExpression({id:"f"+i});
         }
        
        //punjenje niza(liste) elementima
        latex_niz="X=[";
        for(i=1,dx=0.5,n=-10.5;i<=42;i++,n=n+0.5){
            
            if (i==42){
                latex_niz+=n+dx+"]";
            }
            else{
            latex_niz+=n+dx+",";
            }
        }
        calculator.setExpression({id:"X[]",latex:latex_niz});
        
        //generisanje "serije" izraza
        s=0.15;//duzina linija
        for(i=-10;i<=10;i=i+0.5){
            calculator.setExpression({id:"f"+i, latex:"f\\left(X,"+i+"\\right)\\left(x-X\\right)+("+i+")\\left\\{\\left|x-X\\right|\\le\\frac{"+s+"}{\\sqrt{1+\\left(f\\left(X,"+i+"\\right)\\right)^2}}\\right\\}", color:"#388c46"});
        }
        
        }
        
        





//INIT_302
function init_M3_2(){
    alert("modul3.2");

elt_naslov.innerHTML="MODUL 3.2: <i>EULER</i>-ov METOD";
elt_header.style.visibility="visible";
elt_side_content.style.visibility="visible";
elt_footer.style.visibility="visible";
elt_calculator.style.visibility="visible";

elt_f_ispis.innerHTML=c_m302;

elt_naslovna_forma.innerHTML='&nbsp<b>Izaberite y\'=F(x,y):</b> <input type="radio" name="f_sel_m302" value="f1" id="r_fsel_m302_1" onchange="r_handler_m302_n_1(this.value)" checked><img src="http://latex.codecogs.com/gif.latex?y\'=x+y" border="0"/>'+
'&nbsp&nbsp<input type="radio" name="f_sel_m302" value="f2" id="r_fsel_m302_2" onchange="r_handler_m302_n_1(this.value)"><img src="http://latex.codecogs.com/gif.latex?y\'=x^2+y^2-1" border="0"/>&nbsp&nbsp<input type="radio" name="f_sel_m302" value="f3" id="r_fsel3_m302_3" onchange="r_handler_m302_n_1(this.value)">'+
'<img src="http://latex.codecogs.com/gif.latex?y\'=sin(x)*sin(y)" border="0"/>&nbsp&nbsp<b>Izaberite n:</b> <input type="radio" name="n_sel_m302" value="n1" id="n_fsel_m302_1" onclick="r_handler_m302_n_2(this.value)">n=1'+
'<input type="radio" name="n_sel_m302" value="n2" id="n_fsel_m302_2" onclick="r_handler_m302_n_2(this.value)" checked>n=0.5<input type="radio" name="n_sel_m302" value="n3" id="n_fsel_m302_2" onclick="r_handler_m302_n_2(this.value)" >n=0.25<input type="radio" name="n_sel_m302" value="n4" id="n_fsel_m302_2" onclick="r_handler_m302_n_2(this.value)">n=0.1';

//footer ispis deo
f_c=c_m302;
f_i=i_m302;
f_e=e_m302;
    
//side_content ispis deo
s_c=s_c_m302;
s_c_ispis();



//desmos deo
calculator.setBlank();


n=10;

//calculator.setExpression({id:"F(x,y)",latex:"F(x,y)=x+y"});
calculator.setExpression({id:"f0(x)",latex:"f_0(x)=mx+c\\left\\{0\\le x\\le h\\right\\}"});
calculator.setExpression({id:"f10(x)",latex:"f_{11}(x)=mx+c\\left\\{-h\\le x\\le 0\\right\\}"});
calculator.setExpression({id:"F(x,y)", latex:"F(x,y)=x+y"}) //F(x,y)=x+y je default opcija
calculator.setExpression({id:"h",latex:"h=0.5"});
calculator.setExpression({id:"m", latex:"m=F(0,c)"});
calculator.setExpression({id:"c",latex:"c=1"});
//DESNO od x=0

for(i=1;i<=10;i++){

//calculator.setExpression({id:"f"+i,latex:"f_{"+i+"}(x)=("+i+"*h_1+f_{"+i-1+"}("+i+"*h_1))*(x-"+i+"*h_1)+(f_{"+i-1+"}("+i+"*h_1)"});
//calculator.setExpression({id:"f"+i,latex:"f_{"+i+"}(x)=("+i*h+"f_{"+i-1+"}("+i*h+"))*(x-"+i*h+")+(f_{"+i-1+"}("+i*h+"))"});

p=i-1;
//latex_izraz="f_{"+i+"}\\left(x\\right)=\\left("+i+"\\cdot h\\ +\\ f_{"+p+"}\\left("+i+"\\cdot h\\right)\\right)\\left(x-"+i+"\\cdot h\\right)+f_{"+p+"}\\left("+i+"\\cdot h\\right)\\left\\{"+i+"*h\\le x\\le h\\left("+i+"+1\\right)\\right\\}";

//latex_izraz="f_{"+i+"}\left(x\right)=F\left(\left("+i+"\cdot h\right),f_{"+p+"}\left("+i+"\cdot h\right)\right)\left(x-"+i+"\cdot h\right)+f_{"+p+"}\left("+i+"\cdot h\right)\left\{"+i+"\cdot h\le x\le h\left("+i+"+1\right)\right\}";
latex_izraz="f_{"+i+"}(x)=F("+i+"*h,f_{"+p+"}("+i+"*h))(x-"+i+"*h)+f_{"+p+"}("+i+"*h)\\left\\{"+i+"\\cdot h\\le x\\le h\\left("+i+"+1\\right)\\right\\}";
//calculator.setExpression({id:"f"+i, latex:"f_{"+i+"}\\left(x\\right)=\\left("+i+"\\cdot h\\ +\\ f_{"+p+"}\\left("+i+"\\cdot h\\right)\\right)\\left(x-"+i+"\\cdot h\\right)+f_{"+p+"}\\left("+i+"\\cdot h\\right)"});
calculator.setExpression({id:"f"+i,latex:latex_izraz});


//"f_X\left(x\right)=\left(X\cdot h\ +\ f\left(X\cdot h\right)\right)\left(x-X\cdot h\right)+f_{ }\left(X\cdot h\right)\left\{nh\le x\le h\left(n+1\right)\right\}"
}


for(i=12,n=-1;i<=21;i++,n--){
    
    //calculator.setExpression({id:"f"+i,latex:"f_{"+i+"}(x)=("+i+"*h_1+f_{"+i-1+"}("+i+"*h_1))*(x-"+i+"*h_1)+(f_{"+i-1+"}("+i+"*h_1)"});
    //calculator.setExpression({id:"f"+i,latex:"f_{"+i+"}(x)=("+i*h+"f_{"+i-1+"}("+i*h+"))*(x-"+i*h+")+(f_{"+i-1+"}("+i*h+"))"});
    //n=-i;
    p=i-1;
    
    //calculator.setExpression({id:"f"+i, latex:"f_{"+i+"}\\left(x\\right)=\\left("+i+"\\cdot h\\ +\\ f_{"+p+"}\\left("+i+"\\cdot h\\right)\\right)\\left(x-"+i+"\\cdot h\\right)+f_{"+p+"}\\left("+i+"\\cdot h\\right)"});
    
    //latex_izraz="f_{"+i+"}\\left(x\\right)=\\left("+n+"\\cdot h\\ +\\ f_{"+p+"}\\left("+n+"\\cdot h\\right)\\right)\\left(x-"+n+"\\cdot h\\right)+f_{"+p+"}\\left("+n+"\\cdot h\\right)\\left\\{-\\left("+i+"-10\\right)h\\le x\\le-\\left("+i+"-10\\right)h+1h\\right\\}";
    
    latex_izraz="f_{"+i+"}(x)=F("+n+"*h,f_{"+p+"}("+n+"*h))(x-"+n+"*h)+f_{"+p+"}("+n+"*h)\\left\\{-\\left("+i+"-10\\right)h\\le x\\le-\\left("+i+"-10\\right)h+1h\\right\\}";

    calculator.setExpression({id:"f"+i,latex:latex_izraz});
    
    
    //"f_X\left(x\right)=\left(X\cdot h\ +\ f\left(X\cdot h\right)\right)\left(x-X\cdot h\right)+f_{ }\left(X\cdot h\right)\left\{nh\le x\le h\left(n+1\right)\right\}"
    }

//"f_X\left(x\right)=\left(X\cdot h\ +\ f\left(X\cdot h\right)\right)\left(x-X\cdot h\right)+f_{ }\left(X\cdot h\right)\left\{-\left(i-10\right)\le x\le-\left(i-10\right)+1\right\}"
//"f_X\left(x\right)=\left(X\cdot h\ +\ f\left(X\cdot h\right)\right)\left(x-X\cdot h\right)+f_{ }\left(X\cdot h\right)\left\{-\left(i-10\right)h\le x\le-\left(i-10\right)h+1h\right\}"

}










function c_ispis(){
elt_f_ispis.innerHTML=f_c;
}
function i_ispis(){
elt_f_ispis.innerHTML=f_i;
}
function e_ispis(){
elt_f_ispis.innerHTML=f_e;
}

function s_c_ispis(){
    elt_c_ispis.innerHTML=s_c;
}

//FOOTER OUTPUT
// promenljive u footer-u M1.1


c_m101='Reč tangenta potiče iz Latinskog jezika,od reči <span class="italic_bold">tangens</span>, koja znači <span class="italic_bold">dodirujući</span>. Prema tome tangenta krive je prava koja dodiruje krivu.'
+' Kako ovo nije dovoljan uslov neke prave da bude tangenta krive, može se dodati da tangenta ima isti pravac kao i kriva koju dodiruje,u tački dodira. Formalna matematička definicija tangente data je u nastavku.<br>'
+'<br><b>Tangenta krive u tački P se definiše kao prava koja prolazi kroz tačku P, a čiji je koeficijent pravca granična vrednost (limes) koeficijenata pravca sečice PQ kako se tačka Q približava tački P duž krive'
+' (i shodno tome se h približava nuli).</b> <br><br> <img src="http://latex.codecogs.com/gif.latex?k_t=\\lim_{Q\\to P}k_{PQ}=\\lim_{h\\to0}k_{PQ}" border="0"/><br><br> ';
     
i_m101='Iz bočnog menija izabrati neku od pounđenih kriva (funkcija).<br><br>Iz gornjeg menija selektovati željene opcije.'+
' Označavanjem kvadratića na kojima piše <b>Tangenta</b> i <b>Sečica</b> na grafiku se prikazuju tangenta i sečica prethodno odabrane krive (funkcije), respektivno.<br><br>'+
'Finim podešavanjem <b>parametra h</b>, koji označava rastojanje po horizontalnoj X-osi između tačaka P i Q, simulira se vizualni proces izračunavanja granične vrednosti,'+
' i to u slučaju kada se tačka Q približava tački P sleva (h->0 sleva = levi limes), kao i u slučaju kada se tačka Q približava tački P zdesna (h->0 zdesna = desni limes). '+
'<br><br>Tek u slučaju kada su levi i desni limes u nekoj tački jednaki možemo reći da je funkcija diferencijabilna, odnosno da ima izvod u datoj tački.';

e_m101='<b>1)</b> Iz naslovne forme odabrati opcije za prikaz Sečice i Tangente. Podešavanjem parametra h, simulirajte približavanje sečice tangenti sleva. Čitajte redom koeficijente pravca sečice. Kojoj vrednosti se oni približavaju?'+
' Uporedite sa vrednošću koeficijenta tangente u datoj tački. Šta će se desiti kada se tangenta i sečica preklope? Koliko je onda koeficijent pravca sečice? Šta piše na ekranu? - Zašto je to tako?'+
'<br><br><b>2)</b> Postupak iz zadatka 1) ponoviti samo što u ovom slučaju trebate da simulirate približavanje sečice tangenti zdesna. Da li je vrednost kojoj teži koeficijent pravca sečice isti kao i u prvom zadatku?'+
'<br><br><b>3)</b> Šta bi smo dobili kada bi parametar h mogli da menjamo za beskonačno malu vrednost (sada se menja za 0.1), da li bi u tom slučaju simulacija graničnog procesa bila verodostojnija?'; 
 
// promenljive u footer-u M1.2

 c_m102='U okviru ovog modula se bavimo pitanjem kako izvodi ( <i> f \'(x)</i> i <i> f \'\'(x)</i> ) neke funkcije <i> f(x)</i> utiču na izgled grafika ove funkcije. Tu se podrazumevaju intervali rastenja i opadanja funkcije <i> f(x)</i>,'+ 
 'intervali konveksnosti i konkavnosti funkcije <i> f(x)</i>, lokalni i apsolutni ekstremumi funkcije <i> f(x)</i> (maksimalne i minimalne vrednosti <i> f(x)</i>).<br><br>'+
 '<ins><b>Intervali rastenja i opadanja (prvi izvod):</b></ins><br><br>a) Ako je <i> f \'(x)</i> > 0 na nekom intervalu, onda je <i> f rastuća</i> na tom intervalu.<br>'+
 'b) Ako je <i> f \'(x)</i> < 0 na nekom intervalu, onda je <i> f opadajuća</i> na tom intervalu.<br><br><ins><b>Ekstremne vrednosti (prvi izvod) :</b></ins><br><br>'+
 'Pretpostavimo da je funkcija <i> f</i> diferencijabilna u tački C ( ili barem u njenoj blizini) i da je <i> f \'(C)</i>=0* tada važi: <br><br>'+
 'a) Ako <i> f \'(x)</i> menja znak iz pozitivnog u negativan u tački C, onda je tačka C <i>lokalni maksimum</i> funkcije <i> f</i>. <br>'+
 'b) Ako <i> f \'(x)</i> menja znak iz negativnog u pozitivan u tački C, onda je tačka C <i>lokalni minimum</i> funkcije <i> f</i>. <br> '+
 'c) Ako <i> f \'(x)</i> ne menja znak u tački C ( pozitivna ili negativna sa obe strane tačke C ), onda <i> f</i> u tački C nema lokalnih ekstremuma. <br><br>'+
 '<ins><b>Intervali konveksnosti i konkavnosti (drugi izvod) :</b></ins><br><br>a) Ako je <i> f \'\'(x)</i> > 0 na nekom intervalu, onda je <i>f konveksna </i> ("nasmejana") na tom intervalu.<br>'+
 'b) Ako je <i> f \'\'(x)</i> < 0 na nekom intervalu, onda je <i>f konkavna </i>("tužna") na tom intervalu.<br><br><br><ins><b>Prevojne tačke i ekstremne vrednosti (drugi izvod) :</b></ins><br><br>'+
 'Tačka C je prevojna tačka funkcije f ako u tački C funkcija f prelazi iz konveksne u konkavnu ili iz konkavne u konveksnu, tj. ako  <i> f&nbsp\'\'(x)</i> u tački C menja znak.<br><br>'+
 'a) Ako je <i> f \'(C)</i> = 0  i <i> f \'\'(C)</i> > 0, onda je u tački C <i>lokalni minimum</i> funkcije  <i> f</i><br>b) Ako je <i> f \'(C)</i> = 0  i <i> f \'\'(C)</i> < 0, onda je u tački C <i>lokalni maksimum</i> funkcije <i> f</i><br><br><br>';


i_m102="Iz gornjeg menija selektovanjem kvadratića odabrati željene opcije, osnovnu funkciju <i> f (x)</i> i/ili njene izvode (<i> f '(x) </i> i <i> f&nbsp''(x) </i>).<br><br> "+
"U okviru bočnog menija podesiti odgovarajuće koeficijente da bi dobili željeni izgled grafika funkcije <i> f(x) </i>. <br><br>"+
"Selektovanjem dodatnih opcija iz bočnog menija, možemo izabrati intervale na kojima je funkcija <b>rastuća</b>, <b>opadajuća</b>, <b>konveksna</b>, i <b>konkavna</b>. ";



e_m102="<b>1)</b> Iz naslovne forme odabrati primarnu funkciju f (x) i menjati koeficijente polinoma (desni bočni odeljak). Podesite koeficijente tako da funkcija  f (x) ima redom jedan, dva, tri, četiri i pet realnih korena. -Da li je ovo moguće izvesti?"+
  "<br></br><b>2)</b> Postavite funkciju  f (x) u neki od položaja u kojem ima pet realnih korena. Zatim uključite prikaz prvog izvoda ove funkcije  f '(x) iz naslovne forme. Uključite i prikaz intervala (desni bočni odeljak) na kojem je funkcija  f (x) rasuća."+
  "Posmatrajte intervale na kojima je funkcija rastuća. Koji je znak izvoda na tim intervalima?Ako promenite prikaz intervala (desni bočni odeljak) na onaj na kom je funkcija  f (x) opadajuća, kakav će biti znak prvog izvoda na tom intervalu? - Šta nam ovo govori?"+
  "<br></br><b>3)</b> Postavite funkciju  f (x) u neki proizvoljan položaj. Zatim izaberite interval na kojem je ova funkcija konveksna. Izaberite drugi izvod za prikaz na ekranu. Šta primećujete? Koji je znak drugog izvoda na intervalima na kojima je funkcija  f (x) konveksna ? "+
  "Ako promenite prikaz intervala (desni bočni odeljak) na onaj na kom je funkcija  f (x)  konkavna, kakav će biti znak drugog izvoda na tom intervalu? - Šta nam ovo govori? <br></br><b>4)</b> Postavite funkciju  f (x) u sledeći položaj (a=-0.2; b=0.3; c=1.3; d=-1.5; g=-0.9; h=0.4)."+ 
  "Iz opcija odaberite prikaz prvog i drugog izvoda. Da li možete da uočite lokalne ekstremne vrednosti funkcije f (x)?  Za prvi lokalni minimum sleva koja je vrednost prvog izvoda za tu vrednost h koordinate? Kakav je znak drugog izvoda na intervalu u kojem se ta h koordinat nalazi?"+
  "- Šta nam to govori? Posmatrajmo sada prvi lokalni maksimum sleva. Koja je vrednost prvog izvoda za tu vrednost h koordinate? Kakav je znak drugog izvoda na tom intervalu u okviru kog se nalazi ta h koordinata? - Da li je ovo u skladu sa teoremama o ekstremnim vrednostima i intervalima konveksnosti i konkavnosti?"+
  "<br></br><b>5)</b> Postavka je ista kao i za zadatak 4). Posmatrajte grafik drugog izvoda funkcije f (x). Kakav je izgled grafika f (x) u tačkama u kojima je drugi izvod jednak nuli? Da li tu uočavate prevojne tačke funkcije? "+
  "<br></br><b>6)</b> Ako podesimo funkciju f (x) tako da ima 5 realnih korena, koliko u tom slučaju najviše može imati ekstremuma, a koliko najviše prevojnih tačaka? - Od čega to zavisi?"; 

 // promenljive u footer-u M2.1

 c_m201="Određeni integral bilo koje integrabilne funkcije se može aproksimirati, do bilo kog željenog stepena preciznosti, <i>Riemann</i>-ovim sumama. "+
 " <i>Riemann</i>-ove sume su postupak za aproksimiranje vrednosti određenih integrala. Postupak se sastoji od toga što <b>interval&nbsp[a,b]</b> na kojem računamo integral date funkcije <img src='http://latex.codecogs.com/gif.latex?\\int_a^bf\\left(x\\right)dx' border='0' />"+
 "podelimo na <b>n</b> podintervala jednakih dužina &#916<b>x</b> = <img src='http://latex.codecogs.com/gif.latex?\\frac{b-a}{n}' border='0' /> a zatim u okviru svakog podintervala &#916<b>x</b> izaberemo jednu tačku (najčešće sredinu podintervala)"+
 " i računamo vrednost funkcije u toj tački <img src='http://latex.codecogs.com/gif.latex?f(x_i)' border='0'/>. Uzajamnim množenjem širine podintervala &#916<b>x</b> sa vrednošću funkcije na sredini n-tog podintervala <img src='http://latex.codecogs.com/gif.latex?f(x_{ni})' border='0'/> "+
 "dobijamo površinu n-tog pravougaonika <img src='http://latex.codecogs.com/gif.latex?R_n=\\Delta x*f(x_{ni})' border='0'/><br><br>"+
 " Neka je <b>A<sub>1</sub></b> površina regije ispod grafika funkcije <i>f</i> na intervalu[a,b] u slučaju kada je funkcija  <i>f</i> pozitivna,a <b>A<sub>2</sub></b> regija iznad grafika funkcije <i>f</i> na intervalu [a,b], kada je funkcija  <i>f</i> negativna, onda važi: <br><br> "+
 "<img style=''src='http://latex.codecogs.com/gif.latex?A=A_1-A_2=\\lim_{n\\to\\infty}R_{A_1n}-\\lim_{n\\to\\infty}R_{A_2n}=\\sum_{n=1}^nf_{A_1i}\\Delta x-\\sum_{n=1}^nf_{A_2i}\\Delta x=\\int_a^bf\\left(x\\right)dx' border='0'/>" ;
 

 //\\lim_{n\\to\\infty}R_{A_1n}-\\lim_{n\\to\\infty}R_{A_2n}
//A=\\lim_{n\\to\\infty}R_{A_1n}-\\lim_{n\\to\\infty}R_{A_2n}=\\sum_{n=1}^nf_A_1i*\\deltax-\\sum_{n=1}^nf_A_2i*\\deltax

i_m201="Iz gornjeg menija odabrati željenu funkciju koja će se prikazati na ekranu.<br><br> Finim podešavanjem parametra n, koji predstavlja broj pravougaonika kojima se aproksimira izabrana funkcija"+
" stiče se uvid u jedan od metoda za numeričko izračunavanje integrala- metoda <i>Riemann</i>-ovih suma.<br><br> U bočnom meniju je bliže predstavljena ova procedura, sa bitnim osvrtom na <b>ukupnu računsku grešku</b> nastalu korišćenjem ovog metoda,"+
" a u odnosu na <b>vrednosti integrala dobijenih analitičkim putem.</b> ";

e_m201="<b>1)</b> Iz naslovnog menija izabrati funkciju  f 1(x)=2sin(x) i redom menjajte vrednost parametra n. Šta uočavate? Da li je bolja aproksimacija ako je n manje ili veće? Da li su kvadratićima bolje predstavljeni delovi funkcije u koja je njena stopa promene veća ili oni u kojima je"+
" manja (intervali u kojima brže/sporije menja vrednost)? Ima li to neke veze sa izvodom funkcije? Šta bi mogla da predstavlja ova greška prikazana u desnom bočnom segmentu? Koliko je uopšte greška i dozvoljena?- Od čega to zavisi?"+
"<br><br><b>2)</b> Postaviti funkciju f 2(x)=x2 , i parametar n na 10 (n=10). Kako vam izgleda ova aproksimacija? Da li je svega 10 odbiraka dovoljano? U idealnom slučaju bi imali beskonačan broj pravougaonika beskonačno male širine, i razlika između ova dva proračuna je svega 0.25%."+
" Da li je to dobra nagodba? Zamislite koliku procesorsku moć morate da upotrebite da bi izračunali površine svih tih pravougaonika koji broje do beskonačno. Da li je tolika preciznost vredna tolike cene?"+
"<br><br><b>3)</b> Izaberite funkciju  f 3(x)= 10/x2 i parametar n postavite na 10 (n=10). Koliku grešku imamo u ovom slučaju? - NaN?? Pokušajte da povećate broj aprosimacionih koraka n=10,20,30,40,50. I dalje isto? Šta bi "+
"to moglo da znači? Vratimo se sada na desni bočni ispis ovog modula gde je navedena numerička vrednost određenog integrala izabrane funkcije. Koju vrednost očitavate? - Zašto je vrednost ovog integrala jednaka beskonačno? U tom slučaju nam ova numerička metoda neće biti od pomoći."+
" - Ili ipak možda hoće? Zamislite da ograničimo kodomen ove funkcije do vertikalne linije u=50. Šta se u tom slučaju dešava, da li je i dalje vrednost integrala beskonačna? - Naravno da nije i shodno tome mi slobodno možemo koristiti ovaj aprokismativni metod, jer su najčešće realni"+
" problemi koje rešavamo u praksi ograničeni i konačni a ne beskonačni (mada nam možda tako na početku izgledaju). "; 

 // promenljive u footer-u M2.2
 c_m202="OsnovniKoncept-M202";
 i_m202="Instrukcije-M202";
 e_m202="Primeri-M202"; 


// promenljive u footer-u M3.1
c_m301="Kako je nažalost nemoguće eksplicitno rešiti većinu diferencijalnih jednačina koje se sreću u praksi, neophodno je korišćenje dostupnih numeričkih i grafičkih metoda.<br><br> Elementarna numerička metoda za rešavanje diferncijanih jednačina su Direkciona polja."+
"Ova metoda je vrlo jednostavna, jer nam nije potrebno naročito poznavanje više matematike, a pritom je i vrlo efikasna. <br><br> Ako je diferencijalna jednačina oblika y'=F(x,y), njena vrednost u tački T(x<sub>t</sub>,y<sub>t</sub>) je koeficijent pravca tangente funkcije <i>y</i>, čiju diferencijalnu jednačinu i rešavamo."+
" Kako su u dovoljno maloj okolini tačke T funkcija i njen koeficijent pravca (prvi izvod) gotovo 'identični', možemo ih izjednačiti. Naravno uz određenu rezervu koja će biti merilo greške pri upotrebi ovog metoda.<br><br> Dalje se postupak ponavlja i za druge tačke. Što je veći broj tačaka, koje su na što manjem rastojanju jedna od druge "+
"aprokismacija je bolja. <br><br> Druga bitna stvar je i dužina vektora koeficijenta pravca u datoj tački. Kako se tačka definiše kao beskonačno male površine, tako će i aproksimacija biti bolja ako su dužine vektora koeficijenata pravca kraće (idealno beskonačno kratke). "+
" <br><br>Na ovaj način se dobija familija funkcija, koja su rešenja polazne diferencijalne jednačine, a razlikuju se samo za konstantu koja se još naziva i početni uslov i definiše se kao <i>f</i>(x<sub>0</sub>)=c.<br><br><b> Praćenjem smera vektora polja i njihovim povezivanjem dobija se <ins>jedinstveno rešenje polazne diferencijalne jednačine.</ins> "+
"I ako ono nije idealno precizno i verodostojno sasvim je dovoljno da nam otkrije prirodu procesa koji smo na ovaj način modelovali. </b>";

i_m301="Iz gornjeg menija odabrati željenu funkciju koja će se zatim prikazati na grafiku. <br><br> Postavljanjem <b>parametra n</b> na višu, odnosno na nižu vrednost, dobijate ređe, odnosno gušće linije vektora polja.<br><br>"+
" Na ovaj način možemo dobiti uvid kako izgleda <b>familija funkcija <i>f(x)</i> </b> koja je rešenje diferencijalne jednačine. Funkcije u familiji se razlikuju samo za konstantu c, koja se naziva još i početni uslov. Primer sa početnim uslovom dat je u narednom modulu (Euler-ov metod)."+
"<br><br> Varijacijom odabrane funkcije i postavljanjem parametra n , stiče se konceptualno poimanje suštinskih odlika diferencijalnih jednačina, kao i grafičkih metoda za njihovo numeričko rešavanje.";

e_m301="<b>1)</b> Izaberite diferencijalnu jednačinu y'=x+y iz menija. Podesite parametar n na 1 (n=1). Skicirajte grafike rešenja diferencijalne jednačine koji zadovoljava početne uslove: a) y(0)=0; b) y(0)=1; Zatim promenite parametar n na 0.5 (n=0.5) i skicirajte grafike za sledeće početne uslove: v) y(0)=0.5;  g)y(0)=1.5;"+
"Šta uočavate? Na koji način nam vrednost parametra utiče na grafik rešenja diferencijalne jednačine? Da li ste za postavljenu vrednost parametra (n=1) u provom delu zadatka mogli da rešite početna uslove iz drugog dela? - Zašto nije? Da li je moguće obrnuto, tj. sa postavkom drugog dela zadatka (n=0.5) rešiti početne uslove iz prvog dela? - Zašto jeste?"+
"<br><br><b>2)</b> Izaberite diferencijalnu jednačinu y'=x2+y2-1 iz menija. Podesite parametar n na 1 (n=1). Kakav je izgled direkcionog polja ove diferencijalne jednačine? Da li na osnovu ovog direkcionog polja možete izneti neke zaključke o funkciji y? Da li je ona monotono rastuća ili opadajuća na svom domenu? Koliko brzo raste?"+
"Na kojim intervalima je konveksna a na kojim konkavna? Za koju vrednost početnog uslova prolazi kroz koordinatni početak?  Kolika bi iznosila njena vrednost za h=5? Da li bi bilo moguće postaviti ovakav početni uslov y(-5)=10 za ovu jednačinu? - Zašto nije?<br><br><b>3)</b> Izaberite diferencijalnu jednačinu y'=x2+y2-1 iz menija. "+
"Podesite parametar n na 0.5 (n=0.5). Na koji način promena početnog uslova utiče na amplitudu funkcije u? Za koju vrednost početnog uslova će ova funkcija biti ravna horizontalna linija? Za koju vrednost početnog uslova će ova funkcija imati maksimalnu amplitudu? Posle kog rastojanja na Ou - osi počinju da se ponanjljaju vrednosti funkcije u ?"; 


// promenljive u footer-u M3.2
c_m302="Euler-ov metod je dosta sličan metodu Direkcionih polja. Razlika je u tome što nam Euler-ov metod daje numeričku i vizuelnu aproksimaciju uz korišćenje početnog uslova.<br><br> Shodno tome mi više ne skiciramo čitavo direkciono polje sa familijom funkcija rešenja "+
"diferencijalne jednačine već skiciramo jedno pojedinačno rešenje koje nam je od interesa, a zadovoljava početni uslov.<br><br>"+
"Menjanjem vrednosti parametra n, podešavamo dužinu aproksimativnog koraka. Što je ova dužina kraća, račun je kompleksniji, ali je i aproksimacija bolja. <br><br>Ovaj metod se dosta koristi u praksi, i može se slobodno reći da je u osnovi svih naprednijih metoda za numeričku analizu ovakvih problema. ";

i_m302=" Ova metoda je specijalizija metoda Direkcionih polja. Osnovna je metoda za numeričko rešavanje diferencijalnih jednačina.<br><br> Iz gornjeg menija odabrati željenu funkciju koja će se zatim prikazati na grafiku. <br><br> Postavljanjem <b>parametra n</b> na višu, odnosno na nižu vrednost, dobijate duži, odnosno kraći aproksimacioni korak.<br><br>"+
" Na ovaj način možemo dobiti uvid kako izgleda funkcija <i>f(x)</i> koja je rešenje diferencijalne jednačine. <br><br>U bočnom meniju možete izabrati parametar <b>c</b>, koji predstavlja vrednost funkcije <i>f(x)</i> za x=x<sub>0</sub> u oznaci <i>f</i>(x<sub>0</sub>)=c." +
"<br><br> Varijacijom odabrane funkcije i postavljenih parametara n i c, stiče se konceptualno poimanje suštinskih odlika diferencijalnih jednačina, kao i grafičkih metoda za njihovo numeričko rešavanje.";

e_m302="<b>1)</b> Izaberite diferencijalnu jednačinu y'=x+y iz menija i redom menjajte vrednosti parametru  n. Šta zaključujete? Da li je verodostojnija aproksimacija za  n=1 ili za n=0.1? Na koji način se sa promenom parametra n menja i širina intervala na kojem je prisutna aproksimativna funkcija? Menjajući početni uslov, šta se dešava sa funkijom u?  Zašto se promenom početnog uslova funkcije u "+
 "ona mnogo brže menja desno od ordinate, nego sa njene leve strane gde je gotovo konstanta? Za koje vrednosti početnog uslova je funkcija u konveksna, a za koje konkavna? Promenom početnog uslova samo za relativno malu vrednost čitava funkcija prelazi iz konveksne u konkavnu, odnosno iz pozitivne beskonačnosti u negativnu? Kakva bi osobenost ovakvo ponašanje funkcije moglo da ima u fizičkom svetu?"+
 "- Da li bi sistem koji bi imao takav odziv mogao da bude siguran za upotrebu?<br><br><b> 2)</b> Izaberite diferencijalnu jednačinu y'=x2+y2-1 iz menija i postavite vrednost parametra n na 0.5 (n=0.5).  Da li bi sa grafika mogli da okviro utvrdite širinu intervala na kojem je aproksimacija definisana? - Znam da je teško, jer funkcija funckija dosta brzo raste a pritom nema vertikalnih asimptota koje bi joj ograničile oblast definisanosti."+
 " Za koje vrednosti početnog uslova ova aproksimacija ima jedan, dva ili tri realna korena?  Da li je moguće da nema ni jedno realno rešenje? Na kojin način bi manipulaciju polažajima realnih rešenja jednačine mogli da iskoristimo u procesu modelovanja neke pojave koja je opisana ovakvom diferencijalnom jednačinom?  Za parametar n=1, na grafiku aproksimacije funkcije se pojavljuju vertikalne linije, nezavisno od postavljanja početnog uslova."+
 " Šta bi to moglo da predstavlja? - Obratite pažnju na aproksimativne linije kojima se aproksimira funkcija u. Da li primećujete da se njihovi koeficijenti pravca sve više povećavaju, odnosno one postaju sve strmije?- Zašto je to tako?"+
 "<br><br><b> 3)</b> Izaberite diferencijalnu jednačinu y'=sin(x)*sin(y) iz menija i redom menjajte vrednosti parametru  n. Zašto je ova aproksimacija definisana na najkraćem intervalu, pogotovu za male vrednosti parametra n?  Postavite početni uslov na S=1 i pokušajte da sa grafika očitate maksimalnu vrednost funkcije za različite vrednosti parametra  n. Za koju vrednost parametra n  ćete dobiti najtačniju aproksimaciju  u odnosu na pravo rešenje? "; 




 //SIDE_CONTENT OUTPUT

//promenljive u side_content M1.1

s_c_m101="<b>TANGENTA <i>t</i> </b><hr> <br> Tačka P(<span id='x_koordinata'>x</span>,<span id='y_koordinata'>y</span>) <br><br> Koeficijent pravca<br> tangente <br> k<sub>t</sub>=<span id='k_t'>k_t</span> <br><br><hr> <b>SEČICA <i>s</i> </b><hr> <br> Tačka P(<span id='tackaP_2'>x,y</span>) "+
        "<br><br> Tačka Q(<span id='tackaQ'>x,y</span>) <br><br> Koeficijent pravca <br> sečice <br> k<sub>s</sub>=(y<sub>2</sub>-y<sub>1</sub>)/(x<sub>2</sub>-x<sub>1</sub>) <br>= <span id=k_secice></span> ";



//promenljive u side_content M1.2
s_c_m102="<b>Podesite koeficijente na željene vrednosti:</b> <br><hr><br> a = <input type='number' name='n_a' value='-0.7' min='-10' max='10' step='0.1' style='width:50%' onchange='n_handler_m102_sc(this.name,this.value)'><br><br>"+
                                                                  "b = <input type='number' name='n_b' value='0.6' min='-10' max='10' step='0.1' style='width:50%' onchange='n_handler_m102_sc(this.name,this.value)'><br><br>"+
                                                                  "c = <input type='number' name='n_c' value='1.7' min='-10' max='10' step='0.1' style='width:50%' onchange='n_handler_m102_sc(this.name,this.value)'><br><br>"+
                                                                  "d = <input type='number' name='n_d' value='-1.1' min='-10' max='10' step='0.1' style='width:50%' onchange='n_handler_m102_sc(this.name,this.value)'><br><br>"+
                                                                  "g = <input type='number' name='n_g' value='-0.7' min='-10' max='10' step='0.1' style='width:50%' onchange='n_handler_m102_sc(this.name,this.value)'><br><br>"+
                                                                  "h = <input type='number' name='n_h' value='0.2' min='-10' max='10' step='0.1' style='width:50%' onchange='n_handler_m102_sc(this.name,this.value)'><br><br> "+
"<b>Odaberite dostupne opcije : <hr></b> <br><input type='radio' name='r_m102_sc' value='raste' onchange='r_handler_m102_sc(this.value)'> <b>f(x) &#8599;</b>"+
                                   "<br><br><input type='radio' name='r_m102_sc' value='opada' onchange='r_handler_m102_sc(this.value)'> <b>f(x) &#8600;</b>"+
                                   "<br><br><input type='radio' name='r_m102_sc' value='konveksna' onchange='r_handler_m102_sc(this.value)'> <b>f(x) &#9697;</b>"+
                                   "<br><br><input type='radio' name='r_m102_sc' value='konkavna' onchange='r_handler_m102_sc(this.value)'> <b>f(x) &#9696;</b>";
                                                                    
//promenljive u side_content M2.1
s_c_m201='<b>Formula Riemann-ove sume:</b><br><br><img src="http://latex.codecogs.com/gif.latex?R_n=\\sum_{i=1}^nf\\left(x_i\\right)\\cdot\\Delta x" border="0"/> <br> <img src="http://latex.codecogs.com/gif.latex?R_n=\\sum_{i=1}^nf\\left(\\left(i-\\frac{1}{2}\\right)\\cdot\\Delta x\\right)\\cdot\\Delta x" border="0"/> <br><br>'+
         '<span id="s_ispis"><hr><br><img src="http://latex.codecogs.com/gif.latex?f(x)=2sin(x)" border="0"/><br><br>n=30, &Delta;x=0.333<br><br> R<sub>30</sub>=3.69523<br><img src="http://latex.codecogs.com/gif.latex?\\int_0^{10}2\\sin\\left(x\\right)dx" border="0"/><br> = 3.67814305815<br><br> <hr><b>Računska greška Er</b><br><br><img src="http://latex.codecogs.com/gif.latex?\\int_0^{10}2\\sin\\left(x\\right)dx" border="0"/><span style="font-size:125%">-R<sub>30</sub></span><br><br>Er =0.4644677129437666%</span>';

//promenljive u side_content M2.2
s_c_m202="ISPIS za modul M202";

//promenljive u side_content M3.1
s_c_m301="ISPIS za modul M301 <br><br>&nbsp&nbsp&nbsp je u trenutnoj verziji matematičkog alata prazan. &nbsp&nbsp&nbsp<br><br>&nbsp&nbsp&nbsp U nekoj od narednih verzija će ovo <br>biti ispravljeno. &nbsp&nbsp";

//promenljive u side_content M3.2
s_c_m302="<b> Podesite željenu vrednost <br> početnog uslova y(x<sub>0</sub>)=c </b>: <hr> <br><br> <b>c</b> = <input type=number min='-10' max='10' step='0.1' style='width:50%' value='1' onchange='n_handler_m302_sc(this.value)'>";



/*
calculator.setExpression({id:'f(x)', latex: "f\\left(x\\right)=2\\sin\\ (x)\\ \\left\\{0\\le x\\le10\\right\\}"});
calculator.setExpression({id:'n', latex:'n=10'});
*/

//EVENT HANDLER-I ZA MODUL M101

function cb_handler_m101_n_1(name,state_cb){
    if(name=="tangenta"){
        if(state_cb==false){
            calculator.setExpression({id:"tangenta", hidden:true});
        }
        else if(state_cb==true){
            calculator.setExpression({id:"tangenta", hidden:false});
        }
    }
    else if(name="secica"){
        if(state_cb==false){
            calculator.setExpression({id:"secica", hidden:true});
        }
        else if(state_cb==true){
            calculator.setExpression({id:"secica", hidden:false})
        }
    }
    
}

function range_handler_m101_n_1(value){
    n=value;
    calculator.setExpression({id:"h",latex:"h="+n});
}

//EVENT HANDLER-I ZA MODUL M102

function cb_handler_m102_n_1(name,state_cb){
    if(name=="f(x)"){
        if(state_cb==false){
            calculator.setExpression({id:"f(x)_2", hidden:true});
        }
        else if(state_cb==true){
            calculator.setExpression({id:"f(x)_2", hidden:false});
        }
    }
    else if(name=="f1(x)"){
        if(state_cb==false){
            calculator.setExpression({id:"1f", hidden:true});
        }
        else if(state_cb==true){
            calculator.setExpression({id:"1f", hidden:false})
        }
    }
    else if(name=="f2(x)"){
        if(state_cb==false){
            calculator.setExpression({id:"2f", hidden:true});
        }
        else if(state_cb==true){
            calculator.setExpression({id:"2f", hidden:false})
        }
    }
    
}

function n_handler_m102_sc(name,value){

    if(name=='n_a'){ calculator.setExpression({id:"a",latex:"a="+value})}
    else if (name=='n_b'){calculator.setExpression({id:"b",latex:"b="+value})}
    else if (name=='n_c'){calculator.setExpression({id:"c",latex:"c="+value})}
    else if (name=='n_d'){calculator.setExpression({id:"d",latex:"d="+value})}
    else if (name=='n_g'){calculator.setExpression({id:"g",latex:"g="+value})}
    else if (name=='n_h'){calculator.setExpression({id:"h",latex:"h="+value})}

}

function r_handler_m102_sc(value){

    if(value=='raste'){calculator.setExpressions([{id:"raste",hidden:false},{id:"opada",hidden:true},{id:"konv",hidden:true},{id:"konk",hidden:true}])}
    else if(value=='opada'){calculator.setExpressions([{id:"raste",hidden:true},{id:"opada",hidden:false},{id:"konv",hidden:true},{id:"konk",hidden:true}])}    
    else if(value=='konveksna'){calculator.setExpressions([{id:"raste",hidden:true},{id:"opada",hidden:true},{id:"konv",hidden:false},{id:"konk",hidden:true}])} 
    else if(value=='konkavna'){calculator.setExpressions([{id:"raste",hidden:true},{id:"opada",hidden:true},{id:"konv",hidden:true},{id:"konk",hidden:false}])}    
   
}






var f_opcija="f1";
var br_koraka=30;



// EVENT HANDLER-I ZA MODUL M201
function r_handler_m201_n_1(value){
    if (value=="f1") {
        calculator.setExpression({id:'f(x)', latex: "f\\left(x\\right)=2\\sin\\ (x)\\ \\left\\{0\\le x\\le10\\right\\}"});
        f_opcija="f1";
    }
    else if (value=="f2") {
        calculator.setExpression({id:'f(x)', latex: "f\\left(x\\right)=x^2\\ \\left\\{0\\le x\\le10\\right\\}"});
        f_opcija="f2";
    }
    else if (value=="f3") {
        calculator.setExpression({id:'f(x)', latex: "f\\left(x\\right)=\\frac{10}{x^2}\\left\\{0\\le x\\le10\\right\\}"});
        f_opcija="f3";
    }
    
    RimanoveSume(f_opcija,br_koraka); 

}

function range_handler_m201_n_1(value){
    if(value==10){
        calculator.setExpression({id:'n', latex:'n=10'});
        br_koraka=10;
    }
    else if (value==20){
        calculator.setExpression({id:'n', latex:'n=20'});
        br_koraka=20;
    }
    else if (value==30){
        calculator.setExpression({id:'n', latex:'n=30'});
        br_koraka=30;
    }
    else if (value==40){
        calculator.setExpression({id:'n', latex:'n=40'});
        br_koraka=40;
    } 
    else if (value==50){
        calculator.setExpression({id:'n', latex:'n=50'});
        br_koraka=50;
    }
    RimanoveSume(f_opcija,br_koraka); 
}

function RimanoveSume(f_opcija,br_koraka){
    
    output="";
    suma=0;
    dx=10/br_koraka;

if(f_opcija=="f1"){
    for(i=1;i<=br_koraka;i++){
        suma+=2*Math.sin((i-1/2)*dx)*dx;
    }
    f_latex='<img src="http://latex.codecogs.com/gif.latex?f(x)=2sin(x)" border="0"/>';
    i_latex='<img src="http://latex.codecogs.com/gif.latex?\\int_0^{10}2\\sin\\left(x\\right)dx" border="0"/>';
    int=3.67814305815;
}
else if(f_opcija=="f2"){
    for(i=1;i<=br_koraka;i++){
        suma+=(((i-1/2)*dx)**2)*dx;
    }
    f_latex='<img src="http://latex.codecogs.com/gif.latex?f(x)=x^2" border="0"/>';
    i_latex='<img src="http://latex.codecogs.com/gif.latex?\\int_0^{10}x^2dx" border="0"/>';
    int=333.33333333333;

}
else if(f_opcija=="f3"){
    for(i=1;i<=br_koraka;i++){
        suma+=(10/((i-1/2)*dx)**2)*dx;
    }
    f_latex='<img src="http://latex.codecogs.com/gif.latex?f(x)=10/x^2" border="0"/>';
    i_latex='<img src="http://latex.codecogs.com/gif.latex?\\int_0^{10}\\frac{10}{x^2}dx" border="0"/>';
    int='&infin;';
}
output='<hr><br>'+f_latex+'<br><br>n='+br_koraka+', &Delta;x='+(10./br_koraka).toFixed(3)+'<br><br> R<sub>'+br_koraka+'</sub>='+suma.toFixed(5)+'<br><br>'+i_latex+' = '+int +'<br><br> <hr><b>Računska greška Er</b><br><br>'+i_latex+'<span style="font-size:125%">-R<sub>'+br_koraka+'</sub></span><br><br>'+'Er ='+((Math.abs(suma-int))/int)*100+' %';
document.getElementById('s_ispis').innerHTML=output;
}







// EVENT HANDLER-I ZA MODUL M301
function r_handler_m301_n_1(value){
    if(value=="f1") {
        calculator.setExpression({id:"f(x,y)", latex:"f(x,y)=x+y"});
    }
    else if (value=="f2") {
        calculator.setExpression({id:"f(x,y)", latex:"f(x,y)=x^2+y^2-1"});
    }
    else if (value=="f3") {
        calculator.setExpression({id:"f(x,y)", latex:"f(x,y)=\\sin(x)*\\sin(y)"});

    }

}
function r_handler_m301_n_2(value){
    if(value=="n1") {
        opcija_n1();
    }
    else if (value=="n2") {
        opcija_n2();
    }

}

// EVENT HANDLER-I ZA MODUL M302
function r_handler_m302_n_2(value){
    if(value=="n1"){
        calculator.setExpression({id:"h",latex:"h=1"});
    }
    else if (value=="n2"){
        calculator.setExpression({id:"h",latex:"h=0.5"});
    }
    else if (value=="n3"){
        calculator.setExpression({id:"h",latex:"h=0.25"});

    }
    else if (value=="n4"){
        calculator.setExpression({id:"h",latex:"h=0.1"});

    }    
}

function r_handler_m302_n_1(value){
    if(value=="f1") {
        calculator.setExpression({id:"F(x,y)", latex:"F(x,y)=x+y"});
    }
    else if (value=="f2") {
        calculator.setExpression({id:"F(x,y)", latex:"F(x,y)=x^2+y^2-1"});
    }
    else if (value=="f3") {
        calculator.setExpression({id:"F(x,y)", latex:"F(x,y)=\\sin(x)*\\sin(y)"});

    }

}

function n_handler_m302_sc(value){
    calculator.setExpression({id:"c", latex:"c="+value});
}