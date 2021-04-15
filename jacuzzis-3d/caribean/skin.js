// Garden Gnome Software - Skin
// Pano2VR 6.1.10/18007
// Filename: skin caribean v2.ggsk
// Generated 2021-04-02T17:59:37

function pano2vrSkin(player,base) {
	player.addVariable('versionesescalar', 2, false);
	player.addVariable('Prendido', 2, false);
	player.addVariable('cta', 2, false);
	player.addVariable('INFO', 2, false);
	player.addVariable('ticker', 2, false);
	player.addVariable('Interfaz', 2, false);
	player.addVariable('configurador', 0, "0");
	player.addVariable('color', 0, "blanco");
	player.addVariable('hidros', 1, 22);
	player.addVariable('luces', 1, 2);
	player.addVariable('blower', 2, true);
	player.addVariable('cabeceros', 2, true);
	player.addVariable('cascada', 2, true);
	player.addVariable('infohotspots', 2, false);
	player.addVariable('info_w_picture', 2, false);
	player.addVariable('filtro', 2, false);
	player.addVariable('luceson', 2, false);
	player.addVariable('vis_video_file', 2, false);
	player.addVariable('planta', 2, false);
	var me=this;
	var skin=this;
	var flag=false;
	var hotspotTemplates={};
	var skinKeyPressed = 0;
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	this.callNodeChange=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggNodeChange) {
				e.ggNodeChange();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; me.callNodeChange(me.divSkin); });
	
	var parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me._parte_superior=document.createElement('div');
		el.ggId="Parte Superior";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 70px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -70px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._parte_superior.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._parte_superior.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('Interfaz') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._parte_superior.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._parte_superior.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._parte_superior.style[domTransition]='left 1000ms ease 0ms, top 1000ms ease 0ms';
				if (me._parte_superior.ggCurrentLogicStatePosition == 0) {
					me._parte_superior.style.left='0px';
					me._parte_superior.style.top='0px';
				}
				else {
					me._parte_superior.style.left='0px';
					me._parte_superior.style.top='-70px';
				}
			}
		}
		me._parte_superior.ggUpdatePosition=function (useTransition) {
		}
		el=me._info=document.createElement('div');
		el.ggId="Info";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.803922);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 70px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 2000px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._info.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info.ggUpdatePosition=function (useTransition) {
		}
		el=me._volver0=document.createElement('div');
		el.ggId="volver";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #e5e5e5;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 70px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 70px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._volver0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._volver0.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_4=document.createElement('div');
		els=me._image_4__img=document.createElement('img');
		els.className='ggskin ggskin_image_4';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAcD0lEQVR4nO3dX+jfBb7n92cS4yZRyZCmHlf0TMO4o4IdEbQOzdHCFmekKOuFi16c7jrohcJ4YKZVaD3ejafUAaVVcLoMbeixoNWlykhZtLhnc7Q4OAx4jq3HQUbckG1S16OmydmYxKQXPw5dft98nL955xz6eMD3Op/n1evN5/f7fbMhOL2/V91RfaO6rNpRHan+ZfVa9U+rf1GdOlsPCAD89vzd6n+sTrQ27l/0+XH1e2fnMQGA35bd1f5+8fD/25/Pq//8bDwsAPCbu776q3618f+3P//N/CMDAL+Ji6sD/frj/9ef/3r6wQGAX99/328+/n/9eXj42QGAX8Nl/XK/8PerfP6z0QIA4Ff2X/bbHf9T1cnqvskIAOBX8yf99g+Av/7rgH80lwEA/C'+
			'r2dWYOgFOt/WjhzrkUAOCXdbQzdwCcqo5Vt4zVAAC/lA87swfAqeqz6uapIADgF3urM38AnKoOt/ZNgwD8DbDxbD8AZ92fDP0751X/a3Xd0L8HAHyBv9/MG4C//vzr6t8fKQMAvtAbzR4BB6srR8oAgEU3VMebPQL2Vf/eQBsA8AUebPYAOFV9UH15Ig4AOL0N1X/X/BHwTnXhQB8AsGBD9cPmj4A/q3YM9AEACzZVzzR/BPy0+tJAHwCwYHP1o+aPgNer8wf6AIAFf6f6Z80fAa9UWwb6AIAF26q9zR8BL7b2FgIAOEu2V282fwQ8X50z0AcALNhZ/XnzR8Ce/H8VAHBWXdja3+xPHwFPTsQBAMsuqX7e/BHw+EQcALDsK9X+5o+AhyfiAIBlX60ONH8EPDgRBwAs+1r1UbMHwMnqvok4AGDZ9dWh5o+AeybiAIBl'+
			'u6vDzR4BJ6o7J+IAgGU3Vf+m2SPgWHXrRBwAsOwftDbKk0fAZ9XNE3EAwLLbW3s9P3kEHKlunIgDAJbdVX3e7BHwaXXdQBsA8AW+3ewBcKr6uLpmIg4AWPad5o+Ag9WVE3EAwLLvNX8E7Kt2TcQBAMsebf4I+KD68kQcAHB6G6qnmj8CflZdNNAHACzYUP2w+SPgz6odA30AwIJN1TPNHwE/rb400AcALNhc/aj5I+D16vyBPgBgwd+p/lnzR8Ar1ZaBPgBgwbZqb/NHwIutvYUAAM6S7dWbzR8Bz1fnDPQBAAt2Vn/e/BGwp9p45vMAgCUXVu80fwQ8OREHACy7pPp580fA4xNxAMCyr1T7mz8CHp6IAwCWfbU60PwR8OBEHACw7GvVR80eACer+ybiAIBl11eHmj8C7pmIAwCW7a4ON3sEnKjunIgDAJbdVP2bZo'+
			'+AY9WtE3EAwLJ/UB1v9gj4rLp5Ig4AWHZ7a6/nJ4+AI9WNE3EAwLK7qs+bPQI+ra4baAMAvsC3mz0ATlUfV9dMxAEAy77T/BFwsLpyIg4AWPa95o+AfdWuiTgAYNmjzR8BH1RfnogDAE5vQ/VU80fAz6qLBvoAgAUbqh82fwT8WbVjoA8AWLCpeqb5I+Cn1ZcG+gCABZurHzV/BLxenT/QBwAs2Fq92vwR8Eq1ZaAPAFiwrdrb/BHwYmtvIQCAs2R79WbzR8Dz1TkDfQDAgp3Vnzd/BOypNp75PABgyYXVO80fAU9OxAEAyy6pft78EfD4RBwAsOwr1f7mj4CHJ+IAgGVfrQ40fwQ8OBEHACz7WvVRswfAyeq+iTgAYNn11aHmj4B7JuIAgGW7q8PNHgEnqjsn4gCAZTdVR5s9Ao5Vt07EAQDLbquON3sEfFbdPBEH'+
			'ACy7vbXX85NHwJHqxok4AGDZXdXnzR4Bn1bXDbQBAF/g280eAKeqj6trJuIAgGXfaf4IOFhdOREHACz7XvNHwL5q10QcALDs0eaPgA+qL0/EAQCnt6F6qvkj4GfVRQN9AMCCDdUPmz8C3qp2DPQBAAs2Vc80fwT8tPrSQB8AsGBz9aPmj4DXq/MH+gCABVurV5s/Al6ptgz0AQALtlV7mz8CXmztLQQAcJZsr95s/gh4vjpnoA8AWLCzerv5I2BPtfHM5wEASy6s3mn+CHhyIg4AWHZJ9fPmj4DHJ+IAgGVfqfY3fwQ8PBEHACz7anWg+SPgwYk4AGDZ16qPmj0ATlb3TcQBAMuurw41fwTcMxEHACzbXR1u9gg4Ud05EQcALLupOtrsEXCsunUiDgBYdlt1vNkj4LPq5ok4AGDZ7a29np88Ao5UN07EAQDL7qo+b/'+
			'YI+LS6bqANAPgC3272ADhVfVxdMxEHACz7TvNHwMHqyok4AGDZ95o/AvZVuybiAIBljzZ/BHxQfXkiDgA4vQ3VU80fAT+rLhroAwAWbKh+2PwR8Fa1Y6APAFiwqXqm+SPgp9WXBvoAgAWbqx81fwS8Xp0/0AcALNhavdr8EfBKtWWgDwBYsK3a2/wR8GJrbyEAgLNke/Vm80fA89U5A30AwIKd1dvNHwF7qo1nPg8AWHJh9U7zR8CTE3EAwLJLqp83fwQ8PhEHACz7SrW/+SPg4Yk4AGDZV6sDzR8BD07EAQDLvlZ91OwBcLK6byIOAFh2fXWo+SPgnok4AGDZ7upws0fAierOiTgAYNlN1dFmj4Bj1a0TcQDAstuq480eAZ9VN0/EAQDLbm/t9fzkEXCkunEiDgBYdlf1ebNHwKfVdQNtAMAX+HazB8Cp6uPqmok4'+
			'AGDZd5o/Ag5WV07EAQDLvtf8EbCv2jURBwAse7T5I+CD6ssTcQDA6W2onmr+CPhZddFAHwCwYEP1w+aPgLeqHQN9AMCCTdUzzR8BP62+NNAHACzYXP2o+SPg9er8gT4AYMHW6tXmj4BXqi0DfQDAgm3V3uaPgBdbewsBAJwl26s3mz8Cnq/OGegDABbsrN5u/gjYU20883kAwJILq3eaPwKenIgDAJZdUv28+SPg8Yk4AGDZV6r9zR8BD0/EAQDLvlodaP4IeHAiDgBY9rXqo2YPgJPVfRNxAMCy66tDzR8B90zEAQDLdleHmz0CTlR3TsQBAMtuqo42ewQcq26diAMAlt1WHW/2CPisunkiDgBYdntrr+cnj4Aj1Y0TcQDAsruqz5s9Aj6trhtoAwC+wLebPQBOVR9X10zEAQDLvtP8EXCwunIiDgBY9kjzR8C+at'+
			'dEHACw7NHmj4APqi9PxAEAp7eheqr5I+Bn1UUDfQDAgg3VD5s/At6qdgz0AQALNlXPNH8E/LT60kAfALBgc/Wj5o+A16vzB/oAgAVbq1ebPwJeqbYM9AEAC7ZVe5s/Al5s7S0EAHCWbK/ebP4IeL46Z6APAFiws3q7+SNgT7XxzOcBAEsurN5p/gh4ciIOAFh2SfXz5o+AxyfiAIBlX6n2N38EPDwRBwAs+2p1oPkj4MGJOABg2dXVR80eACer+ybiAIBl11eHmj8C7pmIAwCW7a4ON3sEnKjunIgDAJbdVB1t9gg4Vt06EQcALLutOt7sEfBZdfNEHACw7PbWXs9PHgFHqhsn4gCAZXdVnzd7BHxaXTfQBgB8gW83ewCcqj6urpmIAwCWfbf5I+BgdeVEHACw7JHmj4B91a6JOABg2aPNHwEfVL87EQcAnN6G6qnm'+
			'j4B3q4sG+gCABRurP27+CHir2jHQBwAs2FQ90/wR8OPqgoE+AGDB5uql5o+A16vzB/oAgAVbq1ebPwJeqbYM9AEAC7ZVe5s/Al5s7S0EAHCWbK/ebP4IeL46Z6APAFiws3q7+SNgT2t/mQAAnCUXVu80fwQ8OREHACy7pPp580fA4xNxAMCyr1T7mz8CHp6IAwCWXV4daP4IeHAiDgBYdnX1UbMHwMnqvok4AGDZ9dWh5o+AeybiAIBlu6vDzR4BJ6o7J+IAgGU3VUebPQKOVbdOxAEAy26rjjd7BHxW3TwRBwAsu7211/OTR8CR6saJOABg2V2t/aLe5BHwaXXdQBsA8AXub/YAOFV9XF0zEQcALPtu80fAwerKiTgAYNkjzR8B+6pdE3EAwLJHmz8CPqh+dyIOADi9DdVTzR8B71YXDfQBAAs2Vn/c/BHwVrVjoA'+
			'8AWLCperb5I+DH1QUDfQDAgnOrl5o/Al6vzh/oAwAWbK1ebf4IeKXaMtAHACzYVu1t/gh4sdo80AcALNhevdn8EfB8dc5AHwCwYGf1dvNHwJ7W/jIBADhLLqzeaf4IeHIiDgBYdkn1fvNHwOMTcQDAssuq/c0fAQ9PxAEAyy6vDjR/BDw4EQcALLu6+qjZA+Bkdd9EHACw7PrqUPNHwD0TcQDAst3V4WaPgBPVnRNxAMCym6qjzR4Bx6pbJ+IAgGW3VcebPQI+q26eiAMAlt3e2uv5ySPgSHXjRBwAsOyu1n5Rb/II+LS6bqANAPgC9zd7AJyqPq6umYgDAJZ9t/kj4GB15UQcALDskeaPgH3Vrok4AGDZo80fAR9UvzsRBwCc3obqqeaPgHeriwb6AIAFG6unmz8C3qp2DPQBAAs2Vc82fwT8uLpgoA8AWHBu9VLz'+
			'R8Dr1fkDfQDAgq3Vq80fAa9UWwb6AIAF26q9zR8BL1abB/oAgAXbqzebPwKer84Z6AMAFuys3m7+CNjT2l8mAABnyYXVO80fAU9OxAEAyy6t3m/+CHh8Ig4AWHZZtb/5I+DhiTgAYNnl1YHmj4AHJ+IAgGVXVx81ewCcrO6biAMAll1fHWr+CLhnIg4AWLa7OtzsEXCiunMiDgBYdlN1tNkj4Fh160QcALDstup4s0fAZ9XNE3EAwLLbW3s9P3kEHKlunIgDAJbd1dov6k0eAZ9W1w20AQBf4P5mD4BT1cfVNRNxAMCy7zZ/BBysrpyIAwCWPdL8EbCv2jURBwAse7T5I+CD6ncn4gCA09tQ/ZPmj4B3qn9noA8AWLCxerr5I+B/qzYN9AEAC86p/mnzR8B3JuIAgGXnVi81ewB8WF0wEQcALNtavdrsEXDXRBgA8M'+
			'W2VXubOwCemckCAH6R7dWbzRwAPxtqAgB+CTurtzvzB8ChqSD+Ztp4th8AgLPi1Nl+AABgzfbqJ838CODdoSYA4AucV/1pfgkQAP5/Y2v1J82N/6nqH0+EAQCndza+COj/rs6fiAMAVp1T/S/Njv+p6g8m4gCAVRur/6n58X85/xkQAJwVG6ofNj/+/0e1Y6APADiN7zc//u9VF0/EAQCr/qj58d9X7ZqIAwBW/WHz43+wumIiDgBY9QfNj/+H1VUTcQDAqm9VJ5sd/0+qayfiAIBVv1993uz4H6lumIgDAFbdVh1vdvyPVt+ciAMAVn2jtTGeHP9j1S0TcQDAqr9f/VWz43+iumMiDgBY9fXqULPjf7K6eyIOAFh1dfWXzY//vRNxAMCqy6sDzY7/qeqBiTgAYNVl1b9qfvwfmogDAFZdWr3f/Pg/NhEHAKz6neov'+
			'mh//JybiAIBVO6u3mx//PdXGM58HAKy3vfpJ8+P/XLVpoA8AWOe86k+bH/8Xqs0DfQDAOlurf978+L9cbRnoAwDWObd6qfnxf621tw4AwLBN1f/c/Pi/UV0w0AcArLOxerr58X+r2jHQBwCss6H6QfPj/25r3zEAAJwF329+/N+rLp6IAwBW/VHz47+v2jURBwCs+sPmx/9gdcVEHACw6g+aH/8Pq6sm4gCAVd+qTjY7/p9U107EAQCrfr/6vNnxP1LdMBEHAKy6rTre7Pgfrb45EQcArPpGa2M8Of7Hqlsm4gCAVb9XHW52/E9Ud0zEAQCrvl4danb8T1Z3T8QBAKuurv6y+fG/dyIOAFh1eXWg2fE/VT0wEQcArLqs2t/8+D80EQcArLq0er/58X9sIg4AWPU71V80P/5PTMQBAKt2Vm83P/57qo1nPg8AWG979Z'+
			'Pmx/+5atNAHwCwznnVnzY//i9Umwf6AIB1tlb/vPnxf7naMtAHAKxzbvVS8+P/WmtvHQCAYZuqZ5sf/zeqCwb6AIB1NlZPNz/+b1U7BvoAgHU2VD9ofvzfbe07BgCAs+D7zY//e9XFE3EAwKo/an7891W7JuIAgFV/2Pz4H6yumIgDAFbd3/z4f1hdNREHAKz6VnWy2fH/pLp2Ig4AWPX71efNjv+R6oaJOABg1W3V8WbH/2j1zYk4AGDVN1ob48nxP1bdMhEHAKz6vepws+N/orpjIg4AWPX16lCz43+yunsiDgBYdXX1UfPjf+9EHACw6vLqQLPjf6p6YCIOAFh1WbW/+fF/aCIOAFh1afV+8+P/2EQcALDqd6q/aH78n5iIAwBW7azebn7891Qbz3weALDe9uonzY//c9WmgT4AYJ1t1d7mx/+FavNAHwCwztbq'+
			'1ebH/+Vqy0AfALDOudVLzY//a9V5A30AwDqbqmebH/83qgsG+gCAdTZWTzc//m9VOwb6AIB1NlQ/aH78323tOwYAgLPg+82P/3vVxRNxAMCqR5of/33Vrok4AGDVQ82P/8Hqiok4AGDV/c2P/4fVVRNxAMCqb1Unmx3/T6prJ+IAgFW/X33e7PgfqW6YiAMAVt1WHW92/D+rvjkRBwCs+kZ1tNnxP1bdMhEHAKzaXR1udvxPVHdMxAEAq75eHWp2/E9Wd0/EAQCrrq4+an78752IAwBWXV4daHb8T1UPTMQBAKsuq/Y3P/4PTcQBAKsurd5vfvwfm4gDAFb9TvUXzY//ExNxAMCqndXbzY//nmrjmc8DANbbXv2k+fF/rto00AcArLOt2tv8+L9QbR7oAwDW2Vq92vz4v1xtGegDANY5t3qp+fF/rTpvoA8AWGdT9W'+
			'zz4/9GdcFAHwCwzsbq6ebH/61qx0AfALDOhuoHzY//u619xwAAcBZ8v/nxf6+6eCIOAFj1SPPjv6/aNREHAKx6qPnxP1hdMREHAKy6v/nx/7C6aiIOAFj1repks+P/SXXtRBwAsOofVieaHf8j1Q0TcQDAqtuq482O/2fVNyfiAIBVN1VHmx3/Y9UtE3EAwKrd1eFmx/9EdcdEHACw6uvVoWbH/2R190QcALDq6uqj5sf/3ok4AGDV5dWBZsf/VPXARBwAsOqyan/z4//QRBwAsOrS6v3mx/+xiTgAYNWF1TvNj/8TE3EAwKqd1dvNj/+eauOZzwMA1tte/aT58X+u2jTQBwCss63a2/z4v1BtHugDANbZWr3a/Pi/XG0Z6AMA1jm3eqn58X+tOm+gDwBYZ1P1bPPj/0Z1wUAfALDOxurp5sf/rWrHQB8AsM6G6gfN'+
			'j/+71UUDfQDAaXy/+fF/r7p4Ig4AWPVI8+O/r9o1EQcArHqo+fE/WF0xEQcArLq/+fH/sLpqIg4AWHVXdbLZ8f+kunagDQA4jdurE82O/5Hqhok4AGDVbdXxZsf/s+qbE3EAwKqbqqPNjv+x6paJOABg1e7qcLPjf6K6YyIOAFj19epQs+N/srp7Ig4AWHV19VHz43/vRBwAsOry6kCz43+qemAiDgBYdVm1v/nxf2giDgBYdWn1fvPj/9hEHACw6sLqnebH/4mJOABg1c7q7ebHf0+18cznAQDrba9+0vz4P1dtGugDANbZVu1tfvxfqDYP9AEA62ytXm1+/F+utgz0AQDrnFu91Pz4v1adN9AHAKyzqXq2+fF/o7pgoA8AWGdj9XTz4/9WtWOgDwBYZ0P1g+bH/93qooE+AOA0vt/8+L9XXTwRBwCseqT58d9X7Z'+
			'qIAwBWPdT8+B+srpiIAwBW3d/8+H9YXTURBwCsuqs62ez4f1JdO9AGAJzG7dWJZsf/SHXDRBwAsOq26niz4/9Z9c2JOABg1U3V0WbH/1h1y0QcALBqd3W42fE/Ud0xEQcArPp6dajZ8T9Z3T0RBwCsurr6qPnxv3ciDgBYdXl1oNnxP1U9MBEHAKy6rNrf/Pg/NBEHAKy6tHq/+fF/bCIOAFh1YfVO8+P/xEQcALBqZ/V28+O/p9p45vMAgPW2Vz9pfvyfqzYN9AEA62yr9jY//i9Umwf6AIB1tlavNj/+L1dbBvoAgHXOrV5qfvxfq84b6AMA1tlUPdv8+L9RXTDQBwCss7F6uvnxf6vaMdAHAKyzofpB8+P/bnXRQB8AcBrfb37836sunogDAFY90vz476t2TcQBAKu+2/z4H6yumIgDAFbd3/z4f1hdNREHAKy6'+
			'qzrZ7Ph/Ul070AYAnMbt1Ylmx/9IdcNEHACw6rbqeLPj/1n1zYk4AGDVTdXRZsf/WHXLRBwAsGp3dbjZ8T9R3TERBwCsur461Oz4n6zunogDAFZdXX3U/PjfOxEHAKy6vDrQ7Pifqh6YiAMAVl1W7W9+/B+aiAMAVl1avd/8+D82EQcArLqweqf58X9iIg4AWLWzerv58d9TbTzzeQDAeturN5sf/+eqTQN9AMA626q9zY//C9XmgT4AYJ2t1avNj//L1ZaBPgBgnXOrl5of/9eq8wb6AIB1NlXPNj/+b1QXDPQBAOtsrJ5ufvzfqnYM9AEA62yoftD8+L9bXTTQBwCcxqPNj/971cUTcQDAqkeaH/991a6JOABg1XebH/+D1RUTcQDAqvubH/8Pq6sm4gCAVXdVJ5sd/0+qawfaAIDTuL060ez4H6lumIgDAFbdVh'+
			'1vdvw/q26eiAMAVt1UHW12/I9Vt0zEAQCrdleHmx3/E9UdE3EAwKrrq0PNjv/J6u6JOABg1dXVR82P/70TcQDAqsurA82O/6nqgYk4AGDVZdX+5sf/oYk4AGDVpdX7zY//YxNxAMCqC6t3mh//JybiAIBVO6u3mx//PdXGM58HAKy3vXqz+fF/rto00AcArLOt2tv8+L9QbR7oAwDW2Vq92vz4v1xtGegDANY5t3qp+fF/rTpvoA8AWGdT9Wzz4/9GdcFAHwCwzsbq6ebH/61qx0AfALDOhuqp5sf/3eqigT4A4DQebX7836sunogDAFY90vz476t2TcQBAKu+2/z4H6yumIgDAFbd3/z4f1hdNREHAKy6qzrZ7Ph/Ul070AYAnMbt1Ylmx/9IdcNEHACw6rbqeLPj/1l180QcALDqpupos+N/rLplIg4AWLW7Otzs'+
			'+J+o7piIAwBWXV8danb8T1Z3T8QBAKuurj5qfvzvnYgDAFZdXh1odvxPVQ9MxAEAq75S7W9+/B+aiAMAVl1S/bz58X9sIg4AWHVh9U7z4//ERBwAsGpn9Xbz47+n2njm8wCA9bZXbzY//s9Vmwb6AIB1tlV7mx//F6rNA30AwDpbq1ebH/+Xqy0DfQDAOpurl5of/9eq8wb6AIB1NlXPND/+b1QXDPQBAOtsrP64+fF/q9ox0AcArLOh+ifNj///Wf27A30AwGn8F82P/3vVxRNxAMCq/6g60ez4/8vqyxNxAMDp/bjZ8T9YXTFSBgCc1n/c7Ph/WF01UgYALPpvmxv/T6prZ7IAgC/yZ82M//9T/YdDTQDAL/CvO/Pj/1l181QQAPCLHe3Mj/9/MlYDAPxS9nXmxv9EdcdcCgDwy/oXnZnx/7z6Twc7AIBfwZn4Bs'+
			'CT1b2TEQDAr+ayfvvfAvid0QIA4Nfyw3574//Q8LMDAL+mv1v9X/3m4/9fTT84APCb+Q+qv+rXH//H5x8ZAPht2F3t71f/Uz8/8weAv+Uuqv6H6ni/ePz/93y9L8DfShvO9gPwN9Zl1T+svlH9verC6i+rf9Xadwe82P/3HQIA/C3z/wJtmX5j/1fNqwAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 4";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:180,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 45px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.5;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 45px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._image_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_4.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._volver0.appendChild(me._image_4);
		me._info.appendChild(me._volver0);
		el=me._desc=document.createElement('div');
		els=me._desc__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Desc";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : 5px;';
		hs+='height : 30px;';
		hs+='left : 75px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		hs+='font-family: Visby';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(130,130,130,1);';
		hs+='font-size: 22px;';
		hs+='font-weight: normal;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._desc.ggUpdateText=function() {
			var hs=me.ggUserdata.comment;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._desc.ggUpdateText();
		player.addListener('changenode', function() {
			me._desc.ggUpdateText();
		});
		el.appendChild(els);
		me._desc.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._desc.ggUpdatePosition=function (useTransition) {
		}
		me._info.appendChild(me._desc);
		el=me._titulo=document.createElement('div');
		els=me._titulo__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Titulo";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : 35px;';
		hs+='height : 30px;';
		hs+='left : 75px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		hs+='font-family: Visby';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(130,130,130,1);';
		hs+='font-size: 24px;';
		hs+='font-weight: normal;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._titulo.ggUpdateText=function() {
			var hs="<span style=\"color: #00c2c9;\"><b>Jacuzzi<\/b><\/span> "+me.ggUserdata.information;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._titulo.ggUpdateText();
		player.addListener('changenode', function() {
			me._titulo.ggUpdateText();
		});
		el.appendChild(els);
		me._titulo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._titulo.ggUpdatePosition=function (useTransition) {
		}
		me._info.appendChild(me._titulo);
		me._parte_superior.appendChild(me._info);
		el=me._image_1=document.createElement('div');
		els=me._image_1__img=document.createElement('img');
		els.className='ggskin ggskin_image_1';
		hs=basePath + 'images/image_1.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 90px;';
		hs+='left : 3px;';
		hs+='position : absolute;';
		hs+='top : -12px;';
		hs+='visibility : inherit;';
		hs+='width : 90px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_1.ggUpdatePosition=function (useTransition) {
		}
		me._parte_superior.appendChild(me._image_1);
		me.divSkin.appendChild(me._parte_superior);
		el=me._responsive_configurador=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="Responsive Configurador";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : -120px;';
		hs+='height : 120px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._responsive_configurador.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._responsive_configurador.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('Interfaz') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._responsive_configurador.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._responsive_configurador.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._responsive_configurador.style[domTransition]='left 1000ms ease 0ms, bottom 1000ms ease 0ms, width 1000ms ease 0ms, height 1000ms ease 0ms';
				if (me._responsive_configurador.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._responsive_configurador.style.bottom='0px';
					me._responsive_configurador.ggUpdatePosition(true);
				}
				else {
					me._responsive_configurador.ggDx=0;
					me._responsive_configurador.style.bottom='-120px';
					me._responsive_configurador.ggUpdatePosition(true);
				}
			}
		}
		me._responsive_configurador.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width > 1000)) && 
				((player.getViewerSize().width < 1500))
			)
			{
				newLogicStateSize = 0;
			}
			else if (
				((player.getViewerSize().width > 1500))
			)
			{
				newLogicStateSize = 1;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._responsive_configurador.ggCurrentLogicStateSize != newLogicStateSize) {
				me._responsive_configurador.ggCurrentLogicStateSize = newLogicStateSize;
				me._responsive_configurador.style[domTransition]='left 1000ms ease 0ms, bottom 1000ms ease 0ms, width 1000ms ease 0ms, height 1000ms ease 0ms';
				if (me._responsive_configurador.ggCurrentLogicStateSize == 0) {
					me._responsive_configurador.style.width='65%';
					me._responsive_configurador.style.height='120px';
					setTimeout(function() {skin.updateSize(me._responsive_configurador);}, 1000);
				}
				else if (me._responsive_configurador.ggCurrentLogicStateSize == 1) {
					me._responsive_configurador.style.width='35%';
					me._responsive_configurador.style.height='120px';
					setTimeout(function() {skin.updateSize(me._responsive_configurador);}, 1000);
				}
				else {
					me._responsive_configurador.style.width='100%';
					me._responsive_configurador.style.height='120px';
					setTimeout(function() {skin.updateSize(me._responsive_configurador);}, 1000);
				}
			}
		}
		me._responsive_configurador.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._configurador=document.createElement('div');
		el.ggId="Configurador";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='cursor : default;';
		hs+='height : 120px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._configurador.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._configurador.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('configurador') == "0"))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._configurador.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._configurador.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._configurador.style[domTransition]='left 500ms ease 0ms, bottom 500ms ease 0ms';
				if (me._configurador.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._configurador.style.bottom='-60px';
					me._configurador.ggUpdatePosition(true);
				}
				else {
					me._configurador.ggDx=0;
					me._configurador.style.bottom='0px';
					me._configurador.ggUpdatePosition(true);
				}
			}
		}
		me._configurador.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._color0=document.createElement('div');
		el.ggId="Color";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0,sy:0 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 60px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._color0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._color0.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('configurador') == "color"))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._color0.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._color0.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._color0.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms';
				if (me._color0.ggCurrentLogicStateScaling == 0) {
					me._color0.ggParameter.sx = 1;
					me._color0.ggParameter.sy = 1;
					me._color0.style[domTransform]=parameterToTransform(me._color0.ggParameter);
				}
				else {
					me._color0.ggParameter.sx = 0;
					me._color0.ggParameter.sy = 0;
					me._color0.style[domTransform]=parameterToTransform(me._color0.ggParameter);
				}
			}
		}
		me._color0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._blanco=document.createElement('div');
		el.ggId="Blanco";
		el.ggDx=-80;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.00392157);';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._blanco.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._blanco.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseDown['blanco'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._blanco.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._blanco.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._blanco.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms';
				if (me._blanco.ggCurrentLogicStateScaling == 0) {
					me._blanco.ggParameter.sx = 0.9;
					me._blanco.ggParameter.sy = 0.9;
					me._blanco.style[domTransform]=parameterToTransform(me._blanco.ggParameter);
				}
				else {
					me._blanco.ggParameter.sx = 1;
					me._blanco.ggParameter.sy = 1;
					me._blanco.style[domTransform]=parameterToTransform(me._blanco.ggParameter);
				}
			}
		}
		me._blanco.onclick=function (e) {
			player.setVariableValue('color', "blanco");
		}
		me._blanco.onmouseout=function (e) {
			me.elementMouseDown['blanco']=false;
			me._blanco.logicBlock_scaling();
		}
		me._blanco.onmousedown=function (e) {
			me.elementMouseDown['blanco']=true;
			me._blanco.logicBlock_scaling();
		}
		me._blanco.onmouseup=function (e) {
			me.elementMouseDown['blanco']=false;
			me._blanco.logicBlock_scaling();
		}
		me._blanco.ontouchend=function (e) {
			me.elementMouseDown['blanco']=false;
			me._blanco.logicBlock_scaling();
		}
		me._blanco.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._rectangle_318=document.createElement('div');
		el.ggId="Rectangle 3";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 50px;';
		hs+='border-radius : 50px;';
		hs+='border : 1px solid #bbbbbb;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_318.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_318.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((player.getVariableValue('color') == "blanco"))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._rectangle_318.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._rectangle_318.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._rectangle_318.style[domTransition]='border-color 500ms ease 0ms';
				if (me._rectangle_318.ggCurrentLogicStateBorderColor == 0) {
					me._rectangle_318.style.borderColor="rgba(58,165,167,1)";
				}
				else {
					me._rectangle_318.style.borderColor="rgba(187,187,187,1)";
				}
			}
		}
		me._rectangle_318.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._rectangle_319=document.createElement('div');
		el.ggId="Rectangle 3";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 50px;';
		hs+='border-radius : 50px;';
		hs+='background : #f3f3f3;';
		hs+='border : 4px solid #ffffff;';
		hs+='cursor : pointer;';
		hs+='height : 38px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_319.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_319.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._rectangle_318.appendChild(me._rectangle_319);
		me._blanco.appendChild(me._rectangle_318);
		me._color0.appendChild(me._blanco);
		el=me._beige=document.createElement('div');
		el.ggId="Beige";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.00392157);';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._beige.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._beige.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseDown['beige'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._beige.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._beige.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._beige.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms';
				if (me._beige.ggCurrentLogicStateScaling == 0) {
					me._beige.ggParameter.sx = 0.9;
					me._beige.ggParameter.sy = 0.9;
					me._beige.style[domTransform]=parameterToTransform(me._beige.ggParameter);
				}
				else {
					me._beige.ggParameter.sx = 1;
					me._beige.ggParameter.sy = 1;
					me._beige.style[domTransform]=parameterToTransform(me._beige.ggParameter);
				}
			}
		}
		me._beige.onclick=function (e) {
			player.setVariableValue('color', "beige");
		}
		me._beige.onmouseout=function (e) {
			me.elementMouseDown['beige']=false;
			me._beige.logicBlock_scaling();
		}
		me._beige.onmousedown=function (e) {
			me.elementMouseDown['beige']=true;
			me._beige.logicBlock_scaling();
		}
		me._beige.onmouseup=function (e) {
			me.elementMouseDown['beige']=false;
			me._beige.logicBlock_scaling();
		}
		me._beige.ontouchend=function (e) {
			me.elementMouseDown['beige']=false;
			me._beige.logicBlock_scaling();
		}
		me._beige.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._rectangle_316=document.createElement('div');
		el.ggId="Rectangle 3";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 50px;';
		hs+='border-radius : 50px;';
		hs+='border : 1px solid #bbbbbb;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_316.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_316.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((player.getVariableValue('color') == "beige"))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._rectangle_316.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._rectangle_316.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._rectangle_316.style[domTransition]='border-color 500ms ease 0ms';
				if (me._rectangle_316.ggCurrentLogicStateBorderColor == 0) {
					me._rectangle_316.style.borderColor="rgba(58,165,167,1)";
				}
				else {
					me._rectangle_316.style.borderColor="rgba(187,187,187,1)";
				}
			}
		}
		me._rectangle_316.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._rectangle_317=document.createElement('div');
		el.ggId="Rectangle 3";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 50px;';
		hs+='border-radius : 50px;';
		hs+='background : #dcd0b7;';
		hs+='border : 4px solid #ffffff;';
		hs+='cursor : pointer;';
		hs+='height : 38px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_317.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_317.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._rectangle_316.appendChild(me._rectangle_317);
		me._beige.appendChild(me._rectangle_316);
		me._color0.appendChild(me._beige);
		el=me._gris_oscuro=document.createElement('div');
		el.ggId="Gris Oscuro";
		el.ggDx=80;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.00392157);';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._gris_oscuro.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gris_oscuro.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseDown['gris_oscuro'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._gris_oscuro.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._gris_oscuro.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._gris_oscuro.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms';
				if (me._gris_oscuro.ggCurrentLogicStateScaling == 0) {
					me._gris_oscuro.ggParameter.sx = 0.9;
					me._gris_oscuro.ggParameter.sy = 0.9;
					me._gris_oscuro.style[domTransform]=parameterToTransform(me._gris_oscuro.ggParameter);
				}
				else {
					me._gris_oscuro.ggParameter.sx = 1;
					me._gris_oscuro.ggParameter.sy = 1;
					me._gris_oscuro.style[domTransform]=parameterToTransform(me._gris_oscuro.ggParameter);
				}
			}
		}
		me._gris_oscuro.onclick=function (e) {
			player.setVariableValue('color', "grisoscuro");
		}
		me._gris_oscuro.onmouseout=function (e) {
			me.elementMouseDown['gris_oscuro']=false;
			me._gris_oscuro.logicBlock_scaling();
		}
		me._gris_oscuro.onmousedown=function (e) {
			me.elementMouseDown['gris_oscuro']=true;
			me._gris_oscuro.logicBlock_scaling();
		}
		me._gris_oscuro.onmouseup=function (e) {
			me.elementMouseDown['gris_oscuro']=false;
			me._gris_oscuro.logicBlock_scaling();
		}
		me._gris_oscuro.ontouchend=function (e) {
			me.elementMouseDown['gris_oscuro']=false;
			me._gris_oscuro.logicBlock_scaling();
		}
		me._gris_oscuro.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._rectangle_314=document.createElement('div');
		el.ggId="Rectangle 3";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 50px;';
		hs+='border-radius : 50px;';
		hs+='border : 1px solid #bbbbbb;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_314.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_314.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((player.getVariableValue('color') == "grisoscuro"))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._rectangle_314.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._rectangle_314.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._rectangle_314.style[domTransition]='border-color 500ms ease 0ms';
				if (me._rectangle_314.ggCurrentLogicStateBorderColor == 0) {
					me._rectangle_314.style.borderColor="rgba(58,165,167,1)";
				}
				else {
					me._rectangle_314.style.borderColor="rgba(187,187,187,1)";
				}
			}
		}
		me._rectangle_314.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._rectangle_315=document.createElement('div');
		el.ggId="Rectangle 3";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 50px;';
		hs+='border-radius : 50px;';
		hs+='background : #4c4c4c;';
		hs+='border : 4px solid #ffffff;';
		hs+='cursor : pointer;';
		hs+='height : 38px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_315.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_315.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._rectangle_314.appendChild(me._rectangle_315);
		me._gris_oscuro.appendChild(me._rectangle_314);
		me._color0.appendChild(me._gris_oscuro);
		el=me._gris_claro=document.createElement('div');
		el.ggId="Gris claro";
		el.ggDx=40;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.00392157);';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._gris_claro.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gris_claro.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseDown['gris_claro'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._gris_claro.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._gris_claro.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._gris_claro.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms';
				if (me._gris_claro.ggCurrentLogicStateScaling == 0) {
					me._gris_claro.ggParameter.sx = 0.9;
					me._gris_claro.ggParameter.sy = 0.9;
					me._gris_claro.style[domTransform]=parameterToTransform(me._gris_claro.ggParameter);
				}
				else {
					me._gris_claro.ggParameter.sx = 1;
					me._gris_claro.ggParameter.sy = 1;
					me._gris_claro.style[domTransform]=parameterToTransform(me._gris_claro.ggParameter);
				}
			}
		}
		me._gris_claro.onclick=function (e) {
			player.setVariableValue('color', "grisclaro");
		}
		me._gris_claro.onmouseout=function (e) {
			me.elementMouseDown['gris_claro']=false;
			me._gris_claro.logicBlock_scaling();
		}
		me._gris_claro.onmousedown=function (e) {
			me.elementMouseDown['gris_claro']=true;
			me._gris_claro.logicBlock_scaling();
		}
		me._gris_claro.onmouseup=function (e) {
			me.elementMouseDown['gris_claro']=false;
			me._gris_claro.logicBlock_scaling();
		}
		me._gris_claro.ontouchend=function (e) {
			me.elementMouseDown['gris_claro']=false;
			me._gris_claro.logicBlock_scaling();
		}
		me._gris_claro.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._rectangle_312=document.createElement('div');
		el.ggId="Rectangle 3";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 50px;';
		hs+='border-radius : 50px;';
		hs+='border : 1px solid #bbbbbb;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_312.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_312.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((player.getVariableValue('color') == "grisclaro"))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._rectangle_312.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._rectangle_312.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._rectangle_312.style[domTransition]='border-color 500ms ease 0ms';
				if (me._rectangle_312.ggCurrentLogicStateBorderColor == 0) {
					me._rectangle_312.style.borderColor="rgba(58,165,167,1)";
				}
				else {
					me._rectangle_312.style.borderColor="rgba(187,187,187,1)";
				}
			}
		}
		me._rectangle_312.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._rectangle_313=document.createElement('div');
		el.ggId="Rectangle 3";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 50px;';
		hs+='border-radius : 50px;';
		hs+='background : #ababab;';
		hs+='border : 4px solid #ffffff;';
		hs+='cursor : pointer;';
		hs+='height : 38px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_313.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_313.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._rectangle_312.appendChild(me._rectangle_313);
		me._gris_claro.appendChild(me._rectangle_312);
		me._color0.appendChild(me._gris_claro);
		me._configurador.appendChild(me._color0);
		el=me._hidros0=document.createElement('div');
		el.ggId="Hidros";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0,sy:0 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 60px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._hidros0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._hidros0.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('configurador') == "hidros"))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._hidros0.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._hidros0.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._hidros0.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms';
				if (me._hidros0.ggCurrentLogicStateScaling == 0) {
					me._hidros0.ggParameter.sx = 1;
					me._hidros0.ggParameter.sy = 1;
					me._hidros0.style[domTransform]=parameterToTransform(me._hidros0.ggParameter);
				}
				else {
					me._hidros0.ggParameter.sx = 0;
					me._hidros0.ggParameter.sy = 0;
					me._hidros0.style[domTransform]=parameterToTransform(me._hidros0.ggParameter);
				}
			}
		}
		me._hidros0.onclick=function (e) {
			player.setVariableValue('Prendido', false);
		}
		me._hidros0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._x8=document.createElement('div');
		el.ggId="x8";
		el.ggDx=-80;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.00392157);';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._x8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._x8.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseDown['x8'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._x8.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._x8.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._x8.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms';
				if (me._x8.ggCurrentLogicStateScaling == 0) {
					me._x8.ggParameter.sx = 0.9;
					me._x8.ggParameter.sy = 0.9;
					me._x8.style[domTransform]=parameterToTransform(me._x8.ggParameter);
				}
				else {
					me._x8.ggParameter.sx = 1;
					me._x8.ggParameter.sy = 1;
					me._x8.style[domTransform]=parameterToTransform(me._x8.ggParameter);
				}
			}
		}
		me._x8.onclick=function (e) {
			player.setVariableValue('hidros', Number("8"));
		}
		me._x8.onmouseout=function (e) {
			me.elementMouseDown['x8']=false;
			me._x8.logicBlock_scaling();
		}
		me._x8.onmousedown=function (e) {
			me.elementMouseDown['x8']=true;
			me._x8.logicBlock_scaling();
		}
		me._x8.onmouseup=function (e) {
			me.elementMouseDown['x8']=false;
			me._x8.logicBlock_scaling();
		}
		me._x8.ontouchend=function (e) {
			me.elementMouseDown['x8']=false;
			me._x8.logicBlock_scaling();
		}
		me._x8.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._text_114=document.createElement('div');
		els=me._text_114__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1";
		el.ggDx=0;
		el.ggDy=-1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(130,130,130,1);';
		hs+='font-size: 18px;';
		hs+='font-weight: lighter;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="X6";
		el.appendChild(els);
		me._text_114.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_114.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player.getVariableValue('hidros') == 8))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._text_114.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._text_114.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._text_114__text.style[domTransition]='color 500ms ease 0ms';
				if (me._text_114.ggCurrentLogicStateTextColor == 0) {
					me._text_114__text.style.color="rgba(58,165,167,1)";
				}
				else {
					me._text_114__text.style.color="rgba(130,130,130,1)";
				}
			}
		}
		me._text_114.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((58-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._x8.appendChild(me._text_114);
		el=me._rectangle_311=document.createElement('div');
		el.ggId="Rectangle 3";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 50px;';
		hs+='border-radius : 50px;';
		hs+='border : 1px solid #bbbbbb;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_311.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_311.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((player.getVariableValue('hidros') == 8))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._rectangle_311.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._rectangle_311.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._rectangle_311.style[domTransition]='border-color 500ms ease 0ms';
				if (me._rectangle_311.ggCurrentLogicStateBorderColor == 0) {
					me._rectangle_311.style.borderColor="rgba(58,165,167,1)";
				}
				else {
					me._rectangle_311.style.borderColor="rgba(187,187,187,1)";
				}
			}
		}
		me._rectangle_311.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._x8.appendChild(me._rectangle_311);
		me._hidros0.appendChild(me._x8);
		el=me._x10=document.createElement('div');
		el.ggId="x10";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.00392157);';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._x10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._x10.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseDown['x10'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._x10.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._x10.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._x10.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms';
				if (me._x10.ggCurrentLogicStateScaling == 0) {
					me._x10.ggParameter.sx = 0.9;
					me._x10.ggParameter.sy = 0.9;
					me._x10.style[domTransform]=parameterToTransform(me._x10.ggParameter);
				}
				else {
					me._x10.ggParameter.sx = 1;
					me._x10.ggParameter.sy = 1;
					me._x10.style[domTransform]=parameterToTransform(me._x10.ggParameter);
				}
			}
		}
		me._x10.onclick=function (e) {
			player.setVariableValue('hidros', Number("10"));
		}
		me._x10.onmouseout=function (e) {
			me.elementMouseDown['x10']=false;
			me._x10.logicBlock_scaling();
		}
		me._x10.onmousedown=function (e) {
			me.elementMouseDown['x10']=true;
			me._x10.logicBlock_scaling();
		}
		me._x10.onmouseup=function (e) {
			me.elementMouseDown['x10']=false;
			me._x10.logicBlock_scaling();
		}
		me._x10.ontouchend=function (e) {
			me.elementMouseDown['x10']=false;
			me._x10.logicBlock_scaling();
		}
		me._x10.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._text_113=document.createElement('div');
		els=me._text_113__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1";
		el.ggDx=0;
		el.ggDy=-1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(130,130,130,1);';
		hs+='font-size: 18px;';
		hs+='font-weight: lighter;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="X8";
		el.appendChild(els);
		me._text_113.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_113.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player.getVariableValue('hidros') == 10))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._text_113.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._text_113.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._text_113__text.style[domTransition]='color 500ms ease 0ms';
				if (me._text_113.ggCurrentLogicStateTextColor == 0) {
					me._text_113__text.style.color="rgba(58,165,167,1)";
				}
				else {
					me._text_113__text.style.color="rgba(130,130,130,1)";
				}
			}
		}
		me._text_113.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((58-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._x10.appendChild(me._text_113);
		el=me._rectangle_310=document.createElement('div');
		el.ggId="Rectangle 3";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 50px;';
		hs+='border-radius : 50px;';
		hs+='border : 1px solid #bbbbbb;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_310.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_310.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((player.getVariableValue('hidros') == 10))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._rectangle_310.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._rectangle_310.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._rectangle_310.style[domTransition]='border-color 500ms ease 0ms';
				if (me._rectangle_310.ggCurrentLogicStateBorderColor == 0) {
					me._rectangle_310.style.borderColor="rgba(58,165,167,1)";
				}
				else {
					me._rectangle_310.style.borderColor="rgba(187,187,187,1)";
				}
			}
		}
		me._rectangle_310.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._x10.appendChild(me._rectangle_310);
		me._hidros0.appendChild(me._x10);
		el=me._x22=document.createElement('div');
		el.ggId="x22";
		el.ggDx=80;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.00392157);';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._x22.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._x22.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseDown['x22'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._x22.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._x22.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._x22.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms';
				if (me._x22.ggCurrentLogicStateScaling == 0) {
					me._x22.ggParameter.sx = 0.9;
					me._x22.ggParameter.sy = 0.9;
					me._x22.style[domTransform]=parameterToTransform(me._x22.ggParameter);
				}
				else {
					me._x22.ggParameter.sx = 1;
					me._x22.ggParameter.sy = 1;
					me._x22.style[domTransform]=parameterToTransform(me._x22.ggParameter);
				}
			}
		}
		me._x22.onclick=function (e) {
			player.setVariableValue('hidros', Number("22"));
		}
		me._x22.onmouseout=function (e) {
			me.elementMouseDown['x22']=false;
			me._x22.logicBlock_scaling();
		}
		me._x22.onmousedown=function (e) {
			me.elementMouseDown['x22']=true;
			me._x22.logicBlock_scaling();
		}
		me._x22.onmouseup=function (e) {
			me.elementMouseDown['x22']=false;
			me._x22.logicBlock_scaling();
		}
		me._x22.ontouchend=function (e) {
			me.elementMouseDown['x22']=false;
			me._x22.logicBlock_scaling();
		}
		me._x22.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._text_112=document.createElement('div');
		els=me._text_112__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1";
		el.ggDx=0;
		el.ggDy=-1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(130,130,130,1);';
		hs+='font-size: 18px;';
		hs+='font-weight: lighter;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="X8";
		el.appendChild(els);
		me._text_112.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_112.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player.getVariableValue('hidros') == 22))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._text_112.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._text_112.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._text_112__text.style[domTransition]='color 500ms ease 0ms';
				if (me._text_112.ggCurrentLogicStateTextColor == 0) {
					me._text_112__text.style.color="rgba(58,165,167,1)";
				}
				else {
					me._text_112__text.style.color="rgba(130,130,130,1)";
				}
			}
		}
		me._text_112.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((58-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._x22.appendChild(me._text_112);
		el=me._rectangle_39=document.createElement('div');
		el.ggId="Rectangle 3";
		el.ggDx=-1;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 50px;';
		hs+='border-radius : 50px;';
		hs+='border : 1px solid #bbbbbb;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 47px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_39.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_39.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((player.getVariableValue('hidros') == 22))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._rectangle_39.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._rectangle_39.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._rectangle_39.style[domTransition]='border-color 500ms ease 0ms';
				if (me._rectangle_39.ggCurrentLogicStateBorderColor == 0) {
					me._rectangle_39.style.borderColor="rgba(58,165,167,1)";
				}
				else {
					me._rectangle_39.style.borderColor="rgba(187,187,187,1)";
				}
			}
		}
		me._rectangle_39.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._x22.appendChild(me._rectangle_39);
		me._hidros0.appendChild(me._x22);
		me._configurador.appendChild(me._hidros0);
		el=me._luces0=document.createElement('div');
		el.ggId="luces";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0,sy:0 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 60px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._luces0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._luces0.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('configurador') == "luces"))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._luces0.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._luces0.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._luces0.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms';
				if (me._luces0.ggCurrentLogicStateScaling == 0) {
					me._luces0.ggParameter.sx = 1;
					me._luces0.ggParameter.sy = 1;
					me._luces0.style[domTransform]=parameterToTransform(me._luces0.ggParameter);
				}
				else {
					me._luces0.ggParameter.sx = 0;
					me._luces0.ggParameter.sy = 0;
					me._luces0.style[domTransform]=parameterToTransform(me._luces0.ggParameter);
				}
			}
		}
		me._luces0.onclick=function (e) {
			player.setVariableValue('Prendido', false);
		}
		me._luces0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._no2=document.createElement('div');
		el.ggId="no";
		el.ggDx=-120;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.00392157);';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._no2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._no2.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseDown['no2'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._no2.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._no2.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._no2.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms';
				if (me._no2.ggCurrentLogicStateScaling == 0) {
					me._no2.ggParameter.sx = 0.9;
					me._no2.ggParameter.sy = 0.9;
					me._no2.style[domTransform]=parameterToTransform(me._no2.ggParameter);
				}
				else {
					me._no2.ggParameter.sx = 1;
					me._no2.ggParameter.sy = 1;
					me._no2.style[domTransform]=parameterToTransform(me._no2.ggParameter);
				}
			}
		}
		me._no2.onclick=function (e) {
			player.setVariableValue('luces', Number("0"));
		}
		me._no2.onmouseout=function (e) {
			me.elementMouseDown['no2']=false;
			me._no2.logicBlock_scaling();
		}
		me._no2.onmousedown=function (e) {
			me.elementMouseDown['no2']=true;
			me._no2.logicBlock_scaling();
		}
		me._no2.onmouseup=function (e) {
			me.elementMouseDown['no2']=false;
			me._no2.logicBlock_scaling();
		}
		me._no2.ontouchend=function (e) {
			me.elementMouseDown['no2']=false;
			me._no2.logicBlock_scaling();
		}
		me._no2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._rectangle_38=document.createElement('div');
		el.ggId="Rectangle 3";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 50px;';
		hs+='border-radius : 50px;';
		hs+='border : 1px solid #bbbbbb;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_38.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_38.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((player.getVariableValue('luces') == 0))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._rectangle_38.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._rectangle_38.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._rectangle_38.style[domTransition]='border-color 500ms ease 0ms';
				if (me._rectangle_38.ggCurrentLogicStateBorderColor == 0) {
					me._rectangle_38.style.borderColor="rgba(58,165,167,1)";
				}
				else {
					me._rectangle_38.style.borderColor="rgba(187,187,187,1)";
				}
			}
		}
		me._rectangle_38.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._no2.appendChild(me._rectangle_38);
		el=me._svg_12=document.createElement('div');
		els=me._svg_12__img=document.createElement('img');
		els.className='ggskin ggskin_svg_12';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAACdUlEQVRoge2aTW7bMBCF38zGvULPQ1mI7S5i9wqJD9XmCk2ySWxQ4lmyq69QbzhZ1AIMxfyRRNW0m7cRoJ/h+zgaSiJFdV1/E5EfRLS31t6VZWlwAdJaK2Z+EJEJEa2pqqrfAL4eju+J6LYoiu05TYZU1/WNiDwDmBx27ZiI9kfnTETkua7rmzP4i9IJCAD4w9baOwAXAeOA2IvIPflOyOk2C3lkACiKYktEt8g0M8aYWaij6fiCHDNjjJlZa59Cnqh9YU4wsRDACRAgD5guEIADpE+glOrTthOkb8Ch6tsm+4IqpTbMvMSJ0cwYMxtm+aO01vO+HefNSCNXLzHzUim16W75o7TWcyJ6bLcRm/0oEGBcmKEQQAcQYByYFBBAoEbaUkptRGSFVs1Ya5'+
			'/61IwLgpmXXQeTThkJGRCRVVmWrzExqqpaAPjVjtE3u71AgGEwqSGAASBAP5gxIICBIEA3mLEggI7FfkoHs9/RGgCI6FFrPW92uCBEZJXiWTQ4I418RomIXMdiB4eQkoEAbpjDdjQIIDEI4IQ5VnIIYAQQwAszCgSQoNhz0eetdUrnLPZkt5Zv+EXEc2aokmTEB9H0esw5QzQ4I4deDRqcTqcvcGQmxWfz50vjVbzG+77sYo2kiHGsziApDaSM1anYjTGzlL1YluVrqjmA/2s66Com6P4FRKitGBhvjfgCp4YA/HPNoZWz615WOCdEXw/XufSWE0SjzouhOUI0ioFhIG8I4O9oFvoPgLTWiohekCnEsTy/cCyYmR/aB3KEANx/aBDRTxaRi4Bo5ID5wkS0BrAD8CYii5whGhVFsRWRBYA3ADsiWr8DrQfrTgBVQUUA'+
			'AAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='height : 25px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_12.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_12.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._no2.appendChild(me._svg_12);
		el=me._svg_52=document.createElement('div');
		els=me._svg_52__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJz8+Cjxzdmcgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyLjAwMSA1MTIuMDAxOyIgeT0iMHB4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjUxMnB4IiBpZD0iQ2FwYV8xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB2aWV3Qm94PSIwIDAgNTEyLjAwMSA1MTIuMDAxIiB4bWw6c3BhY2U9InByZXNlcnZlIiBoZWlnaHQ9IjUxMnB4Ij4KIDxnPgogIDxnPgogICA8Zz4KICAgIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgY2xhc3M9ImFjdGl2ZS'+
			'1wYXRoIiBkPSJNMjg0LjI4NiwyNTYuMDAyTDUwNi4xNDMsMzQuMTQ0YzcuODExLTcuODExLDcuODExLTIwLjQ3NSwwLTI4LjI4NWMtNy44MTEtNy44MS0yMC40NzUtNy44MTEtMjguMjg1LDBMMjU2LDIyNy43MTcgICAgTDM0LjE0Myw1Ljg1OWMtNy44MTEtNy44MTEtMjAuNDc1LTcuODExLTI4LjI4NSwwYy03LjgxLDcuODExLTcuODExLDIwLjQ3NSwwLDI4LjI4NWwyMjEuODU3LDIyMS44NTdMNS44NTgsNDc3Ljg1OSAgICBjLTcuODExLDcuODExLTcuODExLDIwLjQ3NSwwLDI4LjI4NWMzLjkwNSwzLjkwNSw5LjAyNCw1Ljg1NywxNC4xNDMsNS44NTdjNS4xMTksMCwxMC4yMzctMS45NTIsMTQu'+
			'MTQzLTUuODU3TDI1NiwyODQuMjg3ICAgIGwyMjEuODU3LDIyMS44NTdjMy45MDUsMy45MDUsOS4wMjQsNS44NTcsMTQuMTQzLDUuODU3czEwLjIzNy0xLjk1MiwxNC4xNDMtNS44NTdjNy44MTEtNy44MTEsNy44MTEtMjAuNDc1LDAtMjguMjg1ICAgIEwyODQuMjg2LDI1Ni4wMDJ6IiBmaWxsPSIjM2FhNWE3IiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIvPgogICA8L2c+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._svg_52__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 5";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 25px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_52.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_52.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('luces') == 0))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._svg_52.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._svg_52.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._svg_52.style[domTransition]='opacity 500ms ease 0ms';
				if (me._svg_52.ggCurrentLogicStateAlpha == 0) {
					me._svg_52.style.visibility=me._svg_52.ggVisible?'inherit':'hidden';
					me._svg_52.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._svg_52.style.opacity == 0.0) { me._svg_52.style.visibility="hidden"; } }, 505);
					me._svg_52.style.opacity=0;
				}
			}
		}
		me._svg_52.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._no2.appendChild(me._svg_52);
		me._luces0.appendChild(me._no2);
		el=me.__2=document.createElement('div');
		el.ggId="2";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.00392157);';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__2.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseDown['_2'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__2.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__2.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__2.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms';
				if (me.__2.ggCurrentLogicStateScaling == 0) {
					me.__2.ggParameter.sx = 0.9;
					me.__2.ggParameter.sy = 0.9;
					me.__2.style[domTransform]=parameterToTransform(me.__2.ggParameter);
				}
				else {
					me.__2.ggParameter.sx = 1;
					me.__2.ggParameter.sy = 1;
					me.__2.style[domTransform]=parameterToTransform(me.__2.ggParameter);
				}
			}
		}
		me.__2.onclick=function (e) {
			player.setVariableValue('luces', Number("2"));
		}
		me.__2.onmouseout=function (e) {
			me.elementMouseDown['_2']=false;
			me.__2.logicBlock_scaling();
		}
		me.__2.onmousedown=function (e) {
			me.elementMouseDown['_2']=true;
			me.__2.logicBlock_scaling();
		}
		me.__2.onmouseup=function (e) {
			me.elementMouseDown['_2']=false;
			me.__2.logicBlock_scaling();
		}
		me.__2.ontouchend=function (e) {
			me.elementMouseDown['_2']=false;
			me.__2.logicBlock_scaling();
		}
		me.__2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._text_111=document.createElement('div');
		els=me._text_111__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1";
		el.ggDx=0;
		el.ggDy=-1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(130,130,130,1);';
		hs+='font-size: 18px;';
		hs+='font-weight: lighter;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="X2";
		el.appendChild(els);
		me._text_111.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_111.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player.getVariableValue('luces') == 2))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._text_111.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._text_111.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._text_111__text.style[domTransition]='color 500ms ease 0ms';
				if (me._text_111.ggCurrentLogicStateTextColor == 0) {
					me._text_111__text.style.color="rgba(58,165,167,1)";
				}
				else {
					me._text_111__text.style.color="rgba(130,130,130,1)";
				}
			}
		}
		me._text_111.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((58-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me.__2.appendChild(me._text_111);
		el=me._rectangle_37=document.createElement('div');
		el.ggId="Rectangle 3";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 50px;';
		hs+='border-radius : 50px;';
		hs+='border : 1px solid #bbbbbb;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_37.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_37.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((player.getVariableValue('luces') == 2))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._rectangle_37.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._rectangle_37.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._rectangle_37.style[domTransition]='border-color 500ms ease 0ms';
				if (me._rectangle_37.ggCurrentLogicStateBorderColor == 0) {
					me._rectangle_37.style.borderColor="rgba(58,165,167,1)";
				}
				else {
					me._rectangle_37.style.borderColor="rgba(187,187,187,1)";
				}
			}
		}
		me._rectangle_37.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me.__2.appendChild(me._rectangle_37);
		me._luces0.appendChild(me.__2);
		el=me.__4=document.createElement('div');
		el.ggId="4";
		el.ggDx=40;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.00392157);';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__4.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseDown['_4'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__4.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__4.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__4.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms';
				if (me.__4.ggCurrentLogicStateScaling == 0) {
					me.__4.ggParameter.sx = 0.9;
					me.__4.ggParameter.sy = 0.9;
					me.__4.style[domTransform]=parameterToTransform(me.__4.ggParameter);
				}
				else {
					me.__4.ggParameter.sx = 1;
					me.__4.ggParameter.sy = 1;
					me.__4.style[domTransform]=parameterToTransform(me.__4.ggParameter);
				}
			}
		}
		me.__4.onclick=function (e) {
			player.setVariableValue('luces', Number("4"));
		}
		me.__4.onmouseout=function (e) {
			me.elementMouseDown['_4']=false;
			me.__4.logicBlock_scaling();
		}
		me.__4.onmousedown=function (e) {
			me.elementMouseDown['_4']=true;
			me.__4.logicBlock_scaling();
		}
		me.__4.onmouseup=function (e) {
			me.elementMouseDown['_4']=false;
			me.__4.logicBlock_scaling();
		}
		me.__4.ontouchend=function (e) {
			me.elementMouseDown['_4']=false;
			me.__4.logicBlock_scaling();
		}
		me.__4.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._text_110=document.createElement('div');
		els=me._text_110__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1";
		el.ggDx=0;
		el.ggDy=-1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(130,130,130,1);';
		hs+='font-size: 18px;';
		hs+='font-weight: lighter;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="X4";
		el.appendChild(els);
		me._text_110.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_110.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player.getVariableValue('luces') == 4))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._text_110.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._text_110.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._text_110__text.style[domTransition]='color 500ms ease 0ms';
				if (me._text_110.ggCurrentLogicStateTextColor == 0) {
					me._text_110__text.style.color="rgba(58,165,167,1)";
				}
				else {
					me._text_110__text.style.color="rgba(130,130,130,1)";
				}
			}
		}
		me._text_110.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((58-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me.__4.appendChild(me._text_110);
		el=me._rectangle_36=document.createElement('div');
		el.ggId="Rectangle 3";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 50px;';
		hs+='border-radius : 50px;';
		hs+='border : 1px solid #bbbbbb;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_36.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_36.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((player.getVariableValue('luces') == 4))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._rectangle_36.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._rectangle_36.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._rectangle_36.style[domTransition]='border-color 500ms ease 0ms';
				if (me._rectangle_36.ggCurrentLogicStateBorderColor == 0) {
					me._rectangle_36.style.borderColor="rgba(58,165,167,1)";
				}
				else {
					me._rectangle_36.style.borderColor="rgba(187,187,187,1)";
				}
			}
		}
		me._rectangle_36.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me.__4.appendChild(me._rectangle_36);
		me._luces0.appendChild(me.__4);
		el=me._on0=document.createElement('div');
		el.ggId="on";
		el.ggDx=120;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.00392157);';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._on0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._on0.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseDown['on0'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._on0.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._on0.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._on0.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms';
				if (me._on0.ggCurrentLogicStateScaling == 0) {
					me._on0.ggParameter.sx = 0.9;
					me._on0.ggParameter.sy = 0.9;
					me._on0.style[domTransform]=parameterToTransform(me._on0.ggParameter);
				}
				else {
					me._on0.ggParameter.sx = 1;
					me._on0.ggParameter.sy = 1;
					me._on0.style[domTransform]=parameterToTransform(me._on0.ggParameter);
				}
			}
		}
		me._on0.onclick=function (e) {
			player.setVariableValue('luceson', !player.getVariableValue('luceson'));
		}
		me._on0.onmouseout=function (e) {
			me.elementMouseDown['on0']=false;
			me._on0.logicBlock_scaling();
		}
		me._on0.onmousedown=function (e) {
			me.elementMouseDown['on0']=true;
			me._on0.logicBlock_scaling();
		}
		me._on0.onmouseup=function (e) {
			me.elementMouseDown['on0']=false;
			me._on0.logicBlock_scaling();
		}
		me._on0.ontouchend=function (e) {
			me.elementMouseDown['on0']=false;
			me._on0.logicBlock_scaling();
		}
		me._on0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._rectangle_35=document.createElement('div');
		el.ggId="Rectangle 3";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 50px;';
		hs+='border-radius : 50px;';
		hs+='border : 1px solid #bbbbbb;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_35.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_35.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((player.getVariableValue('luces') == 4))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._rectangle_35.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._rectangle_35.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._rectangle_35.style[domTransition]='border-color 500ms ease 0ms';
				if (me._rectangle_35.ggCurrentLogicStateBorderColor == 0) {
					me._rectangle_35.style.borderColor="rgba(58,165,167,1)";
				}
				else {
					me._rectangle_35.style.borderColor="rgba(187,187,187,1)";
				}
			}
		}
		me._rectangle_35.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._off0=document.createElement('div');
		els=me._off0__img=document.createElement('img');
		els.className='ggskin ggskin_off0';
		hs=basePath + 'images/off0.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="off";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 35px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.8;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._off0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._off0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('luceson') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._off0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._off0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._off0.style[domTransition]='';
				if (me._off0.ggCurrentLogicStateVisible == 0) {
					me._off0.style.visibility=(Number(me._off0.style.opacity)>0||!me._off0.style.opacity)?'inherit':'hidden';
					me._off0.ggVisible=true;
				}
				else {
					me._off0.style.visibility="hidden";
					me._off0.ggVisible=false;
				}
			}
		}
		me._off0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._rectangle_35.appendChild(me._off0);
		el=me._on1=document.createElement('div');
		els=me._on1__img=document.createElement('img');
		els.className='ggskin ggskin_on1';
		hs=basePath + 'images/on1.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="on";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 35px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.8;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._on1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._on1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('luceson') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._on1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._on1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._on1.style[domTransition]='';
				if (me._on1.ggCurrentLogicStateVisible == 0) {
					me._on1.style.visibility=(Number(me._on1.style.opacity)>0||!me._on1.style.opacity)?'inherit':'hidden';
					me._on1.ggVisible=true;
				}
				else {
					me._on1.style.visibility="hidden";
					me._on1.ggVisible=false;
				}
			}
		}
		me._on1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._rectangle_35.appendChild(me._on1);
		me._on0.appendChild(me._rectangle_35);
		me._luces0.appendChild(me._on0);
		me._configurador.appendChild(me._luces0);
		el=me._blower0=document.createElement('div');
		el.ggId="blower";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0,sy:0 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 60px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._blower0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._blower0.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('configurador') == "blower"))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._blower0.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._blower0.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._blower0.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms';
				if (me._blower0.ggCurrentLogicStateScaling == 0) {
					me._blower0.ggParameter.sx = 1;
					me._blower0.ggParameter.sy = 1;
					me._blower0.style[domTransform]=parameterToTransform(me._blower0.ggParameter);
				}
				else {
					me._blower0.ggParameter.sx = 0;
					me._blower0.ggParameter.sy = 0;
					me._blower0.style[domTransform]=parameterToTransform(me._blower0.ggParameter);
				}
			}
		}
		me._blower0.onclick=function (e) {
			player.setVariableValue('Prendido', false);
		}
		me._blower0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._no1=document.createElement('div');
		el.ggId="no";
		el.ggDx=-40;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.00392157);';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._no1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._no1.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseDown['no1'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._no1.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._no1.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._no1.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms';
				if (me._no1.ggCurrentLogicStateScaling == 0) {
					me._no1.ggParameter.sx = 0.9;
					me._no1.ggParameter.sy = 0.9;
					me._no1.style[domTransform]=parameterToTransform(me._no1.ggParameter);
				}
				else {
					me._no1.ggParameter.sx = 1;
					me._no1.ggParameter.sy = 1;
					me._no1.style[domTransform]=parameterToTransform(me._no1.ggParameter);
				}
			}
		}
		me._no1.onclick=function (e) {
			player.setVariableValue('blower', false);
		}
		me._no1.onmouseout=function (e) {
			me.elementMouseDown['no1']=false;
			me._no1.logicBlock_scaling();
		}
		me._no1.onmousedown=function (e) {
			me.elementMouseDown['no1']=true;
			me._no1.logicBlock_scaling();
		}
		me._no1.onmouseup=function (e) {
			me.elementMouseDown['no1']=false;
			me._no1.logicBlock_scaling();
		}
		me._no1.ontouchend=function (e) {
			me.elementMouseDown['no1']=false;
			me._no1.logicBlock_scaling();
		}
		me._no1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._rectangle_34=document.createElement('div');
		el.ggId="Rectangle 3";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 50px;';
		hs+='border-radius : 50px;';
		hs+='border : 1px solid #bbbbbb;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_34.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_34.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((player.getVariableValue('blower') == false))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._rectangle_34.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._rectangle_34.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._rectangle_34.style[domTransition]='border-color 500ms ease 0ms';
				if (me._rectangle_34.ggCurrentLogicStateBorderColor == 0) {
					me._rectangle_34.style.borderColor="rgba(58,165,167,1)";
				}
				else {
					me._rectangle_34.style.borderColor="rgba(187,187,187,1)";
				}
			}
		}
		me._rectangle_34.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._no1.appendChild(me._rectangle_34);
		el=me._svg_11=document.createElement('div');
		els=me._svg_11__img=document.createElement('img');
		els.className='ggskin ggskin_svg_11';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAACdUlEQVRoge2aTW7bMBCF38zGvULPQ1mI7S5i9wqJD9XmCk2ySWxQ4lmyq69QbzhZ1AIMxfyRRNW0m7cRoJ/h+zgaSiJFdV1/E5EfRLS31t6VZWlwAdJaK2Z+EJEJEa2pqqrfAL4eju+J6LYoiu05TYZU1/WNiDwDmBx27ZiI9kfnTETkua7rmzP4i9IJCAD4w9baOwAXAeOA2IvIPflOyOk2C3lkACiKYktEt8g0M8aYWaij6fiCHDNjjJlZa59Cnqh9YU4wsRDACRAgD5guEIADpE+glOrTthOkb8Ch6tsm+4IqpTbMvMSJ0cwYMxtm+aO01vO+HefNSCNXLzHzUim16W75o7TWcyJ6bLcRm/0oEGBcmKEQQAcQYByYFBBAoEbaUkptRGSFVs1Ya5'+
			'/61IwLgpmXXQeTThkJGRCRVVmWrzExqqpaAPjVjtE3u71AgGEwqSGAASBAP5gxIICBIEA3mLEggI7FfkoHs9/RGgCI6FFrPW92uCBEZJXiWTQ4I418RomIXMdiB4eQkoEAbpjDdjQIIDEI4IQ5VnIIYAQQwAszCgSQoNhz0eetdUrnLPZkt5Zv+EXEc2aokmTEB9H0esw5QzQ4I4deDRqcTqcvcGQmxWfz50vjVbzG+77sYo2kiHGsziApDaSM1anYjTGzlL1YluVrqjmA/2s66Com6P4FRKitGBhvjfgCp4YA/HPNoZWz615WOCdEXw/XufSWE0SjzouhOUI0ioFhIG8I4O9oFvoPgLTWiohekCnEsTy/cCyYmR/aB3KEANx/aBDRTxaRi4Bo5ID5wkS0BrAD8CYii5whGhVFsRWRBYA3ADsiWr8DrQfrTgBVQUUA'+
			'AAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='height : 25px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_11.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._no1.appendChild(me._svg_11);
		el=me._svg_51=document.createElement('div');
		els=me._svg_51__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJz8+Cjxzdmcgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyLjAwMSA1MTIuMDAxOyIgeT0iMHB4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjUxMnB4IiBpZD0iQ2FwYV8xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB2aWV3Qm94PSIwIDAgNTEyLjAwMSA1MTIuMDAxIiB4bWw6c3BhY2U9InByZXNlcnZlIiBoZWlnaHQ9IjUxMnB4Ij4KIDxnPgogIDxnPgogICA8Zz4KICAgIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgY2xhc3M9ImFjdGl2ZS'+
			'1wYXRoIiBkPSJNMjg0LjI4NiwyNTYuMDAyTDUwNi4xNDMsMzQuMTQ0YzcuODExLTcuODExLDcuODExLTIwLjQ3NSwwLTI4LjI4NWMtNy44MTEtNy44MS0yMC40NzUtNy44MTEtMjguMjg1LDBMMjU2LDIyNy43MTcgICAgTDM0LjE0Myw1Ljg1OWMtNy44MTEtNy44MTEtMjAuNDc1LTcuODExLTI4LjI4NSwwYy03LjgxLDcuODExLTcuODExLDIwLjQ3NSwwLDI4LjI4NWwyMjEuODU3LDIyMS44NTdMNS44NTgsNDc3Ljg1OSAgICBjLTcuODExLDcuODExLTcuODExLDIwLjQ3NSwwLDI4LjI4NWMzLjkwNSwzLjkwNSw5LjAyNCw1Ljg1NywxNC4xNDMsNS44NTdjNS4xMTksMCwxMC4yMzctMS45NTIsMTQu'+
			'MTQzLTUuODU3TDI1NiwyODQuMjg3ICAgIGwyMjEuODU3LDIyMS44NTdjMy45MDUsMy45MDUsOS4wMjQsNS44NTcsMTQuMTQzLDUuODU3czEwLjIzNy0xLjk1MiwxNC4xNDMtNS44NTdjNy44MTEtNy44MTEsNy44MTEtMjAuNDc1LDAtMjguMjg1ICAgIEwyODQuMjg2LDI1Ni4wMDJ6IiBmaWxsPSIjM2FhNWE3IiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIvPgogICA8L2c+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._svg_51__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 5";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 25px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_51.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_51.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('blower') == false))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._svg_51.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._svg_51.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._svg_51.style[domTransition]='opacity 500ms ease 0ms';
				if (me._svg_51.ggCurrentLogicStateAlpha == 0) {
					me._svg_51.style.visibility=me._svg_51.ggVisible?'inherit':'hidden';
					me._svg_51.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._svg_51.style.opacity == 0.0) { me._svg_51.style.visibility="hidden"; } }, 505);
					me._svg_51.style.opacity=0;
				}
			}
		}
		me._svg_51.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._no1.appendChild(me._svg_51);
		me._blower0.appendChild(me._no1);
		el=me._si1=document.createElement('div');
		el.ggId="si";
		el.ggDx=40;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.00392157);';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._si1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._si1.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseDown['si1'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._si1.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._si1.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._si1.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms';
				if (me._si1.ggCurrentLogicStateScaling == 0) {
					me._si1.ggParameter.sx = 0.9;
					me._si1.ggParameter.sy = 0.9;
					me._si1.style[domTransform]=parameterToTransform(me._si1.ggParameter);
				}
				else {
					me._si1.ggParameter.sx = 1;
					me._si1.ggParameter.sy = 1;
					me._si1.style[domTransform]=parameterToTransform(me._si1.ggParameter);
				}
			}
		}
		me._si1.onclick=function (e) {
			player.setVariableValue('blower', true);
		}
		me._si1.onmouseout=function (e) {
			me.elementMouseDown['si1']=false;
			me._si1.logicBlock_scaling();
		}
		me._si1.onmousedown=function (e) {
			me.elementMouseDown['si1']=true;
			me._si1.logicBlock_scaling();
		}
		me._si1.onmouseup=function (e) {
			me.elementMouseDown['si1']=false;
			me._si1.logicBlock_scaling();
		}
		me._si1.ontouchend=function (e) {
			me.elementMouseDown['si1']=false;
			me._si1.logicBlock_scaling();
		}
		me._si1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._rectangle_33=document.createElement('div');
		el.ggId="Rectangle 3";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 50px;';
		hs+='border-radius : 50px;';
		hs+='border : 1px solid #bbbbbb;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_33.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_33.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((player.getVariableValue('blower') == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._rectangle_33.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._rectangle_33.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._rectangle_33.style[domTransition]='border-color 500ms ease 0ms';
				if (me._rectangle_33.ggCurrentLogicStateBorderColor == 0) {
					me._rectangle_33.style.borderColor="rgba(58,165,167,1)";
				}
				else {
					me._rectangle_33.style.borderColor="rgba(187,187,187,1)";
				}
			}
		}
		me._rectangle_33.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._si1.appendChild(me._rectangle_33);
		el=me._svg_21=document.createElement('div');
		els=me._svg_21__img=document.createElement('img');
		els.className='ggskin ggskin_svg_21';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAACaElEQVRoge3YP4sTQRjH8e9uBN2ASNL5Pha0mDRqyBvQiJzeaWthq1ZLGm2sbEXkolZ2ezaSdBkWfClWQSQJGMxjcSnCkexNsrvZ2TA/SDMzhPkwy/x5wMXFxcXFxaWseGVPoKgkSRJMp9O3wPGyqV+r1V7VypxUUYnjuA58F5FHQLD83RaR4OBWOI7jer1ePxORO2u6f/l7n1GBuQQL8O9gwAZYROTjQXzSJlggbjQa9yu/wqbY8Xj8IAzDeaVXeBtst9v9CxU+h3fBAlTyHE6SJOD8nN0KCxVc4eUNaicsVAycFQsVAueBhYqA88JCBcB5YsFycN5YsBhcBBYsBReFBQvBRWIBrmSYW+5JkiSYTCZnQCFYsGiFV7B3U4ZlwoIl4H1hAbwoinyl1A'+
			'vgZNl2qrV+3+v1Fln+2DT7xAJ4w+HwtYi8udD+VWt9XDR631gAf7FYPF/TfqSU6kdRVFhFpAwsgO953rUNfYWhy8IC+MC3lP7c0WViAfwgCF4CP1PGHLVardM80GVjAXyl1B+gQwpaRB5nRS+xMSViYeUcHgwGN4AfwK2Ngz3vy2g0Otl2917B3ksZVjgWLlw8TNDAZ631U1O0TVhYc9PKE20bFjZcLfNA24iFlLt0FrStWDg/h9em3W7/5pLdG3iilPq0unvbjAWD15LhSve11s86nc5Vm7Fg+Dw0/byBm1iMhS3ew4botJSOhS0LABnQVmBhh4rHDmhrsLBjiWcLtFVYyFDTMkBbh4WMRbwUtJVYyKFqqbW+PpvN3gEPgbmIfGg2m1EYhvPs07M4ImJFydfFxcXFxaVC+Q/eH2tlvEdSuAAAAABJRU5ErkJggg=='+
			'';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='height : 30px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_21.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_21.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._si1.appendChild(me._svg_21);
		el=me._svg_31=document.createElement('div');
		els=me._svg_31__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJz8+Cjxzdmcgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHk9IjBweCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MTJweCIgaWQ9IkxheWVyXzEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIiBoZWlnaHQ9IjUxMnB4Ij4KIDxnPgogIDxnPgogICA8Zz4KICAgIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkPSJNNTA0Lj'+
			'UwMiw3NS40OTZjLTkuOTk3LTkuOTk4LTI2LjIwNS05Ljk5OC0zNi4yMDQsMEwxNjEuNTk0LDM4Mi4yMDNMNDMuNzAyLDI2NC4zMTFjLTkuOTk3LTkuOTk4LTI2LjIwNS05Ljk5Ny0zNi4yMDQsMCAgICBjLTkuOTk4LDkuOTk3LTkuOTk4LDI2LjIwNSwwLDM2LjIwM2wxMzUuOTk0LDEzNS45OTJjOS45OTQsOS45OTcsMjYuMjE0LDkuOTksMzYuMjA0LDBMNTA0LjUwMiwxMTEuNyAgICBDNTE0LjUsMTAxLjcwMyw1MTQuNDk5LDg1LjQ5NCw1MDQuNTAyLDc1LjQ5NnoiIGZpbGw9IiMzYWE1YTciIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIi8+CiAgIDwvZz4K'+
			'ICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._svg_31__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 3";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 30px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_31.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_31.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('blower') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._svg_31.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._svg_31.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._svg_31.style[domTransition]='opacity 500ms ease 0ms';
				if (me._svg_31.ggCurrentLogicStateAlpha == 0) {
					me._svg_31.style.visibility=me._svg_31.ggVisible?'inherit':'hidden';
					me._svg_31.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._svg_31.style.opacity == 0.0) { me._svg_31.style.visibility="hidden"; } }, 505);
					me._svg_31.style.opacity=0;
				}
			}
		}
		me._svg_31.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._si1.appendChild(me._svg_31);
		me._blower0.appendChild(me._si1);
		me._configurador.appendChild(me._blower0);
		el=me._cabeceros0=document.createElement('div');
		el.ggId="cabeceros";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0,sy:0 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 60px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._cabeceros0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._cabeceros0.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('configurador') == "cabeceros"))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._cabeceros0.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._cabeceros0.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._cabeceros0.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms';
				if (me._cabeceros0.ggCurrentLogicStateScaling == 0) {
					me._cabeceros0.ggParameter.sx = 1;
					me._cabeceros0.ggParameter.sy = 1;
					me._cabeceros0.style[domTransform]=parameterToTransform(me._cabeceros0.ggParameter);
				}
				else {
					me._cabeceros0.ggParameter.sx = 0;
					me._cabeceros0.ggParameter.sy = 0;
					me._cabeceros0.style[domTransform]=parameterToTransform(me._cabeceros0.ggParameter);
				}
			}
		}
		me._cabeceros0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._no0=document.createElement('div');
		el.ggId="no";
		el.ggDx=-40;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.00392157);';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._no0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._no0.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseDown['no0'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._no0.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._no0.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._no0.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms';
				if (me._no0.ggCurrentLogicStateScaling == 0) {
					me._no0.ggParameter.sx = 0.9;
					me._no0.ggParameter.sy = 0.9;
					me._no0.style[domTransform]=parameterToTransform(me._no0.ggParameter);
				}
				else {
					me._no0.ggParameter.sx = 1;
					me._no0.ggParameter.sy = 1;
					me._no0.style[domTransform]=parameterToTransform(me._no0.ggParameter);
				}
			}
		}
		me._no0.onclick=function (e) {
			player.setVariableValue('cabeceros', false);
		}
		me._no0.onmouseout=function (e) {
			me.elementMouseDown['no0']=false;
			me._no0.logicBlock_scaling();
		}
		me._no0.onmousedown=function (e) {
			me.elementMouseDown['no0']=true;
			me._no0.logicBlock_scaling();
		}
		me._no0.onmouseup=function (e) {
			me.elementMouseDown['no0']=false;
			me._no0.logicBlock_scaling();
		}
		me._no0.ontouchend=function (e) {
			me.elementMouseDown['no0']=false;
			me._no0.logicBlock_scaling();
		}
		me._no0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._rectangle_32=document.createElement('div');
		el.ggId="Rectangle 3";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 50px;';
		hs+='border-radius : 50px;';
		hs+='border : 1px solid #bbbbbb;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_32.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_32.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((player.getVariableValue('cabeceros') == false))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._rectangle_32.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._rectangle_32.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._rectangle_32.style[domTransition]='border-color 500ms ease 0ms';
				if (me._rectangle_32.ggCurrentLogicStateBorderColor == 0) {
					me._rectangle_32.style.borderColor="rgba(58,165,167,1)";
				}
				else {
					me._rectangle_32.style.borderColor="rgba(187,187,187,1)";
				}
			}
		}
		me._rectangle_32.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._no0.appendChild(me._rectangle_32);
		el=me._svg_10=document.createElement('div');
		els=me._svg_10__img=document.createElement('img');
		els.className='ggskin ggskin_svg_10';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAACdUlEQVRoge2aTW7bMBCF38zGvULPQ1mI7S5i9wqJD9XmCk2ySWxQ4lmyq69QbzhZ1AIMxfyRRNW0m7cRoJ/h+zgaSiJFdV1/E5EfRLS31t6VZWlwAdJaK2Z+EJEJEa2pqqrfAL4eju+J6LYoiu05TYZU1/WNiDwDmBx27ZiI9kfnTETkua7rmzP4i9IJCAD4w9baOwAXAeOA2IvIPflOyOk2C3lkACiKYktEt8g0M8aYWaij6fiCHDNjjJlZa59Cnqh9YU4wsRDACRAgD5guEIADpE+glOrTthOkb8Ch6tsm+4IqpTbMvMSJ0cwYMxtm+aO01vO+HefNSCNXLzHzUim16W75o7TWcyJ6bLcRm/0oEGBcmKEQQAcQYByYFBBAoEbaUkptRGSFVs1Ya5'+
			'/61IwLgpmXXQeTThkJGRCRVVmWrzExqqpaAPjVjtE3u71AgGEwqSGAASBAP5gxIICBIEA3mLEggI7FfkoHs9/RGgCI6FFrPW92uCBEZJXiWTQ4I418RomIXMdiB4eQkoEAbpjDdjQIIDEI4IQ5VnIIYAQQwAszCgSQoNhz0eetdUrnLPZkt5Zv+EXEc2aokmTEB9H0esw5QzQ4I4deDRqcTqcvcGQmxWfz50vjVbzG+77sYo2kiHGsziApDaSM1anYjTGzlL1YluVrqjmA/2s66Com6P4FRKitGBhvjfgCp4YA/HPNoZWz615WOCdEXw/XufSWE0SjzouhOUI0ioFhIG8I4O9oFvoPgLTWiohekCnEsTy/cCyYmR/aB3KEANx/aBDRTxaRi4Bo5ID5wkS0BrAD8CYii5whGhVFsRWRBYA3ADsiWr8DrQfrTgBVQUUA'+
			'AAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='height : 25px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_10.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._no0.appendChild(me._svg_10);
		el=me._svg_50=document.createElement('div');
		els=me._svg_50__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJz8+Cjxzdmcgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyLjAwMSA1MTIuMDAxOyIgeT0iMHB4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjUxMnB4IiBpZD0iQ2FwYV8xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB2aWV3Qm94PSIwIDAgNTEyLjAwMSA1MTIuMDAxIiB4bWw6c3BhY2U9InByZXNlcnZlIiBoZWlnaHQ9IjUxMnB4Ij4KIDxnPgogIDxnPgogICA8Zz4KICAgIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgY2xhc3M9ImFjdGl2ZS'+
			'1wYXRoIiBkPSJNMjg0LjI4NiwyNTYuMDAyTDUwNi4xNDMsMzQuMTQ0YzcuODExLTcuODExLDcuODExLTIwLjQ3NSwwLTI4LjI4NWMtNy44MTEtNy44MS0yMC40NzUtNy44MTEtMjguMjg1LDBMMjU2LDIyNy43MTcgICAgTDM0LjE0Myw1Ljg1OWMtNy44MTEtNy44MTEtMjAuNDc1LTcuODExLTI4LjI4NSwwYy03LjgxLDcuODExLTcuODExLDIwLjQ3NSwwLDI4LjI4NWwyMjEuODU3LDIyMS44NTdMNS44NTgsNDc3Ljg1OSAgICBjLTcuODExLDcuODExLTcuODExLDIwLjQ3NSwwLDI4LjI4NWMzLjkwNSwzLjkwNSw5LjAyNCw1Ljg1NywxNC4xNDMsNS44NTdjNS4xMTksMCwxMC4yMzctMS45NTIsMTQu'+
			'MTQzLTUuODU3TDI1NiwyODQuMjg3ICAgIGwyMjEuODU3LDIyMS44NTdjMy45MDUsMy45MDUsOS4wMjQsNS44NTcsMTQuMTQzLDUuODU3czEwLjIzNy0xLjk1MiwxNC4xNDMtNS44NTdjNy44MTEtNy44MTEsNy44MTEtMjAuNDc1LDAtMjguMjg1ICAgIEwyODQuMjg2LDI1Ni4wMDJ6IiBmaWxsPSIjM2FhNWE3IiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIvPgogICA8L2c+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._svg_50__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 5";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 25px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_50.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_50.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('cabeceros') == false))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._svg_50.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._svg_50.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._svg_50.style[domTransition]='opacity 500ms ease 0ms';
				if (me._svg_50.ggCurrentLogicStateAlpha == 0) {
					me._svg_50.style.visibility=me._svg_50.ggVisible?'inherit':'hidden';
					me._svg_50.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._svg_50.style.opacity == 0.0) { me._svg_50.style.visibility="hidden"; } }, 505);
					me._svg_50.style.opacity=0;
				}
			}
		}
		me._svg_50.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._no0.appendChild(me._svg_50);
		me._cabeceros0.appendChild(me._no0);
		el=me._si0=document.createElement('div');
		el.ggId="si";
		el.ggDx=40;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.00392157);';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._si0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._si0.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseDown['si0'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._si0.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._si0.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._si0.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms';
				if (me._si0.ggCurrentLogicStateScaling == 0) {
					me._si0.ggParameter.sx = 0.9;
					me._si0.ggParameter.sy = 0.9;
					me._si0.style[domTransform]=parameterToTransform(me._si0.ggParameter);
				}
				else {
					me._si0.ggParameter.sx = 1;
					me._si0.ggParameter.sy = 1;
					me._si0.style[domTransform]=parameterToTransform(me._si0.ggParameter);
				}
			}
		}
		me._si0.onclick=function (e) {
			player.setVariableValue('cabeceros', true);
		}
		me._si0.onmouseout=function (e) {
			me.elementMouseDown['si0']=false;
			me._si0.logicBlock_scaling();
		}
		me._si0.onmousedown=function (e) {
			me.elementMouseDown['si0']=true;
			me._si0.logicBlock_scaling();
		}
		me._si0.onmouseup=function (e) {
			me.elementMouseDown['si0']=false;
			me._si0.logicBlock_scaling();
		}
		me._si0.ontouchend=function (e) {
			me.elementMouseDown['si0']=false;
			me._si0.logicBlock_scaling();
		}
		me._si0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._rectangle_31=document.createElement('div');
		el.ggId="Rectangle 3";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 50px;';
		hs+='border-radius : 50px;';
		hs+='border : 1px solid #bbbbbb;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_31.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_31.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((player.getVariableValue('cabeceros') == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._rectangle_31.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._rectangle_31.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._rectangle_31.style[domTransition]='border-color 500ms ease 0ms';
				if (me._rectangle_31.ggCurrentLogicStateBorderColor == 0) {
					me._rectangle_31.style.borderColor="rgba(58,165,167,1)";
				}
				else {
					me._rectangle_31.style.borderColor="rgba(187,187,187,1)";
				}
			}
		}
		me._rectangle_31.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._si0.appendChild(me._rectangle_31);
		el=me._svg_20=document.createElement('div');
		els=me._svg_20__img=document.createElement('img');
		els.className='ggskin ggskin_svg_20';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAACaElEQVRoge3YP4sTQRjH8e9uBN2ASNL5Pha0mDRqyBvQiJzeaWthq1ZLGm2sbEXkolZ2ezaSdBkWfClWQSQJGMxjcSnCkexNsrvZ2TA/SDMzhPkwy/x5wMXFxcXFxaWseGVPoKgkSRJMp9O3wPGyqV+r1V7VypxUUYnjuA58F5FHQLD83RaR4OBWOI7jer1ePxORO2u6f/l7n1GBuQQL8O9gwAZYROTjQXzSJlggbjQa9yu/wqbY8Xj8IAzDeaVXeBtst9v9CxU+h3fBAlTyHE6SJOD8nN0KCxVc4eUNaicsVAycFQsVAueBhYqA88JCBcB5YsFycN5YsBhcBBYsBReFBQvBRWIBrmSYW+5JkiSYTCZnQCFYsGiFV7B3U4ZlwoIl4H1hAbwoinyl1A'+
			'vgZNl2qrV+3+v1Fln+2DT7xAJ4w+HwtYi8udD+VWt9XDR631gAf7FYPF/TfqSU6kdRVFhFpAwsgO953rUNfYWhy8IC+MC3lP7c0WViAfwgCF4CP1PGHLVardM80GVjAXyl1B+gQwpaRB5nRS+xMSViYeUcHgwGN4AfwK2Ngz3vy2g0Otl2917B3ksZVjgWLlw8TNDAZ631U1O0TVhYc9PKE20bFjZcLfNA24iFlLt0FrStWDg/h9em3W7/5pLdG3iilPq0unvbjAWD15LhSve11s86nc5Vm7Fg+Dw0/byBm1iMhS3ew4botJSOhS0LABnQVmBhh4rHDmhrsLBjiWcLtFVYyFDTMkBbh4WMRbwUtJVYyKFqqbW+PpvN3gEPgbmIfGg2m1EYhvPs07M4ImJFydfFxcXFxaVC+Q/eH2tlvEdSuAAAAABJRU5ErkJggg=='+
			'';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='height : 30px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_20.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_20.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._si0.appendChild(me._svg_20);
		el=me._svg_30=document.createElement('div');
		els=me._svg_30__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJz8+Cjxzdmcgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHk9IjBweCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MTJweCIgaWQ9IkxheWVyXzEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIiBoZWlnaHQ9IjUxMnB4Ij4KIDxnPgogIDxnPgogICA8Zz4KICAgIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkPSJNNTA0Lj'+
			'UwMiw3NS40OTZjLTkuOTk3LTkuOTk4LTI2LjIwNS05Ljk5OC0zNi4yMDQsMEwxNjEuNTk0LDM4Mi4yMDNMNDMuNzAyLDI2NC4zMTFjLTkuOTk3LTkuOTk4LTI2LjIwNS05Ljk5Ny0zNi4yMDQsMCAgICBjLTkuOTk4LDkuOTk3LTkuOTk4LDI2LjIwNSwwLDM2LjIwM2wxMzUuOTk0LDEzNS45OTJjOS45OTQsOS45OTcsMjYuMjE0LDkuOTksMzYuMjA0LDBMNTA0LjUwMiwxMTEuNyAgICBDNTE0LjUsMTAxLjcwMyw1MTQuNDk5LDg1LjQ5NCw1MDQuNTAyLDc1LjQ5NnoiIGZpbGw9IiMzYWE1YTciIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIi8+CiAgIDwvZz4K'+
			'ICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._svg_30__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 3";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 30px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_30.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_30.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('cabeceros') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._svg_30.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._svg_30.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._svg_30.style[domTransition]='opacity 500ms ease 0ms';
				if (me._svg_30.ggCurrentLogicStateAlpha == 0) {
					me._svg_30.style.visibility=me._svg_30.ggVisible?'inherit':'hidden';
					me._svg_30.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._svg_30.style.opacity == 0.0) { me._svg_30.style.visibility="hidden"; } }, 505);
					me._svg_30.style.opacity=0;
				}
			}
		}
		me._svg_30.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._si0.appendChild(me._svg_30);
		me._cabeceros0.appendChild(me._si0);
		me._configurador.appendChild(me._cabeceros0);
		el=me._cascada0=document.createElement('div');
		el.ggId="cascada";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0,sy:0 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 60px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._cascada0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._cascada0.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('configurador') == "cascada"))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._cascada0.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._cascada0.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._cascada0.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms';
				if (me._cascada0.ggCurrentLogicStateScaling == 0) {
					me._cascada0.ggParameter.sx = 1;
					me._cascada0.ggParameter.sy = 1;
					me._cascada0.style[domTransform]=parameterToTransform(me._cascada0.ggParameter);
				}
				else {
					me._cascada0.ggParameter.sx = 0;
					me._cascada0.ggParameter.sy = 0;
					me._cascada0.style[domTransform]=parameterToTransform(me._cascada0.ggParameter);
				}
			}
		}
		me._cascada0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._no=document.createElement('div');
		el.ggId="no";
		el.ggDx=-40;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.00392157);';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._no.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._no.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseDown['no'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._no.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._no.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._no.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms';
				if (me._no.ggCurrentLogicStateScaling == 0) {
					me._no.ggParameter.sx = 0.9;
					me._no.ggParameter.sy = 0.9;
					me._no.style[domTransform]=parameterToTransform(me._no.ggParameter);
				}
				else {
					me._no.ggParameter.sx = 1;
					me._no.ggParameter.sy = 1;
					me._no.style[domTransform]=parameterToTransform(me._no.ggParameter);
				}
			}
		}
		me._no.onclick=function (e) {
			player.setVariableValue('cascada', false);
		}
		me._no.onmouseout=function (e) {
			me.elementMouseDown['no']=false;
			me._no.logicBlock_scaling();
		}
		me._no.onmousedown=function (e) {
			me.elementMouseDown['no']=true;
			me._no.logicBlock_scaling();
		}
		me._no.onmouseup=function (e) {
			me.elementMouseDown['no']=false;
			me._no.logicBlock_scaling();
		}
		me._no.ontouchend=function (e) {
			me.elementMouseDown['no']=false;
			me._no.logicBlock_scaling();
		}
		me._no.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._rectangle_30=document.createElement('div');
		el.ggId="Rectangle 3";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 50px;';
		hs+='border-radius : 50px;';
		hs+='border : 1px solid #bbbbbb;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_30.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_30.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((player.getVariableValue('cascada') == false))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._rectangle_30.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._rectangle_30.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._rectangle_30.style[domTransition]='border-color 500ms ease 0ms';
				if (me._rectangle_30.ggCurrentLogicStateBorderColor == 0) {
					me._rectangle_30.style.borderColor="rgba(58,165,167,1)";
				}
				else {
					me._rectangle_30.style.borderColor="rgba(187,187,187,1)";
				}
			}
		}
		me._rectangle_30.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._no.appendChild(me._rectangle_30);
		el=me._svg_1=document.createElement('div');
		els=me._svg_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg_1';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAACdUlEQVRoge2aTW7bMBCF38zGvULPQ1mI7S5i9wqJD9XmCk2ySWxQ4lmyq69QbzhZ1AIMxfyRRNW0m7cRoJ/h+zgaSiJFdV1/E5EfRLS31t6VZWlwAdJaK2Z+EJEJEa2pqqrfAL4eju+J6LYoiu05TYZU1/WNiDwDmBx27ZiI9kfnTETkua7rmzP4i9IJCAD4w9baOwAXAeOA2IvIPflOyOk2C3lkACiKYktEt8g0M8aYWaij6fiCHDNjjJlZa59Cnqh9YU4wsRDACRAgD5guEIADpE+glOrTthOkb8Ch6tsm+4IqpTbMvMSJ0cwYMxtm+aO01vO+HefNSCNXLzHzUim16W75o7TWcyJ6bLcRm/0oEGBcmKEQQAcQYByYFBBAoEbaUkptRGSFVs1Ya5'+
			'/61IwLgpmXXQeTThkJGRCRVVmWrzExqqpaAPjVjtE3u71AgGEwqSGAASBAP5gxIICBIEA3mLEggI7FfkoHs9/RGgCI6FFrPW92uCBEZJXiWTQ4I418RomIXMdiB4eQkoEAbpjDdjQIIDEI4IQ5VnIIYAQQwAszCgSQoNhz0eetdUrnLPZkt5Zv+EXEc2aokmTEB9H0esw5QzQ4I4deDRqcTqcvcGQmxWfz50vjVbzG+77sYo2kiHGsziApDaSM1anYjTGzlL1YluVrqjmA/2s66Com6P4FRKitGBhvjfgCp4YA/HPNoZWz615WOCdEXw/XufSWE0SjzouhOUI0ioFhIG8I4O9oFvoPgLTWiohekCnEsTy/cCyYmR/aB3KEANx/aBDRTxaRi4Bo5ID5wkS0BrAD8CYii5whGhVFsRWRBYA3ADsiWr8DrQfrTgBVQUUA'+
			'AAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='height : 25px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._no.appendChild(me._svg_1);
		el=me._svg_5=document.createElement('div');
		els=me._svg_5__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJz8+Cjxzdmcgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyLjAwMSA1MTIuMDAxOyIgeT0iMHB4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjUxMnB4IiBpZD0iQ2FwYV8xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB2aWV3Qm94PSIwIDAgNTEyLjAwMSA1MTIuMDAxIiB4bWw6c3BhY2U9InByZXNlcnZlIiBoZWlnaHQ9IjUxMnB4Ij4KIDxnPgogIDxnPgogICA8Zz4KICAgIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgY2xhc3M9ImFjdGl2ZS'+
			'1wYXRoIiBkPSJNMjg0LjI4NiwyNTYuMDAyTDUwNi4xNDMsMzQuMTQ0YzcuODExLTcuODExLDcuODExLTIwLjQ3NSwwLTI4LjI4NWMtNy44MTEtNy44MS0yMC40NzUtNy44MTEtMjguMjg1LDBMMjU2LDIyNy43MTcgICAgTDM0LjE0Myw1Ljg1OWMtNy44MTEtNy44MTEtMjAuNDc1LTcuODExLTI4LjI4NSwwYy03LjgxLDcuODExLTcuODExLDIwLjQ3NSwwLDI4LjI4NWwyMjEuODU3LDIyMS44NTdMNS44NTgsNDc3Ljg1OSAgICBjLTcuODExLDcuODExLTcuODExLDIwLjQ3NSwwLDI4LjI4NWMzLjkwNSwzLjkwNSw5LjAyNCw1Ljg1NywxNC4xNDMsNS44NTdjNS4xMTksMCwxMC4yMzctMS45NTIsMTQu'+
			'MTQzLTUuODU3TDI1NiwyODQuMjg3ICAgIGwyMjEuODU3LDIyMS44NTdjMy45MDUsMy45MDUsOS4wMjQsNS44NTcsMTQuMTQzLDUuODU3czEwLjIzNy0xLjk1MiwxNC4xNDMtNS44NTdjNy44MTEtNy44MTEsNy44MTEtMjAuNDc1LDAtMjguMjg1ICAgIEwyODQuMjg2LDI1Ni4wMDJ6IiBmaWxsPSIjM2FhNWE3IiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIvPgogICA8L2c+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._svg_5__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 5";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 25px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_5.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('cascada') == false))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._svg_5.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._svg_5.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._svg_5.style[domTransition]='opacity 500ms ease 0ms';
				if (me._svg_5.ggCurrentLogicStateAlpha == 0) {
					me._svg_5.style.visibility=me._svg_5.ggVisible?'inherit':'hidden';
					me._svg_5.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._svg_5.style.opacity == 0.0) { me._svg_5.style.visibility="hidden"; } }, 505);
					me._svg_5.style.opacity=0;
				}
			}
		}
		me._svg_5.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._no.appendChild(me._svg_5);
		me._cascada0.appendChild(me._no);
		el=me._si=document.createElement('div');
		el.ggId="si";
		el.ggDx=40;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.00392157);';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._si.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._si.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseDown['si'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._si.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._si.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._si.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms';
				if (me._si.ggCurrentLogicStateScaling == 0) {
					me._si.ggParameter.sx = 0.9;
					me._si.ggParameter.sy = 0.9;
					me._si.style[domTransform]=parameterToTransform(me._si.ggParameter);
				}
				else {
					me._si.ggParameter.sx = 1;
					me._si.ggParameter.sy = 1;
					me._si.style[domTransform]=parameterToTransform(me._si.ggParameter);
				}
			}
		}
		me._si.onclick=function (e) {
			player.setVariableValue('cascada', true);
		}
		me._si.onmouseout=function (e) {
			me.elementMouseDown['si']=false;
			me._si.logicBlock_scaling();
		}
		me._si.onmousedown=function (e) {
			me.elementMouseDown['si']=true;
			me._si.logicBlock_scaling();
		}
		me._si.onmouseup=function (e) {
			me.elementMouseDown['si']=false;
			me._si.logicBlock_scaling();
		}
		me._si.ontouchend=function (e) {
			me.elementMouseDown['si']=false;
			me._si.logicBlock_scaling();
		}
		me._si.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._rectangle_3=document.createElement('div');
		el.ggId="Rectangle 3";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 50px;';
		hs+='border-radius : 50px;';
		hs+='border : 1px solid #bbbbbb;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_3.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((player.getVariableValue('cascada') == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._rectangle_3.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._rectangle_3.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._rectangle_3.style[domTransition]='border-color 500ms ease 0ms';
				if (me._rectangle_3.ggCurrentLogicStateBorderColor == 0) {
					me._rectangle_3.style.borderColor="rgba(58,165,167,1)";
				}
				else {
					me._rectangle_3.style.borderColor="rgba(187,187,187,1)";
				}
			}
		}
		me._rectangle_3.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._si.appendChild(me._rectangle_3);
		el=me._svg_2=document.createElement('div');
		els=me._svg_2__img=document.createElement('img');
		els.className='ggskin ggskin_svg_2';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAACaElEQVRoge3YP4sTQRjH8e9uBN2ASNL5Pha0mDRqyBvQiJzeaWthq1ZLGm2sbEXkolZ2ezaSdBkWfClWQSQJGMxjcSnCkexNsrvZ2TA/SDMzhPkwy/x5wMXFxcXFxaWseGVPoKgkSRJMp9O3wPGyqV+r1V7VypxUUYnjuA58F5FHQLD83RaR4OBWOI7jer1ePxORO2u6f/l7n1GBuQQL8O9gwAZYROTjQXzSJlggbjQa9yu/wqbY8Xj8IAzDeaVXeBtst9v9CxU+h3fBAlTyHE6SJOD8nN0KCxVc4eUNaicsVAycFQsVAueBhYqA88JCBcB5YsFycN5YsBhcBBYsBReFBQvBRWIBrmSYW+5JkiSYTCZnQCFYsGiFV7B3U4ZlwoIl4H1hAbwoinyl1A'+
			'vgZNl2qrV+3+v1Fln+2DT7xAJ4w+HwtYi8udD+VWt9XDR631gAf7FYPF/TfqSU6kdRVFhFpAwsgO953rUNfYWhy8IC+MC3lP7c0WViAfwgCF4CP1PGHLVardM80GVjAXyl1B+gQwpaRB5nRS+xMSViYeUcHgwGN4AfwK2Ngz3vy2g0Otl2917B3ksZVjgWLlw8TNDAZ631U1O0TVhYc9PKE20bFjZcLfNA24iFlLt0FrStWDg/h9em3W7/5pLdG3iilPq0unvbjAWD15LhSve11s86nc5Vm7Fg+Dw0/byBm1iMhS3ew4botJSOhS0LABnQVmBhh4rHDmhrsLBjiWcLtFVYyFDTMkBbh4WMRbwUtJVYyKFqqbW+PpvN3gEPgbmIfGg2m1EYhvPs07M4ImJFydfFxcXFxaVC+Q/eH2tlvEdSuAAAAABJRU5ErkJggg=='+
			'';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='height : 30px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._si.appendChild(me._svg_2);
		el=me._svg_3=document.createElement('div');
		els=me._svg_3__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJz8+Cjxzdmcgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHk9IjBweCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MTJweCIgaWQ9IkxheWVyXzEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIiBoZWlnaHQ9IjUxMnB4Ij4KIDxnPgogIDxnPgogICA8Zz4KICAgIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkPSJNNTA0Lj'+
			'UwMiw3NS40OTZjLTkuOTk3LTkuOTk4LTI2LjIwNS05Ljk5OC0zNi4yMDQsMEwxNjEuNTk0LDM4Mi4yMDNMNDMuNzAyLDI2NC4zMTFjLTkuOTk3LTkuOTk4LTI2LjIwNS05Ljk5Ny0zNi4yMDQsMCAgICBjLTkuOTk4LDkuOTk3LTkuOTk4LDI2LjIwNSwwLDM2LjIwM2wxMzUuOTk0LDEzNS45OTJjOS45OTQsOS45OTcsMjYuMjE0LDkuOTksMzYuMjA0LDBMNTA0LjUwMiwxMTEuNyAgICBDNTE0LjUsMTAxLjcwMyw1MTQuNDk5LDg1LjQ5NCw1MDQuNTAyLDc1LjQ5NnoiIGZpbGw9IiMzYWE1YTciIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIi8+CiAgIDwvZz4K'+
			'ICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._svg_3__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 3";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 30px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_3.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('cascada') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._svg_3.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._svg_3.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._svg_3.style[domTransition]='opacity 500ms ease 0ms';
				if (me._svg_3.ggCurrentLogicStateAlpha == 0) {
					me._svg_3.style.visibility=me._svg_3.ggVisible?'inherit':'hidden';
					me._svg_3.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._svg_3.style.opacity == 0.0) { me._svg_3.style.visibility="hidden"; } }, 505);
					me._svg_3.style.opacity=0;
				}
			}
		}
		me._svg_3.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._si.appendChild(me._svg_3);
		me._cascada0.appendChild(me._si);
		me._configurador.appendChild(me._cascada0);
		el=me._versiones0=document.createElement('div');
		el.ggId="versiones";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0,sy:0 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 60px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._versiones0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._versiones0.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('configurador') == "versiones"))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._versiones0.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._versiones0.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._versiones0.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms';
				if (me._versiones0.ggCurrentLogicStateScaling == 0) {
					me._versiones0.ggParameter.sx = 1;
					me._versiones0.ggParameter.sy = 1;
					me._versiones0.style[domTransform]=parameterToTransform(me._versiones0.ggParameter);
				}
				else {
					me._versiones0.ggParameter.sx = 0;
					me._versiones0.ggParameter.sy = 0;
					me._versiones0.style[domTransform]=parameterToTransform(me._versiones0.ggParameter);
				}
			}
		}
		me._versiones0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._basic=document.createElement('div');
		el.ggId="Basic";
		el.ggDx=-120;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 1px solid #bbbbbb;';
		hs+='bottom : 10px;';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._basic.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._basic.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseDown['basic'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._basic.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._basic.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._basic.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms, border-color 500ms ease 0ms';
				if (me._basic.ggCurrentLogicStateScaling == 0) {
					me._basic.ggParameter.sx = 0.9;
					me._basic.ggParameter.sy = 0.9;
					me._basic.style[domTransform]=parameterToTransform(me._basic.ggParameter);
				}
				else {
					me._basic.ggParameter.sx = 1;
					me._basic.ggParameter.sy = 1;
					me._basic.style[domTransform]=parameterToTransform(me._basic.ggParameter);
				}
			}
		}
		me._basic.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((player.getVariableValue('hidros') == 8)) && 
				((player.getVariableValue('luces') == 0)) && 
				((player.getVariableValue('blower') == false)) && 
				((player.getVariableValue('cascada') == false)) && 
				((player.getVariableValue('cabeceros') == false))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._basic.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._basic.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._basic.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms, border-color 500ms ease 0ms';
				if (me._basic.ggCurrentLogicStateBorderColor == 0) {
					me._basic.style.borderColor="rgba(58,165,167,1)";
				}
				else {
					me._basic.style.borderColor="rgba(187,187,187,1)";
				}
			}
		}
		me._basic.onclick=function (e) {
			player.setVariableValue('hidros', Number("8"));
			player.setVariableValue('luces', Number("0"));
			player.setVariableValue('blower', false);
			player.setVariableValue('cascada', false);
			player.setVariableValue('cabeceros', false);
			me._timer_versiones.ggTimeout=Number("0.2") * 1000.0;
			me._timer_versiones.ggTimestamp=skin.ggCurrentTime;
		}
		me._basic.onmouseout=function (e) {
			me.elementMouseDown['basic']=false;
			me._basic.logicBlock_scaling();
		}
		me._basic.onmousedown=function (e) {
			me.elementMouseDown['basic']=true;
			me._basic.logicBlock_scaling();
		}
		me._basic.onmouseup=function (e) {
			me.elementMouseDown['basic']=false;
			me._basic.logicBlock_scaling();
		}
		me._basic.ontouchend=function (e) {
			me.elementMouseDown['basic']=false;
			me._basic.logicBlock_scaling();
		}
		me._basic.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._text_19=document.createElement('div');
		els=me._text_19__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 18px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(130,130,130,1);';
		hs+='font-size: 18px;';
		hs+='font-weight: lighter;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Basic";
		el.appendChild(els);
		me._text_19.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_19.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player.getVariableValue('hidros') == 8)) && 
				((player.getVariableValue('luces') == 0)) && 
				((player.getVariableValue('blower') == false)) && 
				((player.getVariableValue('cascada') == false)) && 
				((player.getVariableValue('cabeceros') == false))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._text_19.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._text_19.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._text_19__text.style[domTransition]='color 500ms ease 0ms';
				if (me._text_19.ggCurrentLogicStateTextColor == 0) {
					me._text_19__text.style.color="rgba(58,165,167,1)";
				}
				else {
					me._text_19__text.style.color="rgba(130,130,130,1)";
				}
			}
		}
		me._text_19.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((58-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._basic.appendChild(me._text_19);
		me._versiones0.appendChild(me._basic);
		el=me._medio=document.createElement('div');
		el.ggId="Medio";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 1px solid #bbbbbb;';
		hs+='bottom : 10px;';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._medio.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._medio.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseDown['medio'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._medio.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._medio.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._medio.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms, border-color 500ms ease 0ms';
				if (me._medio.ggCurrentLogicStateScaling == 0) {
					me._medio.ggParameter.sx = 0.9;
					me._medio.ggParameter.sy = 0.9;
					me._medio.style[domTransform]=parameterToTransform(me._medio.ggParameter);
				}
				else {
					me._medio.ggParameter.sx = 1;
					me._medio.ggParameter.sy = 1;
					me._medio.style[domTransform]=parameterToTransform(me._medio.ggParameter);
				}
			}
		}
		me._medio.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((player.getVariableValue('hidros') == 16)) && 
				((player.getVariableValue('luces') == 2)) && 
				((player.getVariableValue('blower') == false)) && 
				((player.getVariableValue('cascada') == false)) && 
				((player.getVariableValue('cabeceros') == false))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._medio.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._medio.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._medio.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms, border-color 500ms ease 0ms';
				if (me._medio.ggCurrentLogicStateBorderColor == 0) {
					me._medio.style.borderColor="rgba(58,165,167,1)";
				}
				else {
					me._medio.style.borderColor="rgba(187,187,187,1)";
				}
			}
		}
		me._medio.onclick=function (e) {
			player.setVariableValue('hidros', Number("10"));
			player.setVariableValue('luces', Number("2"));
			player.setVariableValue('blower', false);
			player.setVariableValue('cascada', false);
			player.setVariableValue('cabeceros', false);
			me._timer_versiones.ggTimeout=Number("0.2") * 1000.0;
			me._timer_versiones.ggTimestamp=skin.ggCurrentTime;
		}
		me._medio.onmouseout=function (e) {
			me.elementMouseDown['medio']=false;
			me._medio.logicBlock_scaling();
		}
		me._medio.onmousedown=function (e) {
			me.elementMouseDown['medio']=true;
			me._medio.logicBlock_scaling();
		}
		me._medio.onmouseup=function (e) {
			me.elementMouseDown['medio']=false;
			me._medio.logicBlock_scaling();
		}
		me._medio.ontouchend=function (e) {
			me.elementMouseDown['medio']=false;
			me._medio.logicBlock_scaling();
		}
		me._medio.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._text_18=document.createElement('div');
		els=me._text_18__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 18px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(130,130,130,1);';
		hs+='font-size: 18px;';
		hs+='font-weight: lighter;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Medio";
		el.appendChild(els);
		me._text_18.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_18.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player.getVariableValue('hidros') == 16)) && 
				((player.getVariableValue('luces') == 2)) && 
				((player.getVariableValue('blower') == false)) && 
				((player.getVariableValue('cascada') == false)) && 
				((player.getVariableValue('cabeceros') == false))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._text_18.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._text_18.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._text_18__text.style[domTransition]='color 500ms ease 0ms';
				if (me._text_18.ggCurrentLogicStateTextColor == 0) {
					me._text_18__text.style.color="rgba(58,165,167,1)";
				}
				else {
					me._text_18__text.style.color="rgba(130,130,130,1)";
				}
			}
		}
		me._text_18.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((58-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._medio.appendChild(me._text_18);
		me._versiones0.appendChild(me._medio);
		el=me._full=document.createElement('div');
		el.ggId="full";
		el.ggDx=120;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 1px solid #bbbbbb;';
		hs+='bottom : 10px;';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._full.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._full.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseDown['full'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._full.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._full.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._full.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms, border-color 500ms ease 0ms';
				if (me._full.ggCurrentLogicStateScaling == 0) {
					me._full.ggParameter.sx = 0.9;
					me._full.ggParameter.sy = 0.9;
					me._full.style[domTransform]=parameterToTransform(me._full.ggParameter);
				}
				else {
					me._full.ggParameter.sx = 1;
					me._full.ggParameter.sy = 1;
					me._full.style[domTransform]=parameterToTransform(me._full.ggParameter);
				}
			}
		}
		me._full.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((player.getVariableValue('hidros') == 36)) && 
				((player.getVariableValue('luces') == 4)) && 
				((player.getVariableValue('blower') == true)) && 
				((player.getVariableValue('cascada') == true)) && 
				((player.getVariableValue('cabeceros') == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._full.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._full.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._full.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms, border-color 500ms ease 0ms';
				if (me._full.ggCurrentLogicStateBorderColor == 0) {
					me._full.style.borderColor="rgba(58,165,167,1)";
				}
				else {
					me._full.style.borderColor="rgba(187,187,187,1)";
				}
			}
		}
		me._full.onclick=function (e) {
			player.setVariableValue('hidros', Number("22"));
			player.setVariableValue('luces', Number("4"));
			player.setVariableValue('blower', true);
			player.setVariableValue('cascada', true);
			player.setVariableValue('cabeceros', true);
			me._timer_versiones.ggTimeout=Number("0.2") * 1000.0;
			me._timer_versiones.ggTimestamp=skin.ggCurrentTime;
		}
		me._full.onmouseout=function (e) {
			me.elementMouseDown['full']=false;
			me._full.logicBlock_scaling();
		}
		me._full.onmousedown=function (e) {
			me.elementMouseDown['full']=true;
			me._full.logicBlock_scaling();
		}
		me._full.onmouseup=function (e) {
			me.elementMouseDown['full']=false;
			me._full.logicBlock_scaling();
		}
		me._full.ontouchend=function (e) {
			me.elementMouseDown['full']=false;
			me._full.logicBlock_scaling();
		}
		me._full.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._text_17=document.createElement('div');
		els=me._text_17__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 18px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(130,130,130,1);';
		hs+='font-size: 18px;';
		hs+='font-weight: lighter;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Full";
		el.appendChild(els);
		me._text_17.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_17.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player.getVariableValue('hidros') == 36)) && 
				((player.getVariableValue('luces') == 4)) && 
				((player.getVariableValue('blower') == true)) && 
				((player.getVariableValue('cascada') == true)) && 
				((player.getVariableValue('cabeceros') == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._text_17.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._text_17.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._text_17__text.style[domTransition]='color 500ms ease 0ms';
				if (me._text_17.ggCurrentLogicStateTextColor == 0) {
					me._text_17__text.style.color="rgba(58,165,167,1)";
				}
				else {
					me._text_17__text.style.color="rgba(130,130,130,1)";
				}
			}
		}
		me._text_17.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((58-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._full.appendChild(me._text_17);
		me._versiones0.appendChild(me._full);
		me._configurador.appendChild(me._versiones0);
		el=me._test=document.createElement('div');
		els=me._test__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="test";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 28px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 15px;';
		hs+='visibility : hidden;';
		hs+='width : 164px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 166px;';
		hs+='height: 30px;';
		hs+='background: #ffffff;';
		hs+='border: 1px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._test.ggUpdateText=function() {
			var hs=player.getVariableValue('configurador');
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._test.ggUpdateText();
		player.addListener('timer', function() {
			me._test.ggUpdateText();
		});
		el.appendChild(els);
		me._test.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._test.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 2;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._configurador.appendChild(me._test);
		me._responsive_configurador.appendChild(me._configurador);
		el=me._scrollarea_1=document.createElement('div');
		els=me._scrollarea_1__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		hs ='';
		hs+='height : 60px;';
		hs+='left : 0px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 640px;';
		hs+="";
		els.setAttribute('style',hs);
		me._scrollarea_1.ggScrollByX = function(diffX) {
			if(!me._scrollarea_1.ggHorScrollVisible || diffX == 0 || me._scrollarea_1.ggHPercentVisible >= 1.0) return;
			me._scrollarea_1.ggScrollPosX = (me._scrollarea_1__horScrollFg.offsetLeft + diffX);
			me._scrollarea_1.ggScrollPosX = Math.max(me._scrollarea_1.ggScrollPosX, 0);
			me._scrollarea_1.ggScrollPosX = Math.min(me._scrollarea_1.ggScrollPosX, me._scrollarea_1__horScrollBg.offsetWidth - me._scrollarea_1__horScrollFg.offsetWidth);
			me._scrollarea_1__horScrollFg.style.left = me._scrollarea_1.ggScrollPosX + 'px';
			me._scrollarea_1__content.style.left = -(Math.round(me._scrollarea_1.ggScrollPosX / me._scrollarea_1.ggHPercentVisible)) + me._scrollarea_1.ggContentLeftOffset + 'px';
			me._scrollarea_1.ggScrollPosXPercent = (me._scrollarea_1__horScrollFg.offsetLeft / me._scrollarea_1__horScrollBg.offsetWidth);
		}
		me._scrollarea_1.ggScrollByXSmooth = function(diffX) {
			if(!me._scrollarea_1.ggHorScrollVisible || diffX == 0 || me._scrollarea_1.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._scrollarea_1.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._scrollarea_1.ggScrollPosX >= me._scrollarea_1__horScrollBg.offsetWidth - me._scrollarea_1__horScrollFg.offsetWidth)) {
					me._scrollarea_1.ggScrollPosX = Math.min(me._scrollarea_1.ggScrollPosX, me._scrollarea_1__horScrollBg.offsetWidth - me._scrollarea_1__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._scrollarea_1.ggScrollPosX <= 0)) {
					me._scrollarea_1.ggScrollPosX = Math.max(me._scrollarea_1.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._scrollarea_1__horScrollFg.style.left = me._scrollarea_1.ggScrollPosX + 'px';
			me._scrollarea_1__content.style.left = -(Math.round(me._scrollarea_1.ggScrollPosX / me._scrollarea_1.ggHPercentVisible)) + me._scrollarea_1.ggContentLeftOffset + 'px';
			me._scrollarea_1.ggScrollPosXPercent = (me._scrollarea_1__horScrollFg.offsetLeft / me._scrollarea_1__horScrollBg.offsetWidth);
			}, 10);
		}
		me._scrollarea_1.ggScrollByY = function(diffY) {
			if(!me._scrollarea_1.ggVertScrollVisible || diffY == 0 || me._scrollarea_1.ggVPercentVisible >= 1.0) return;
			me._scrollarea_1.ggScrollPosY = (me._scrollarea_1__vertScrollFg.offsetTop + diffY);
			me._scrollarea_1.ggScrollPosY = Math.max(me._scrollarea_1.ggScrollPosY, 0);
			me._scrollarea_1.ggScrollPosY = Math.min(me._scrollarea_1.ggScrollPosY, me._scrollarea_1__vertScrollBg.offsetHeight - me._scrollarea_1__vertScrollFg.offsetHeight);
			me._scrollarea_1__vertScrollFg.style.top = me._scrollarea_1.ggScrollPosY + 'px';
			me._scrollarea_1__content.style.top = -(Math.round(me._scrollarea_1.ggScrollPosY / me._scrollarea_1.ggVPercentVisible)) + me._scrollarea_1.ggContentTopOffset + 'px';
			me._scrollarea_1.ggScrollPosYPercent = (me._scrollarea_1__vertScrollFg.offsetTop / me._scrollarea_1__vertScrollBg.offsetHeight);
		}
		me._scrollarea_1.ggScrollByYSmooth = function(diffY) {
			if(!me._scrollarea_1.ggVertScrollVisible || diffY == 0 || me._scrollarea_1.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._scrollarea_1.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._scrollarea_1.ggScrollPosY >= me._scrollarea_1__vertScrollBg.offsetHeight - me._scrollarea_1__vertScrollFg.offsetHeight)) {
					me._scrollarea_1.ggScrollPosY = Math.min(me._scrollarea_1.ggScrollPosY, me._scrollarea_1__vertScrollBg.offsetHeight - me._scrollarea_1__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._scrollarea_1.ggScrollPosY <= 0)) {
					me._scrollarea_1.ggScrollPosY = Math.max(me._scrollarea_1.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._scrollarea_1__vertScrollFg.style.top = me._scrollarea_1.ggScrollPosY + 'px';
			me._scrollarea_1__content.style.top = -(Math.round(me._scrollarea_1.ggScrollPosY / me._scrollarea_1.ggVPercentVisible)) + me._scrollarea_1.ggContentTopOffset + 'px';
			me._scrollarea_1.ggScrollPosYPercent = (me._scrollarea_1__vertScrollFg.offsetTop / me._scrollarea_1__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._scrollarea_1.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._scrollarea_1.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._scrollarea_1.ggHPercentVisible);
					me._scrollarea_1.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._scrollarea_1.offsetWidth - (me._scrollarea_1.ggVertScrollVisible ? 2 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._scrollarea_1.offsetWidth - (me._scrollarea_1.ggVertScrollVisible ? 2 : 0))) * me._scrollarea_1.ggHPercentVisible);
					me._scrollarea_1.ggScrollByXSmooth(diffX);
				}
			}
			if (me._scrollarea_1.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._scrollarea_1.ggVPercentVisible);
					me._scrollarea_1.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._scrollarea_1.offsetHeight - (me._scrollarea_1.ggHorScrollVisible ? 2 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._scrollarea_1.offsetHeight - (me._scrollarea_1.ggHorScrollVisible ? 2 : 0))) * me._scrollarea_1.ggVPercentVisible);
					me._scrollarea_1.ggScrollByYSmooth(diffY);
				}
			}
		}
		els.ontouchstart = function(e) {
			e = e || window.event;
			var t = e.touches;
			me._scrollarea_1.ggDragLastX = t ? t[0].clientX : e.clientX;
			me._scrollarea_1.ggDragLastY = t ? t[0].clientY : e.clientY;
			me._scrollarea_1__content.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._scrollarea_1.ggDragInertiaX *= 0.65;
					me._scrollarea_1.ggDragInertiaY *= 0.65;
					me._scrollarea_1.ggScrollByX(me._scrollarea_1.ggDragInertiaX);
					me._scrollarea_1.ggScrollByY(me._scrollarea_1.ggDragInertiaY);
					if (Math.abs(me._scrollarea_1.ggDragInertiaX) < 1.0 && Math.abs(me._scrollarea_1.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				me._scrollarea_1__content.ontouchend = null;
				me._scrollarea_1__content.ontouchmove = null;
				me._scrollarea_1__content.onpointerup = null;
				me._scrollarea_1__content.onpointermove = null;
			}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			me._scrollarea_1__content.onpointerup = me._scrollarea_1__content.ontouchend;
		}
			me._scrollarea_1__content.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffX = ((t ? t[0].clientX : e.clientX) - me._scrollarea_1.ggDragLastX) * me._scrollarea_1.ggHPercentVisible;
				var diffY = ((t ? t[0].clientY : e.clientY) - me._scrollarea_1.ggDragLastY) * me._scrollarea_1.ggVPercentVisible;
				me._scrollarea_1.ggDragInertiaX = -diffX;
				me._scrollarea_1.ggDragInertiaY = -diffY;
				me._scrollarea_1.ggDragLastX = t ? t[0].clientX : e.clientX;
				me._scrollarea_1.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._scrollarea_1.ggScrollByX(-diffX);
				me._scrollarea_1.ggScrollByY(-diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._scrollarea_1__content.onpointermove = me._scrollarea_1__content.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = els.ontouchstart;
		}
		elHorScrollBg = me._scrollarea_1__horScrollBg = document.createElement('div');
		el.appendChild(elHorScrollBg);
		elHorScrollBg.setAttribute('style', 'position: absolute; left: 0px; bottom: 0px; visibility: hidden; width: 422px; height: 2px; background-color: rgba(248,248,246,1); pointer-events: auto;');
		elHorScrollBg.className='ggskin ggskin_scrollarea_hscrollbg';
		elHorScrollFg = me._scrollarea_1__horScrollFg = document.createElement('div');
		elHorScrollBg.appendChild(elHorScrollFg);
		elHorScrollFg.className='ggskin ggskin_scrollarea_hscrollfg';
		elHorScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 422px; height: 2px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		me._scrollarea_1.ggScrollPosX = 0;
		me._scrollarea_1.ggScrollPosXPercent = 0.0;
		elHorScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._scrollarea_1.ggDragLastX = e.clientX;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._scrollarea_1.ggDragInertiaX *= 0.65;
					me._scrollarea_1.ggScrollByX(me._scrollarea_1.ggDragInertiaX);
					if (Math.abs(me._scrollarea_1.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffX = e.clientX - me._scrollarea_1.ggDragLastX;
				me._scrollarea_1.ggDragInertiaX = diffX;
				me._scrollarea_1.ggDragLastX = e.clientX;
				me._scrollarea_1.ggScrollByX(diffX);
			}
		}
		elHorScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._scrollarea_1.ggDragLastX = t ? t[0].clientX : e.clientX;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._scrollarea_1.ggDragInertiaX *= 0.65;
					me._scrollarea_1.ggScrollByX(me._scrollarea_1.ggDragInertiaX);
					if (Math.abs(me._scrollarea_1.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffX = (t ? t[0].clientX : e.clientX) - me._scrollarea_1.ggDragLastX;
				me._scrollarea_1.ggDragInertiaX = diffX;
				me._scrollarea_1.ggDragLastX = t ? t[0].clientX : e.clientX;
				me._scrollarea_1.ggScrollByX(diffX);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elHorScrollFg.onpointerdown = elHorScrollFg.ontouchstart;
		}
		elHorScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffX = me._scrollarea_1.ggScrollWidth;
			if (e.offsetX < me._scrollarea_1.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._scrollarea_1.ggScrollByXSmooth(diffX);
		}
		elHorScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._scrollarea_1__horScrollBg.getBoundingClientRect();
			var diffX = me._scrollarea_1.ggScrollWidth;
			if ((t[0].clientX - rect.left) < me._scrollarea_1.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._scrollarea_1.ggScrollByXSmooth(diffX);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaX);
			me._scrollarea_1.ggScrollByXSmooth(20 * wheelDelta);
		});
		elCornerBg = me._scrollarea_1__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 2px; height: 2px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="Scrollarea 1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='background : #f6f6f6;';
		hs+='border : 1px solid rgba(0, 0, 0, 0);';
		hs+='bottom : 0px;';
		hs+='height : 60px;';
		hs+='left : -10000px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='scroll-behavior: smooth;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._scrollarea_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._scrollarea_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none') {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				var contentWidth = 640;
				var contentHeight = 60;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				this.ggContent.style.left = -(Math.round(me._scrollarea_1.ggScrollPosX / me._scrollarea_1.ggHPercentVisible)) + this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				var containerHeight = this.offsetHeight;
				if (this.ggHorScrollVisible) containerHeight -= 2;
				if (contentHeight < containerHeight) {
					this.ggContent.style.top = '50%';
					this.ggContent.style.marginTop = ((contentHeight/-2) - (this.ggHorScrollVisible ? (2/2) : 0))  + 'px';
				}
				else {
					this.ggContent.style.top = this.ggContentTopOffset + 'px';
					this.ggContent.style.marginTop = '0px';
				}
				me._scrollarea_1__horScrollBg.style.visibility = 'inherit';
				me._scrollarea_1__horScrollFg.style.visibility = 'inherit';
				me._scrollarea_1.ggHorScrollVisible = true;
				if(me._scrollarea_1.ggHorScrollVisible) {
					me._scrollarea_1.ggAvailableHeight = me._scrollarea_1.offsetHeight - 2;
					if (me._scrollarea_1.ggVertScrollVisible) {
						me._scrollarea_1.ggAvailableWidth = me._scrollarea_1.offsetWidth - 2;
						me._scrollarea_1.ggAvailableWidthWithScale = me._scrollarea_1.getBoundingClientRect().width - me._scrollarea_1__horScrollBg.getBoundingClientRect().height;
					} else {
						me._scrollarea_1.ggAvailableWidth = me._scrollarea_1.offsetWidth;
						me._scrollarea_1.ggAvailableWidthWithScale = me._scrollarea_1.getBoundingClientRect().width;
					}
					me._scrollarea_1__horScrollBg.style.width = me._scrollarea_1.ggAvailableWidth + 'px';
					me._scrollarea_1.ggHPercentVisible = contentWidth != 0 ? me._scrollarea_1.ggAvailableWidthWithScale / contentWidth : 0.0;
					if (me._scrollarea_1.ggHPercentVisible > 1.0) me._scrollarea_1.ggHPercentVisible = 1.0;
					me._scrollarea_1.ggScrollWidth = Math.round(me._scrollarea_1__horScrollBg.offsetWidth * me._scrollarea_1.ggHPercentVisible);
					me._scrollarea_1__horScrollFg.style.width = me._scrollarea_1.ggScrollWidth + 'px';
					me._scrollarea_1.ggScrollPosX = me._scrollarea_1.ggScrollPosXPercent * me._scrollarea_1.ggAvailableWidth;
					me._scrollarea_1.ggScrollPosX = Math.min(me._scrollarea_1.ggScrollPosX, me._scrollarea_1__horScrollBg.offsetWidth - me._scrollarea_1__horScrollFg.offsetWidth);
					me._scrollarea_1__horScrollFg.style.left = me._scrollarea_1.ggScrollPosX + 'px';
					if (me._scrollarea_1.ggHPercentVisible < 1.0) {
						me._scrollarea_1__content.style.left = -(Math.round(me._scrollarea_1.ggScrollPosX / me._scrollarea_1.ggHPercentVisible)) + this.ggContentLeftOffset + 'px';
					}
				} else {
					me._scrollarea_1.ggAvailableHeight = me._scrollarea_1.offsetHeight;
					me._scrollarea_1.ggScrollPosX = 0;
					me._scrollarea_1.ggScrollPosXPercent = 0.0;
					me._scrollarea_1__content.style.left = this.ggContentLeftOffset + 'px';
				}
				if(horScrollWasVisible != me._scrollarea_1.ggHorScrollVisible || vertScrollWasVisible != me._scrollarea_1.ggVertScrollVisible) {
					me.updateSize(me._scrollarea_1);
					me._scrollarea_1.ggUpdatePosition();
				}
			}
		}
		el=me._color=document.createElement('div');
		el.ggId="Color";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.00392157);';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : 80px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._color.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._color.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseDown['color'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getVariableValue('versionesescalar') == true))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._color.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._color.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._color.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms';
				if (me._color.ggCurrentLogicStateScaling == 0) {
					me._color.ggParameter.sx = 0.9;
					me._color.ggParameter.sy = 0.9;
					me._color.style[domTransform]=parameterToTransform(me._color.ggParameter);
				}
				else if (me._color.ggCurrentLogicStateScaling == 1) {
					me._color.ggParameter.sx = 0.5;
					me._color.ggParameter.sy = 0.5;
					me._color.style[domTransform]=parameterToTransform(me._color.ggParameter);
				}
				else {
					me._color.ggParameter.sx = 1;
					me._color.ggParameter.sy = 1;
					me._color.style[domTransform]=parameterToTransform(me._color.ggParameter);
				}
			}
		}
		me._color.onmouseout=function (e) {
			me.elementMouseDown['color']=false;
			me._color.logicBlock_scaling();
		}
		me._color.onmousedown=function (e) {
			me.elementMouseDown['color']=true;
			me._color.logicBlock_scaling();
		}
		me._color.onmouseup=function (e) {
			me.elementMouseDown['color']=false;
			me._color.logicBlock_scaling();
		}
		me._color.ontouchend=function (e) {
			me.elementMouseDown['color']=false;
			me._color.logicBlock_scaling();
		}
		me._color.ggUpdatePosition=function (useTransition) {
		}
		el=me._activo4=document.createElement('div');
		el.ggId="activo";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._activo4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._activo4.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('configurador') == "color"))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._activo4.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._activo4.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._activo4.style[domTransition]='';
				if (me._activo4.ggCurrentLogicStateVisible == 0) {
					me._activo4.style.visibility=(Number(me._activo4.style.opacity)>0||!me._activo4.style.opacity)?'inherit':'hidden';
					me._activo4.ggVisible=true;
				}
				else {
					me._activo4.style.visibility="hidden";
					me._activo4.ggVisible=false;
				}
			}
		}
		me._activo4.onclick=function (e) {
			player.setVariableValue('configurador', "0");
			player.moveToDefaultViewEx(3,3);
		}
		me._activo4.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._color.appendChild(me._activo4);
		el=me._inactivo4=document.createElement('div');
		el.ggId="inactivo";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.00392157);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._inactivo4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._inactivo4.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('configurador') != "color"))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._inactivo4.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._inactivo4.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._inactivo4.style[domTransition]='';
				if (me._inactivo4.ggCurrentLogicStateVisible == 0) {
					me._inactivo4.style.visibility=(Number(me._inactivo4.style.opacity)>0||!me._inactivo4.style.opacity)?'inherit':'hidden';
					me._inactivo4.ggVisible=true;
				}
				else {
					me._inactivo4.style.visibility="hidden";
					me._inactivo4.ggVisible=false;
				}
			}
		}
		me._inactivo4.onclick=function (e) {
			player.setVariableValue('configurador', "color");
			player.moveToDefaultViewEx(3,3);
		}
		me._inactivo4.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._color.appendChild(me._inactivo4);
		el=me._text_16=document.createElement('div');
		els=me._text_16__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : 1px;';
		hs+='height : 17px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: 60px;';
		hs+='height: 17px;';
		hs+='pointer-events: none;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(72,72,72,1);';
		hs+='font-size: 11px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Color";
		el.appendChild(els);
		me._text_16.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_16.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._color.appendChild(me._text_16);
		el=me._image_25=document.createElement('div');
		els=me._image_25__img=document.createElement('img');
		els.className='ggskin ggskin_image_25';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAJOklEQVR4nO2da4xeRRnHf7stXezutkWhiGzrFrEgl7a7saVbLYooIVoBNxUhKMQEtJjoBxNNiGDESiwqKBRULh8kokatSVPkkkZt1RiVS0ERbbGtpYqXSlrcll627b5++M/JLJue886c63t255ecHOg+Z+Z5z7wz88zzPDMvBAKBQCAQCAQCgUAgEAgEAvWgrWoFHJkKLALOBOaa+6lAF3AC0Am0A3uBfcBB4J/ANmC7uT8F/LVsxX1p5QZZDFwMvAs4D5iSQ5n/AX4L/BJYC+zIocxcabUG6QU+Yq43j/r3o8Am4A/A8+baDrwC7DH3EaAb9ZrjgdnAaeaaCwwAp4yp70lgDfAg8GIBn6e29KMXcxRomOvvwO3AMmBaTvXMAa4Cvgu8PKquYeAHqN'+
			'EmNP3AI9gXsx94ALgQzQlF0gG8D/g+cGiUDr9mAjbMDGA1cAS9hCFgFXByRfqcAtyM5pgGGv7WAKdXpE+pDAL/wg4VtyJLqRXoBG5CX5Cox36a4ntrJXSgXhENDRuAsyrVKJ6ZwL2op0TD2GmVapQzvWgd0AAOACvws/BmAiuBp9E643nz79dS7DD3HmAn0nu3+f/aMw8t0hrAZmC+5/PLgV3AN9DisHPU325HL+qD2dWMZTrwQ6T/YeBTBdZVOEvROqEBPIbWCT4sB15AjRrHQjQZL0+joCNtwI3YIezLBdZVGEvRpNgAvof/Snsm6hlJjRExAPzGs/w0DCK3TO0aZR62Z3yTdFbKSjRM5c3Y+Wgf8gLc4Pj8MmyjfKEA/XKnF7khop6R1mR8Bs0ZrvQAG5vIHGs+6kR+s48aGRcjYRky2UeAKz10LJ0OrDX1GHBc'+
			'hrKGkF/Kldegb3ocLvMRwFbgAw71fQy7Vnmri4JVEK0ztuA/gY/Ft0GS8JmP+ozsiQ6y0ef9G9k/b+4MYtcZvqbtsXgavyErCd/5aBVwtYPcZOB36HN/O4VehTED+DdS7PqcyvwicEdOZfnORz68BX0JR4B3F1SHN1HX3UB+MZaT0NCRR2/zHf7a0bDrymfR5/8TMMnjuULoR17bYfL3TQ0i10VSo/QhD8DrEmTSNMizHvLHIWOgAVzj8VwhPGoUubWJXJz9vxL1hjgGUU+5E5mnXWgCHQDuMn9rZhXlOR/FcSV6DzvIJ9ycin6jxP9IdqHH2f/noXliF3rxcZyI4hVPoUSGIfPfN+NmDeU5H8XRjkLMDSpcm6wxCqxKkHGx/+ejoSmpUbLgMx8tIr0bJlqbbEj5fCZ6UQx8P/GrWx/7f76RTRq+suAyHy0C/gG8N2'+
			'UdXaj3jgBnpCwjNTehb8MDCTK+9v+daBgqimPNRycAS4BvoUjm+zPWcR96L5/LWI4XbShI1EAJCXH42v+LSXZ/5MHY+Wg3Sge6AfXorFyCjTKWxmJT6U6SnYe+5ma3eabOdKEslsOkyBVI64m92NzXoPEyTxo5l1c2+5BRMBkNhV6kbZALzP0XTeS24bdYPBstsOrOM+Z+tu+DaRpkKhqyjgC/aiL7EMoUdOUq80zd+bO5ezdIGt6BhpXHHWR97P8FKDbustBrdZagd/T7MipbYSq731Hexf5fYGQuy6Zay3A6ekelbH/4uqnsMx7PHMv+70L+qNWoZ7hE6erCTPSOdpVR2cOmsks8n8vqj6oTHegdHSyjsj+aylzcIROVaVinqxdprKwodlz3BVyRRNbVC74PZmmQvSmenShEpv76MiqLNrdUFoRpcfqwrpMzy6gw'+
			'NEg8fch930CJ4KXwkqkwKYY9kehCpvxq7Jc1a5KgFztMpW/0eGZsPP1lShpfPWhDoYS7kSUZffF8rsNonVZaY4CyMXzM3mPF06cDbzB/30Sx+ztcGED7130boIGMm2eB26hoR1i0a/ZSB1mXePoASrKrqlFWoBSmaCv251Gubm2GZFfXiU88fSGK3JW9Czfyy40At6CE7dpxPW7ORd94+tdwy6fNiwHsloIy682dd6IGeaKJXJH5tFlpw84Zt1SsS2amIqfZETQ5x1F0Pm0WLsTOGS01TKVxnexHgZdJwPn5qsNwzuXFESXk3Y8y11uGtDH1KDMvKQXIN54+ApybUh9flpr7IyXVVziLUJd/kfj0+zLyadMyLr0Nm9GHijvdoKx82jRE647JJdZZODfSPJW0jHzaNOxGurfKoTe50IuSrQ8Ar0+QyzOfth2l+q9Dx3'+
			'UcMvd1wBW4z4lR1LPfUb42/Ai3zTp55NPOwW65jrueNHLNeNDIf8Kx7trQh6yjIYrt/nOwh4ttRacA9SCvag9wHbLqGsgv1tukvKuN7E+LUbdaImfjbQWV347tGQ/z6tOARtOF3V73BMnD18noi/QKyhAZV8xHcYBh4JwCyo/27m0lvjEiutFppQ3gQ01kNxm5C5rI1ZI70IfbSP5Hz64zZV/rKB9tK1vbRO4rRu5L6VVrXaZjz1H8ZM5lR4ef9TjKz8YuWpNYhg23jksuRePyQTTZ54VvUsUU3LIG51Ji/m1VREPXFvI7/DjqIbMc5V17yGuN3EvpVWt9OtBaoAH8jHxShaI55DpH+Y/jNoccjz0sZ1wzC8UZGuj47qxn3l5hytpG8/hKNzYr5vImsjOM3J6M+tWCc7BH/N1DtkZpx/a6R4k/l6obTdDRZqJmdc4z'+
			'sn/JoFutOB8tvBromNUsw9cc7PFP25FpO8uUORsNUzuwK3WXnLFoaPtxBr1qxxKsZ3U9GibS0otW4Em+rMdp7jaJ2GieWZFBp1pyLtZS2kY2D2s7WoGvRVbUIXNfi+YM16HxTchTfYjqfgCgUmZjj8I7gLysVf6YzENGl+9UqEPlTMGuU6KjJ4rwfTXjcqx1lRTHmTBchk3ZHwa+Snl7DN+GNTTGXSwkC9NQb4l+0GUvCnLlcfhLHG/HmuL30nq/v9USLEATcnTI/X70E0QXkd+PqExCR0kdxpq5lR9U2eosAH6C7TFRVuHdaIhLypCMYzLwYeA5U95R5Gpv6UyTVuu2PSi8eg3yxkYcQbnCz6FzRDYjc3ePuYbQPHQSSs67CJ1YdKp5PlpM/rzwTzCOWYhOZdvIq39Fzefaghq3pXvFaFqth8TRiYa1s8x1BlrQzU'+
			'DJFdOA/yJX+k6U6roeu9srEAgEAoFAIBAIBAKBQCAQCOTM/wE5Y5Y2EHbvWAAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 2";
		el.ggDx=0;
		el.ggDy=-5;
		el.ggParameter={ rx:0,ry:0,a:90,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.8;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._image_25.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_25.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._color.appendChild(me._image_25);
		me._scrollarea_1__content.appendChild(me._color);
		el=me._hidros=document.createElement('div');
		el.ggId="Hidros";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.00392157);';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : 160px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hidros.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._hidros.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseDown['hidros'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getVariableValue('versionesescalar') == true))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._hidros.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._hidros.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._hidros.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms';
				if (me._hidros.ggCurrentLogicStateScaling == 0) {
					me._hidros.ggParameter.sx = 0.9;
					me._hidros.ggParameter.sy = 0.9;
					me._hidros.style[domTransform]=parameterToTransform(me._hidros.ggParameter);
				}
				else if (me._hidros.ggCurrentLogicStateScaling == 1) {
					me._hidros.ggParameter.sx = 0.5;
					me._hidros.ggParameter.sy = 0.5;
					me._hidros.style[domTransform]=parameterToTransform(me._hidros.ggParameter);
				}
				else {
					me._hidros.ggParameter.sx = 1;
					me._hidros.ggParameter.sy = 1;
					me._hidros.style[domTransform]=parameterToTransform(me._hidros.ggParameter);
				}
			}
		}
		me._hidros.onmouseout=function (e) {
			me.elementMouseDown['hidros']=false;
			me._hidros.logicBlock_scaling();
		}
		me._hidros.onmousedown=function (e) {
			me.elementMouseDown['hidros']=true;
			me._hidros.logicBlock_scaling();
		}
		me._hidros.onmouseup=function (e) {
			me.elementMouseDown['hidros']=false;
			me._hidros.logicBlock_scaling();
		}
		me._hidros.ontouchend=function (e) {
			me.elementMouseDown['hidros']=false;
			me._hidros.logicBlock_scaling();
		}
		me._hidros.ggUpdatePosition=function (useTransition) {
		}
		el=me._activo3=document.createElement('div');
		el.ggId="activo";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._activo3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._activo3.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('configurador') == "hidros"))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._activo3.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._activo3.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._activo3.style[domTransition]='';
				if (me._activo3.ggCurrentLogicStateVisible == 0) {
					me._activo3.style.visibility=(Number(me._activo3.style.opacity)>0||!me._activo3.style.opacity)?'inherit':'hidden';
					me._activo3.ggVisible=true;
				}
				else {
					me._activo3.style.visibility="hidden";
					me._activo3.ggVisible=false;
				}
			}
		}
		me._activo3.onclick=function (e) {
			player.setVariableValue('configurador', "0");
			player.moveToDefaultViewEx(3,3);
		}
		me._activo3.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._hidros.appendChild(me._activo3);
		el=me._inactivo3=document.createElement('div');
		el.ggId="inactivo";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.00392157);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._inactivo3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._inactivo3.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('configurador') != "hidros"))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._inactivo3.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._inactivo3.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._inactivo3.style[domTransition]='';
				if (me._inactivo3.ggCurrentLogicStateVisible == 0) {
					me._inactivo3.style.visibility=(Number(me._inactivo3.style.opacity)>0||!me._inactivo3.style.opacity)?'inherit':'hidden';
					me._inactivo3.ggVisible=true;
				}
				else {
					me._inactivo3.style.visibility="hidden";
					me._inactivo3.ggVisible=false;
				}
			}
		}
		me._inactivo3.onclick=function (e) {
			player.setVariableValue('configurador', "hidros");
			player.moveTo("0","-25","39","3.0000");
		}
		me._inactivo3.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._hidros.appendChild(me._inactivo3);
		el=me._text_15=document.createElement('div');
		els=me._text_15__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : 1px;';
		hs+='height : 17px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: 60px;';
		hs+='height: 17px;';
		hs+='pointer-events: none;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(72,72,72,1);';
		hs+='font-size: 11px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Hidros";
		el.appendChild(els);
		me._text_15.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_15.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._hidros.appendChild(me._text_15);
		el=me._image_24=document.createElement('div');
		els=me._image_24__img=document.createElement('img');
		els.className='ggskin ggskin_image_24';
		hs=basePath + 'images/image_24.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 2";
		el.ggDx=0;
		el.ggDy=-5;
		el.ggParameter={ rx:0,ry:0,a:-90,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.8;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._image_24.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_24.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._hidros.appendChild(me._image_24);
		me._scrollarea_1__content.appendChild(me._hidros);
		el=me._luces=document.createElement('div');
		el.ggId="Luces";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.00392157);';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : 240px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._luces.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._luces.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseDown['luces'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getVariableValue('versionesescalar') == true))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._luces.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._luces.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._luces.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms';
				if (me._luces.ggCurrentLogicStateScaling == 0) {
					me._luces.ggParameter.sx = 0.9;
					me._luces.ggParameter.sy = 0.9;
					me._luces.style[domTransform]=parameterToTransform(me._luces.ggParameter);
				}
				else if (me._luces.ggCurrentLogicStateScaling == 1) {
					me._luces.ggParameter.sx = 0.5;
					me._luces.ggParameter.sy = 0.5;
					me._luces.style[domTransform]=parameterToTransform(me._luces.ggParameter);
				}
				else {
					me._luces.ggParameter.sx = 1;
					me._luces.ggParameter.sy = 1;
					me._luces.style[domTransform]=parameterToTransform(me._luces.ggParameter);
				}
			}
		}
		me._luces.onmouseout=function (e) {
			me.elementMouseDown['luces']=false;
			me._luces.logicBlock_scaling();
		}
		me._luces.onmousedown=function (e) {
			me.elementMouseDown['luces']=true;
			me._luces.logicBlock_scaling();
		}
		me._luces.onmouseup=function (e) {
			me.elementMouseDown['luces']=false;
			me._luces.logicBlock_scaling();
		}
		me._luces.ontouchend=function (e) {
			me.elementMouseDown['luces']=false;
			me._luces.logicBlock_scaling();
		}
		me._luces.ggUpdatePosition=function (useTransition) {
		}
		el=me._activo2=document.createElement('div');
		el.ggId="activo";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._activo2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._activo2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('configurador') == "blower"))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._activo2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._activo2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._activo2.style[domTransition]='';
				if (me._activo2.ggCurrentLogicStateVisible == 0) {
					me._activo2.style.visibility=(Number(me._activo2.style.opacity)>0||!me._activo2.style.opacity)?'inherit':'hidden';
					me._activo2.ggVisible=true;
				}
				else {
					me._activo2.style.visibility="hidden";
					me._activo2.ggVisible=false;
				}
			}
		}
		me._activo2.onclick=function (e) {
			player.setVariableValue('configurador', "0");
			player.moveToDefaultViewEx(3,3);
		}
		me._activo2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._luces.appendChild(me._activo2);
		el=me._inactivo2=document.createElement('div');
		el.ggId="inactivo";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.00392157);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._inactivo2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._inactivo2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('configurador') != "blower"))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._inactivo2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._inactivo2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._inactivo2.style[domTransition]='';
				if (me._inactivo2.ggCurrentLogicStateVisible == 0) {
					me._inactivo2.style.visibility=(Number(me._inactivo2.style.opacity)>0||!me._inactivo2.style.opacity)?'inherit':'hidden';
					me._inactivo2.ggVisible=true;
				}
				else {
					me._inactivo2.style.visibility="hidden";
					me._inactivo2.ggVisible=false;
				}
			}
		}
		me._inactivo2.onclick=function (e) {
			player.setVariableValue('configurador', "luces");
			player.moveTo("0","-25","39","3.0000");
		}
		me._inactivo2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._luces.appendChild(me._inactivo2);
		el=me._image_23=document.createElement('div');
		els=me._image_23__img=document.createElement('img');
		els.className='ggskin ggskin_image_23';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAIAElEQVR4nO2ba2xVRRDHfy3cy/tlLWiwpZRngsbERBFBpQiCGkRNBDQICbQgRv2iFDAEP+snIxgRMSY8VCQIH4CYaJRXQIQYI49aUAIoAYWItoAtJb1+mNnsOaf3Xvbce86t0f6Tk9PumZ2Z3Z2dnZ3dCx3owP8aRQWQkQRGA2OA4cBI4FagH9BDaa4Al4BzwI/AcWA/cAC4VgAdI0dPYA7wOdK4VI7PFeUxR3lGjqgtYBhQCzyDHd0UcBjYBRwF6oFfgD+QBqK0NwFlwAhgFPAgcIdHxyvAx8CbwImI9c4bg4CPgOtIg1uBncBcoDQPvqXKY5fyTKmMDSqz3ZEElmDNvAl4Dxgag6yhwGqgGTs9lqoO7YJK4CB2xNcDA0Py6AN8AewDtgArgBeB28'+
			'k8PW9TWcZPHASGhJSbN6YBf6oCPwFVOfIpB/4mvQO8iDS0ivSdUaWyU6rLEznqEBoLsHP9U6B3nvxKkCXySeBlYC1wCn9nnEAsIxGo21t1ML5hYZ663BBLsCa/JGZZlcDrwGlsR9STfqSXYp3ka3EptADb0/PiEpIGxciUq8N2RDrLm4u1zMgtYZoyb6WwjfeiM/ACft9zV4BmLqLjdSL0CZVImJpCTC0fPguRNfw7xMld0+eilm1QmsosfIYAh1Sfy8D4wPelWMeYjY8TEsC3ynBTDvU7ATOBvdg56vK0ap2ZyiOILsCH2HhgYuD7JuwSmVecsFgZ/Yys2WEwCf+8bUBC2RrgbiTKS+hTqmU1StPgqVdH2waC+IZVSnMV/3ToozqnyMNZlyMmlgImhKjXDYkGTQPOIWbdPQSP7kA1svwZPquArgG6ImCNfj+J7CcM'+
			'JmAtJKew2URbG0LUKcVOmSZgOXZTlAsSiBU2Kc8DtN1bJIFv9Ps2/EHTR1q+PqzgoYgnbUZCTxeUAsdU4HkkuIkKYxBLSqmMYCeUAxf0+wxPeRnShuuE3J8YE37fkb4bduQPq0JRo0x5G0sITod5+u206mOwmnBtoSfQiHjiYY51jDM6TzyNNyhTGSng3cC3Yuzy6HV8Q5G2XMYxqTJbmex2VGoids5HafaZcB/WJzwU+HYvsiIsC5TvUvrZLgJ2KHG1A20n7FK33IV5RDB7kmO0jRM6p6GvVvodN2KcREylFejvoMhM7FIXS84uA5LYrfCMG9CCtMVMg6yB0TisI3PBXmLafDigRmXvdaT/Qenvz0b0qhKtdGBYifRqA/mt9bmiB9ZZD3agX4G0bZG3sDhANELfRx0YTkaCju3Y7G4hcUVlF6kuXoxCkipzPGWmTS'+
			'O9hJk6oN5BgXH6/tqBNi58pe+gWQ9Dwt+nPGWmTcO9hMEOMEnNUw7CTU9+70AbF4zskYHyM/r27gFO6Ttr4vZ3ZJ645PJN6JlP3j9flKoOFxzKS7DJ1owwGdpgmJkOJhjp4qhsHEiqDs2B8p7YLXhW2uAU+K+gRd/BLHIbBKOmRmT0eyEjnA2NyOj3pq0JFgomSdMQKG9Goj7v6tRL341ewnQdUIq/UQOQk5rewFbEjEAczc1IPNBeHWByfmfSfHss8L/JIvs6KzgFzurbeM9FyO7rS+Az/JmhOn3f6ahsHDCy67JSCSr0fdZbGOwAs1aaeOCcVtgHvI3sww1MCBomXRY1zG5wjwOtU4zzCu6h8GAkDG2k/UPhCgf6laQJhYMYq0RHHJXYo/Q1jvRRwmyGXEYfbDZpXDaiBLZXB3jKpyA+oAH/ict07ClNIc/pk9i0'+
			'93QH+gE4bodBNhjeUa3CpqavIcdkBsXIJiOv/HsOMKc/R3CLZYy1bHdhPgu/afVDjqxr8VuFgcm/NyFTKG6MVVmtuN9L2I3o+JwLsde5DL8BrcE7FCYpWo5Niro4apA2hEqKgs3yrgmUd0JWivP4e7Mrcq/PmGUcnVCOdWT7cd+DmJOj1WGEVSLxdDO2McXY7Go6z1+C9Qe/Ee10GIsd+aNIBOqCQYjfaiGHe0RrVeAn+n8C+BU5eHgkQ50SrCU0Ibc18lkdksrD7Dz34954gI1ab10uwssQX5DCns52xb9/KEEswRsIdcH6BHOyPJ9wwVIPrXPSw2cl4bbe5rzisrYlJyzCnrz2DXwrxWZa0wVCVYg/MA1oREbkeeTucH9khJP692j9thHb8canhL2F1hfbeYtD1vUhgcT/KWAz/pPXfR4FSzLULwaeRpahsBck9i'+
			'BBTticRZHqmkLOK/MO0CqQe70p/EdOW5A56Y0N5uDPxAb5LEDm4yFkC92szwUtW680FXnou0x1vYRbutwJU7GXpDLF/ZP1e3vlBkCOwMwlqcejZl7jYR7shCT2cmOtp/xR/KnpOFGNvSY3Py4htUgntOKfDt2QvMFu7CrRHzHvqx66nsDDRHtNv0h1MT4m9j1JDbanN2NXh874G2aO2bZ6yt7Ssqju8PVFdqkp1Sm2kQ9iKvbu4EnkRlgQ6/T7FE+Z2ZSku/UVFpOwS90l1amgqMAukSZi9J7ElAAPBOqcRUz1ljzkDsJGeGapi8zbh0UC8QvmOl0z8AGZr9ZUAy/lKGu48r6GjfBqccj9FwJlyN6hBX8gU0P6HIIrBiDzeg/WybWorJzDWy+i/tFUJRJ6Povde5urLDuRqPE4kse/hD2k6IUkXsqxP5oar2+Dy8i9'+
			'vzeQuf+vRg8ks7QNf1wf9mlUHrOIKfNciB9OJoB7kBtkI/QZiBxreY+r/kKcZL0++xEH10IHOtCBuPAPREqAA5MOqdgAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 2";
		el.ggDx=0;
		el.ggDy=-6;
		el.ggParameter={ rx:0,ry:0,a:90,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._image_23.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_23.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._luces.appendChild(me._image_23);
		el=me._text_14=document.createElement('div');
		els=me._text_14__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : 1px;';
		hs+='height : 17px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: 60px;';
		hs+='height: 17px;';
		hs+='pointer-events: none;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(72,72,72,1);';
		hs+='font-size: 11px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Luces";
		el.appendChild(els);
		me._text_14.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_14.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._luces.appendChild(me._text_14);
		me._scrollarea_1__content.appendChild(me._luces);
		el=me._blower=document.createElement('div');
		el.ggId="Blower";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.00392157);';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : 320px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._blower.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._blower.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseDown['blower'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getVariableValue('versionesescalar') == true))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._blower.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._blower.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._blower.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms';
				if (me._blower.ggCurrentLogicStateScaling == 0) {
					me._blower.ggParameter.sx = 0.9;
					me._blower.ggParameter.sy = 0.9;
					me._blower.style[domTransform]=parameterToTransform(me._blower.ggParameter);
				}
				else if (me._blower.ggCurrentLogicStateScaling == 1) {
					me._blower.ggParameter.sx = 0.5;
					me._blower.ggParameter.sy = 0.5;
					me._blower.style[domTransform]=parameterToTransform(me._blower.ggParameter);
				}
				else {
					me._blower.ggParameter.sx = 1;
					me._blower.ggParameter.sy = 1;
					me._blower.style[domTransform]=parameterToTransform(me._blower.ggParameter);
				}
			}
		}
		me._blower.onmouseout=function (e) {
			me.elementMouseDown['blower']=false;
			me._blower.logicBlock_scaling();
		}
		me._blower.onmousedown=function (e) {
			me.elementMouseDown['blower']=true;
			me._blower.logicBlock_scaling();
		}
		me._blower.onmouseup=function (e) {
			me.elementMouseDown['blower']=false;
			me._blower.logicBlock_scaling();
		}
		me._blower.ontouchend=function (e) {
			me.elementMouseDown['blower']=false;
			me._blower.logicBlock_scaling();
		}
		me._blower.ggUpdatePosition=function (useTransition) {
		}
		el=me._activo1=document.createElement('div');
		el.ggId="activo";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._activo1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._activo1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('configurador') == "blower"))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._activo1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._activo1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._activo1.style[domTransition]='';
				if (me._activo1.ggCurrentLogicStateVisible == 0) {
					me._activo1.style.visibility=(Number(me._activo1.style.opacity)>0||!me._activo1.style.opacity)?'inherit':'hidden';
					me._activo1.ggVisible=true;
				}
				else {
					me._activo1.style.visibility="hidden";
					me._activo1.ggVisible=false;
				}
			}
		}
		me._activo1.onclick=function (e) {
			player.setVariableValue('configurador', "0");
			player.moveToDefaultViewEx(3,3);
		}
		me._activo1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._blower.appendChild(me._activo1);
		el=me._inactivo1=document.createElement('div');
		el.ggId="inactivo";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.00392157);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._inactivo1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._inactivo1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('configurador') != "blower"))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._inactivo1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._inactivo1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._inactivo1.style[domTransition]='';
				if (me._inactivo1.ggCurrentLogicStateVisible == 0) {
					me._inactivo1.style.visibility=(Number(me._inactivo1.style.opacity)>0||!me._inactivo1.style.opacity)?'inherit':'hidden';
					me._inactivo1.ggVisible=true;
				}
				else {
					me._inactivo1.style.visibility="hidden";
					me._inactivo1.ggVisible=false;
				}
			}
		}
		me._inactivo1.onclick=function (e) {
			player.setVariableValue('configurador', "blower");
			player.moveTo("0","-25","39","3.0000");
		}
		me._inactivo1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._blower.appendChild(me._inactivo1);
		el=me._image_22=document.createElement('div');
		els=me._image_22__img=document.createElement('img');
		els.className='ggskin ggskin_image_22';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgCAYAAACLz2ctAAAPMklEQVR4nO2debRVVRnAf/c9MAuEhwoqqDwwgQDD0jIxBFM0xUwLB9QyNAdwanBIMjNXFo6tlpq16g/LBak5oLWsZQZOKYJlicjg8BhMZVCQ+Ym81x/ffb5z9j733XPvGfY5936/tfZ677x7z97f2We/PXzft78NiqIoiqIoiqIoiqIoiqIoiqIoiqIoiqIoiqIoiqLknYJrAeqIAjC8mD4J7F/8uTvwCaAX0BNoBzYD64o/NwBLi2kJsLj4+450xU8GbYDJciBwFDAGOAzYLaZ81wFPAnOA2cBCpOEqCsOBa4FFSKNII60ApiO9qlKHNAInA8+SXqMLSm3AM8AZQLdEnzgmdAiOxs7ABcClQHOI768GXkTmch1pNf45H0APoE/x5x7AEGAYMBT4DN'+
			'A3RFmvI73iH4APwjyMkh8KwKlAC133SJuAB4GLgZHE8w9fAA4ALgFmIY22KxlWAmfGVLaSAT4LPEfpF74DeBw4C1nVJs0uwLeQxciOLuSag8xPlZzSDbgGGc6CXvAW4DZgoCsBkWnA7cBWgmX8ALge6O5IPqVKhgHzKT3M3oDM1bLCnsBNiGxBMj8L7OtMOqUivgysJ/hF/hm3PV45BiCLkCDZ1wMT3YmmhOEKgudVryMNMy9MAN4gWG1zpUO5lBI0AL8juOf4IzLxzxu9gPsIfqZfoKvkzNBI8LC1BTgvwXInAG8iapNjEyxnCsGLlBno4sQ53ZAeznw5q4GDI+Y9CJgHrAEuD/h8pae8FRHLKschRTmCGmFDwmUrXRA07LYgloiozPDk2Ya9eEmzAYKs7JdhP++tKZStBHAF9st4GegfU/5mzzrI+PxYpBGuIL0F'+
			'zgA6PWm8SRcmKXMS9mq3hcob3zGIr94iYJzx2VCkQW8BfhhB1rgZgN0TtgFfcShTXbE/sBF7zlfNsLvck8fyuARMgWHYc8J3UWV14nQDnsde7Va74HiTfDZAgC8A27AtJroyTpDrsOc/UVQtJwBvF9PxkaVLn6nY9XG9U4lqmIOAD7GVzGEZgvjs1RqmsroV+JRTiWqQAvA0tnktjIWjANxDpyPC+IRkdEVvbLPdbNRSEiunYQ81YVUfQ437/paEgI45Hrt+TncqUQ3xcUTX5q3c+yu4f1f8bk53xi1gRpiFv46WowuSWDAn2puAfSrMYzzS8/2a2pwHglhqTHf/s51KVAM0Aq/ir9TpTiXKNjfjr6vXyMluu6xizv22kC1P5qyxF7bnjM4FI2AqnW8Lcc+RyAr5LerTPHUH/jp72q04+WUI/orcQTh3+hbPPf9LTL'+
			'rsMgi/nbwNGBxX5vXk+3WGcT2HcOayNs/v9agLawGe8lwXkH3GSgUUsBcfZ4W89xjETWoZ+TSvxcHZ+OvuVerzn7FqDsBWvaSxabxW6IUs2Lx1GMsm93oZgr9kXD+GNEIlHBuQaA9ezDqtinppgEcY13OcSJFvzDoz61QpQSPwHv7hY2SZe/YDZiLeMUMTlS4/jMJ2WK2XDiwSw/BX3CrKT6Dneb6/IFHp8kMB22t6WNRM66EFm5X0IlJ5XeHVD5qbh+qVdqTuvEQeHeqxAS4Jcc/NdOr/1FbciVl3kRtgHgzL/ZAg3yORxtThidyEqFJ2INFF3yv+fAt4AfhXMVXTAG9CXLTaEf2fIsTeALPKwcgG6QVIT2Q6R4ZNbdjx/I5M8TlqjfH46/LJqBlmqQfcBTgXOIf4InkWsJ0oV8WUdz1i1l2TEylipg9yrMG7VN/T'+
			'VZKa03ioGmUQ/rp8I2qGLnvAAhLb+Aa6jvr+ITKne4bOyPJvIgEWNxU/b0LMRfsgveehyD7Xodgql41l5JoA/Aap4POAv4Z8nnrArLs8hqkDRNFr7krzpm3IIuBEoj3kbtghN3Yqc0/aQYLyxMew31PumEjpkLergKuQjT9xsR1tgHGR6wZYQNQbQQ1vA3AZcmhf3JhxX8qd1+YiSlVe2B1/Xa5xK054ugN3E9z4/oREaEoK03zUnGBZtU7si5A06A48gt3wNiMql6RZbJRbzhFBKc2n8dflf92KU54CwT3fcsRJNA2eNMo+KqVya5GjiVkRnbQt+Ebs/QMLkbNz0/Iyecu4rlnzUQqYdfda1AyTbIATkYWFl4XAWESPF5WwUeWXGtdxxHuuV8y6C2NXd8J+2KqW5cDeMZYRVl1yuiFHLQYTSovH8NflV92KE0xQ6L'+
			'PNVDbn640EDb+M0orosA1whCHLanRHVzU0kIBDahJMxl50VLra9f6n/aXEd8Lq6xqwe+O0FkC1xIH463AtGfQn7YP0MKaer1K8yuMNMchlDh2XxJBnvfE9/HX4QByZxt2CL8XvWLAR+E4V+dzr+X1mJImEvxvXsWwprDPMXXCznUjRBbtgu1SZq+CwNALHIcGAGmOQzVSgbibHnhwO6I29MT1zcaPNLnoVydh2q6GAP8hQO+IKpoTjHPx1Z6q2MsEC/EJe5VYci5/jl+8fbsXJFaY16UduxbE5GNtNp5xLVS/kxPHNwG+JZ6jtCjM+zA7UMSEMg/Hvy2kjg1tVb8X/csME/Z5m3HNcYtJ18k+jzNtTKDPv3Im/zp7q+utuMIffE0Pcc5Vxz4TEpOvkTKPMrcCeKZSbV/pjH991mlOJAuiHv4veTrgVZh9kv8VGZA9G'+
			'0kMwiDe0eUTDjSmUm1fMkW0J6bynivg6fiGfcytOWS7EL+8m9FTIIAZhq14mO5WoBD/GL+TNbsUpy87YveBDTiXKJqYTcQsZPahmJtHsvi4w54Lt1G/43SBOwK6fU51K1AUv4Bf0i27FCUUBmItf7jcQjX+904R9groZHTVTLMMv7ECn0oRnFHbcmHu7vKP2KSBOBt46aSXjXuRr8QtcbttjWE/mNPgp9lAzxalEbrkYuz6ucypRCFrxC5ynjd/dsZ1ntwKHuBTKEaOxdX7PkK0AVoHkuQGCKFvfwf8Ma8iot29CDMf2ZFpDvFsoEqPSITiLkQeOQIIceZ9jGclumM8Ke2OrpdpIxzQaC8vwC9/sUpgIXIk9/1lIbTfCvYFXsJ+7Wj9OJ5hqmDFuxYmEaXhvR3bz1eJwPBy758uDIcHCVER/2604kWgE7sF+KWuQeI'+
			'O1wmiCA4LeTQ53DF6D/yFucStOZLoBM7BfzjZgqkO54uJi7NVuR+PLpKmtHKYzwly34sRCI/Ar7JfUDtxHPi0mTdhKZu+wm7uer4O+2O5YvZxKFB9TsK0l7YhhPk+24xOwF4sdq93vuxMrPl7C/2AnuRUnVsZi73XuSLPItulxEMGh8TrmtblRtZTjFvwPF8um5QwxEHib4Be5GRnC9nImnU1/xJnU9OfzWjhyoWQOy0HYE/Y44zy7pj/BQ7E3bQXuwO2GncGIKilokdGOWK2uIwfmtWp4Gf/DTnMrTqz8BP+zmZH3zc/mIN7DacyFeyM+mE/Q9alSj5Nxr5aomBvTV5OdjelR6I193vClSNi3Fkq/8HZkCHwECU8yinhWmg1IoKDvIoGbtpaRoYUMbiRKgp7YduErnUoUD2bv9x7yrCDHFlxE+Ybonfg/hmwHvQg5'+
			'e20UMnTuijhy7FT8fXDxs6OL3729eK8ZIq1UWoL0wrnU7VWLqZTeSL4nu4OxJ/LXBHyvGzCJrg/fSSO1Ift2J5HB3Wtp0ITEhPFWyoNOJaqeAhJN1fss79DZ+5ViKBIGZCnpNbylSLiMzEUscMFZ2BV0rlOJqiPIO7jSbYkjgMuRECTrAvKrNq1FVF0XksEoVZWQhPmlgKzIDvf8bStizH8pgfKS4FAk/t3Onr/NRo54aK8yzwYkyPcByFklg5HpyZ6INakBGUG2I3uV1yNTmI3IfG5p8edi4FU6T3RXAhiE/R+/AjnNMus0Yyud16HDW+74GrZeaiFy3lhWGYCcfWEOeRNdCqVUz3Tsl/kK2ewJBxG8cPiZS6GUaBSA32O/1JWIjisrfJ5gW+8McuympAjdgYexX+4W5ERy10wh2HZ6P3WmxK1luhPcE7YjgYFcDM'+
			'n7Ao+WkGkm2vhqjgIyJwwymG8CfgD0SEGOHsC1xTKDGt/1VD/s7oHoCu8C5iNms9ZiWlP8211IgPR+VZahROREbON+R1oDXE35vcXV0BcJJVfKuXQ9cHKVeY9BnA62l8g7KG1HHFoPq7JMJQLNiLK61MtpRV7ORKLtv2hCGtVD2BEcvOkJ5IDFShmMeKREtWw8TH73U+eWAhKnr5SncUf6EJiHePiei7jIe71HGpFwv82I9WUy8EvgWcr3SKsQX7pqhtxJyDFiURtfR3ofOKUKOZSI9EaG3bBuRnGkdchwXM6xoBRXd5H3K4gzwpGIY0KPYhpW/Nt0YFGJe9uoLUfeXNETcdw0NzjFmRYhBxVGOaarVOObi/TOYRkHPF8iL22EjjkQiV7/Il27v4dJC5BNQ5+LQa5JAfm3IvrMaobxAnA+9vy0jToZjvOg5d8dWWWO'+
			'QFyPhiDzvyak12xE5mJbEYeHlUhP929k7vh2THIMBv6Dv/d8F9mC+nTEvA9H/Ca9q/8NyCGLyyPmrdQI5mq3lXgDMR2OvfNuVoz5KzlmDPbQm4QZ8YKAckYnUI6SM8zoAnNJzpl3HtoLKh72wNYnVrLarZRxRlkf4D+FXqkzzsbfIBamUKapJ/xmCmU6ocG1ADngcOP6kRTKfNi4HpdCmU7QBlieEcZ1GqcGmWWYMtQM2gDL02xcr0yhTLMMUwaljjCtFNXajyuhp1HmthTKdIL2gJWThvWobt5L3TxoBDYY12kEojTLeD+FMp2gDbA8y4zrNPavmGWYMtQM2gDL87JxPT6FMs0yTBmUOmIytk9h0iw2yvxGCmUqGaUftpfKuATLOwLbFJflcCZKCpgb658nOWeE+UZZeY2vqMTIYdhuUucnUM7UgHJq6Yw6JQKmS1'+
			'Yrtp04CmOxh3rt/ZSPaEb0cd4GspZ4GuFY7NMr1yPhQxTlI07BDi3SigQ4qnZT0lTsnq8NOQRSUSymEbz7bj6ygg3LaOTIrKC8rohRXqUGmUbpU4kWIZvPj0I2o/dAnAuGFf92A7aez9vz1cLZKkoKnIw9J4yS1qPDrlIhA5FNQ1Eb3wPogkOJwGikIZY7UdO0cDxInev58hAZIU/0BY5FTHUjEdVNx4mZG5Az5RYi4eAeRdQ4iqIoiqIoiqIoiqIoiqIoiqIoiqIoiqIoiqIoiqIoueb/xaF+PEWdjlIAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 2";
		el.ggDx=0;
		el.ggDy=-6;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.8;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_22.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_22.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._blower.appendChild(me._image_22);
		el=me._text_13=document.createElement('div');
		els=me._text_13__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : 1px;';
		hs+='height : 17px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: 60px;';
		hs+='height: 17px;';
		hs+='pointer-events: none;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(72,72,72,1);';
		hs+='font-size: 11px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Blower";
		el.appendChild(els);
		me._text_13.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_13.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._blower.appendChild(me._text_13);
		me._scrollarea_1__content.appendChild(me._blower);
		el=me._cascada=document.createElement('div');
		el.ggId="Cascada";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.00392157);';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : 400px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._cascada.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._cascada.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseDown['cascada'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getVariableValue('versionesescalar') == true))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._cascada.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._cascada.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._cascada.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms';
				if (me._cascada.ggCurrentLogicStateScaling == 0) {
					me._cascada.ggParameter.sx = 0.9;
					me._cascada.ggParameter.sy = 0.9;
					me._cascada.style[domTransform]=parameterToTransform(me._cascada.ggParameter);
				}
				else if (me._cascada.ggCurrentLogicStateScaling == 1) {
					me._cascada.ggParameter.sx = 0.5;
					me._cascada.ggParameter.sy = 0.5;
					me._cascada.style[domTransform]=parameterToTransform(me._cascada.ggParameter);
				}
				else {
					me._cascada.ggParameter.sx = 1;
					me._cascada.ggParameter.sy = 1;
					me._cascada.style[domTransform]=parameterToTransform(me._cascada.ggParameter);
				}
			}
		}
		me._cascada.onmouseout=function (e) {
			me.elementMouseDown['cascada']=false;
			me._cascada.logicBlock_scaling();
		}
		me._cascada.onmousedown=function (e) {
			me.elementMouseDown['cascada']=true;
			me._cascada.logicBlock_scaling();
		}
		me._cascada.onmouseup=function (e) {
			me.elementMouseDown['cascada']=false;
			me._cascada.logicBlock_scaling();
		}
		me._cascada.ontouchend=function (e) {
			me.elementMouseDown['cascada']=false;
			me._cascada.logicBlock_scaling();
		}
		me._cascada.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_21=document.createElement('div');
		els=me._image_21__img=document.createElement('img');
		els.className='ggskin ggskin_image_21';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAB4ElEQVR4nO2az07CQBCHP//gTYjxHVTgMTx4k3jQNzLGBMGE1/BujE9BEPUqPoHAyZrgYWuC29Lalu1s7HzJHiizO7/9MSxLMqAoiqIoSpVZpIw58AT0gJaQxiTaQB+jcU76fiKkTVgeX8AtUHO1mwzsAAOMpix7iJBl8s94QNaEHeAxRldpBiwwlSDFIEFXZgPS2AU6wLO1UAA0C2wiL22iZT8GTkOtzmgAL1biG5cJV9Anuvl6WcnPrOSjshIvMbY0dMpMXreST8tMHjK1NBQq+40cc+yDJM8aRdZfa/7NIpP/A2qAtABpth2s6fqMWCuVrwA1QFqANGqAtABp1ABpAdK4uAekkXZPKPXeUPkKUAOkBUjj4gzw+u5vU/kKUAOkBUijBkgLkEYNkB'+
			'YgjcR/Aa/uCZWvADVAWoCiKIpvZGlAaFixvsWnNnDE/QpMrNfHCfNPYp75FP+WELuSHr9dfAX2YuL2gXein5BP8d2UvcbSItqGNgHOMT1CdeBihTif4gPgKI8BYJog8zYi+jIKtfDVMO2wf012Fw5f4u9ZQytvDdOUGCQk+gQuga1wXIXPpOIDzBm21j7mJqacRsAM+ACGwDVwEBN/GL43DGNdx89CbV0KfOcVRVEURake3866fJItUXvTAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 2";
		el.ggDx=0;
		el.ggDy=-6;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.2;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_21.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_21.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._cascada.appendChild(me._image_21);
		el=me._text_12=document.createElement('div');
		els=me._text_12__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : 1px;';
		hs+='height : 17px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.4;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: 60px;';
		hs+='height: 17px;';
		hs+='pointer-events: none;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(72,72,72,1);';
		hs+='font-size: 11px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Cascada";
		el.appendChild(els);
		me._text_12.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_12.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._cascada.appendChild(me._text_12);
		me._scrollarea_1__content.appendChild(me._cascada);
		el=me._cabeceros=document.createElement('div');
		el.ggId="Cabeceros";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.00392157);';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : 480px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._cabeceros.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._cabeceros.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseDown['cabeceros'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getVariableValue('versionesescalar') == true))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._cabeceros.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._cabeceros.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._cabeceros.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms';
				if (me._cabeceros.ggCurrentLogicStateScaling == 0) {
					me._cabeceros.ggParameter.sx = 0.9;
					me._cabeceros.ggParameter.sy = 0.9;
					me._cabeceros.style[domTransform]=parameterToTransform(me._cabeceros.ggParameter);
				}
				else if (me._cabeceros.ggCurrentLogicStateScaling == 1) {
					me._cabeceros.ggParameter.sx = 0.5;
					me._cabeceros.ggParameter.sy = 0.5;
					me._cabeceros.style[domTransform]=parameterToTransform(me._cabeceros.ggParameter);
				}
				else {
					me._cabeceros.ggParameter.sx = 1;
					me._cabeceros.ggParameter.sy = 1;
					me._cabeceros.style[domTransform]=parameterToTransform(me._cabeceros.ggParameter);
				}
			}
		}
		me._cabeceros.onmouseout=function (e) {
			me.elementMouseDown['cabeceros']=false;
			me._cabeceros.logicBlock_scaling();
		}
		me._cabeceros.onmousedown=function (e) {
			me.elementMouseDown['cabeceros']=true;
			me._cabeceros.logicBlock_scaling();
		}
		me._cabeceros.onmouseup=function (e) {
			me.elementMouseDown['cabeceros']=false;
			me._cabeceros.logicBlock_scaling();
		}
		me._cabeceros.ontouchend=function (e) {
			me.elementMouseDown['cabeceros']=false;
			me._cabeceros.logicBlock_scaling();
		}
		me._cabeceros.ggUpdatePosition=function (useTransition) {
		}
		el=me._activo0=document.createElement('div');
		el.ggId="activo";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._activo0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._activo0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('configurador') == "cabeceros"))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._activo0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._activo0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._activo0.style[domTransition]='';
				if (me._activo0.ggCurrentLogicStateVisible == 0) {
					me._activo0.style.visibility=(Number(me._activo0.style.opacity)>0||!me._activo0.style.opacity)?'inherit':'hidden';
					me._activo0.ggVisible=true;
				}
				else {
					me._activo0.style.visibility="hidden";
					me._activo0.ggVisible=false;
				}
			}
		}
		me._activo0.onclick=function (e) {
			player.setVariableValue('configurador', "0");
			player.moveToDefaultViewEx(3,3);
		}
		me._activo0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._cabeceros.appendChild(me._activo0);
		el=me._inactivo0=document.createElement('div');
		el.ggId="inactivo";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.00392157);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._inactivo0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._inactivo0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('configurador') != "cabeceros"))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._inactivo0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._inactivo0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._inactivo0.style[domTransition]='';
				if (me._inactivo0.ggCurrentLogicStateVisible == 0) {
					me._inactivo0.style.visibility=(Number(me._inactivo0.style.opacity)>0||!me._inactivo0.style.opacity)?'inherit':'hidden';
					me._inactivo0.ggVisible=true;
				}
				else {
					me._inactivo0.style.visibility="hidden";
					me._inactivo0.ggVisible=false;
				}
			}
		}
		me._inactivo0.onclick=function (e) {
			player.setVariableValue('configurador', "cabeceros");
			player.moveTo("0","-25","39","3.0000");
		}
		me._inactivo0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._cabeceros.appendChild(me._inactivo0);
		el=me._image_20=document.createElement('div');
		els=me._image_20__img=document.createElement('img');
		els.className='ggskin ggskin_image_20';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAD5klEQVRoge3ZT2wVVRTH8Q9/pLT0rxGloqFFY4LRBSou1ERNUBLjn4VuWYh7ozG60YVLExPiAlcsXBo3RokLjRUx0YCIwT8QFyLUgARBoSC0hSJ1cc9w33tMEV7T9x7J+yaTM7l37szvzJ25f86hTZs2ba4l5oXtxJt4Cv0YxXf4GiM40QRtlQxgLR7CGgxjDFsk3ROFIxvx8gw3+Rc7JYdGsAPnKuoX4L54wMo4lqADXTX3msLpOJ/ApPSSivOCMfTgZtyF1fGcMjbilcKRn6PBc9iN2/BIHPdjYUXDc3H9QalHH5Z6cS45L73MbfgK+6SX9wH24O5CYPHpHMP+OD6Psu4QuxaP407cG0fBT9glO3gU4yWCunEdFkm91hNl3eitufYsjmAvvseZmv'+
			'pbarSDzZjGqyUPL+jDh3HdNH7Di7j1Mm3mktdCx+bKwg1R+PEMjYbxa1xzAs+r/tyawRZJz4bKwlVReKikwQB+ifodGJpbfVfMIUnTqsrC+VE4VdLg7aj7waXfcTM5L+maX1nYEYWTJQ0WSEPz8jmXdnWclTQvqiwcjMK/mqGoTo5LmpeRu2U47IFmKKqTQusw2ZGhsPsbrWYW7Au7kmu7R0bDriA7siLs741WMwsKraWOjDZazSwYDVvlyLKwhxutZhb8EbZq1ComulMNl1M//4TtITvSXVN5LVDlSMGkNLl0NFxO/SyWNE+Qe2Q67LyyFi1KlebCkWNhlzZcTv3cEPZvsiNHw7bawvByXB/2BNmRvWFXN1xO/RQ708NkR7aHXdtwOfUzFPYA2ZFPpJ9nnZrhrIUp1oejZEcOSaGWJdJ+vFXZLQU9lotVr5IV+5NS'+
			'rxyR9umtyFY54LAnzi/5r2+XQz3va8055QVJ37fSJH5BXpVc5AnZkWm8o2Zj3wIslr6YQuPBsoveispd8sb+i2jcSrwuOzJSdsHOqHwGj0mz/WeNUncV9MuBh3drKwekONFZefi9SR4ZWo03JEe21lY8O1NFi9IrpR6mpSzCxZ95XdhW/JTKOIX34nw9ORC9JuxMPdKBO6TES6/qxMw5KXkzFnYKJ6WhcSZ64tl9UjKoS86xLIl7jksj1D4p2VTLp3gJD1Q6Uqwkj4ftwoN4NI571IQmr5AzcnZrofqWPxNS3HkbvsQ3kpNF6OpG8qT3kTRanZa6bamUkCm4IC0N/lQdH14s5R/7w3ZKb/T/nD4lveWTIXRcTtiMR/suKZkzrHpynpK2HX3SZLgltCOFVLbL4/P5eAub8LT6F5J90og4MIt79IaGTfhRjsJPh+ahsk'+
			'aD0pDbWedDG0GnpHGw2ULatGnTBP4DgTboSsTG9hUAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 2";
		el.ggDx=0;
		el.ggDy=-6;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.8;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_20.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_20.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._cabeceros.appendChild(me._image_20);
		el=me._text_11=document.createElement('div');
		els=me._text_11__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : 1px;';
		hs+='height : 17px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: 60px;';
		hs+='height: 17px;';
		hs+='pointer-events: none;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(72,72,72,1);';
		hs+='font-size: 11px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Cabeceros";
		el.appendChild(els);
		me._text_11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_11.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._cabeceros.appendChild(me._text_11);
		me._scrollarea_1__content.appendChild(me._cabeceros);
		el=me._separador=document.createElement('div');
		el.ggId="Separador";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #bbbbbb;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 45px;';
		hs+='left : 640px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 2px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._separador.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._separador.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._scrollarea_1__content.appendChild(me._separador);
		el=me._versiones=document.createElement('div');
		el.ggId="Versiones";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.00392157);';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : 560px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._versiones.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._versiones.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseDown['versiones'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._versiones.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._versiones.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._versiones.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms';
				if (me._versiones.ggCurrentLogicStateScaling == 0) {
					me._versiones.ggParameter.sx = 0.9;
					me._versiones.ggParameter.sy = 0.9;
					me._versiones.style[domTransform]=parameterToTransform(me._versiones.ggParameter);
				}
				else {
					me._versiones.ggParameter.sx = 1;
					me._versiones.ggParameter.sy = 1;
					me._versiones.style[domTransform]=parameterToTransform(me._versiones.ggParameter);
				}
			}
		}
		me._versiones.onmouseout=function (e) {
			me.elementMouseDown['versiones']=false;
			me._versiones.logicBlock_scaling();
		}
		me._versiones.onmousedown=function (e) {
			me.elementMouseDown['versiones']=true;
			me._versiones.logicBlock_scaling();
		}
		me._versiones.onmouseup=function (e) {
			me.elementMouseDown['versiones']=false;
			me._versiones.logicBlock_scaling();
		}
		me._versiones.ontouchend=function (e) {
			me.elementMouseDown['versiones']=false;
			me._versiones.logicBlock_scaling();
		}
		me._versiones.ggUpdatePosition=function (useTransition) {
		}
		el=me._activo=document.createElement('div');
		el.ggId="activo";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._activo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._activo.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('configurador') == "versiones"))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._activo.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._activo.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._activo.style[domTransition]='';
				if (me._activo.ggCurrentLogicStateVisible == 0) {
					me._activo.style.visibility=(Number(me._activo.style.opacity)>0||!me._activo.style.opacity)?'inherit':'hidden';
					me._activo.ggVisible=true;
				}
				else {
					me._activo.style.visibility="hidden";
					me._activo.ggVisible=false;
				}
			}
		}
		me._activo.onclick=function (e) {
			player.setVariableValue('configurador', "0");
			player.moveToDefaultViewEx(3,3);
		}
		me._activo.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._versiones.appendChild(me._activo);
		el=me._inactivo=document.createElement('div');
		el.ggId="inactivo";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.00392157);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._inactivo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._inactivo.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('configurador') != "versiones"))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._inactivo.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._inactivo.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._inactivo.style[domTransition]='';
				if (me._inactivo.ggCurrentLogicStateVisible == 0) {
					me._inactivo.style.visibility=(Number(me._inactivo.style.opacity)>0||!me._inactivo.style.opacity)?'inherit':'hidden';
					me._inactivo.ggVisible=true;
				}
				else {
					me._inactivo.style.visibility="hidden";
					me._inactivo.ggVisible=false;
				}
			}
		}
		me._inactivo.onclick=function (e) {
			player.setVariableValue('configurador', "versiones");
			player.moveToDefaultViewEx(3,0);
		}
		me._inactivo.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._versiones.appendChild(me._inactivo);
		el=me._image_2=document.createElement('div');
		els=me._image_2__img=document.createElement('img');
		els.className='ggskin ggskin_image_2';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAADSUlEQVRoge3ZTYgcRRQH8N/ujAbj6iXi5ykg4sGD6C2ILqIoKngQRNAYvehJUAkEcggkIp6CePKmEXPw42AOongSXBFMFL8C6ycIRhT8IAkmJHE346Fe0+3aPdPTO+keYf5QdHfVq/+r/+t6VT01zNAI89iNfbig26E0x4U4gEGU97Ch0xGNQA978QY2Rt0VOCQJ+AM/x/3rYT91mMcr8qi/jevxYzx/j2txDX6Nun2Ya3+o1ZjHy9LgjuL3uF+N6xI2FexvDLsBnm91pAX08AzOyKOflePYEuVk1H2uPB9uwokSjqryGc6blIhLpEQtc3QCiwXbe/A3zuLRCr7bcGoMMU9NQsQWHAnCI1JE98bzSdxa0ufxaD+DOyp478OKJPiRQv3lWI7+P8X1mL'+
			'R4NMZjOB1k74eTZ+P5NO4e0nePfNrdUGGzVcqnFdyPy3A4+n2NK6VVboD9TQRcjDflibtHypGiiLtGcMzhpbD/BZsr7J4Im1P4Ie6XpaDBVVIwzuKWcURcJ0VjgN9wZ9Tvlk+Xe2ty9fGOPMKbKuyek+dDUUSG7dH2VXCOxIP4KzodkkdxV9St4IGaIjJsxEfR/2Npty+ibDqtRR9fqJH4G/CiPCov4Pxo27kOERkuxXfBc0C+sxcTu+xNFLEoTa/KxO/JPyW6KqNEZNhvSOI/1LGIAXbUEEF6E8eUJH4P3xQI20bmd5x9Ykf0+aRYudW/I9M2ir7r7BPFnDqYVfbwrekQclSaLotDbCsXhoejMltNuhTyZFwPK/9ArBTRl7+Nd9UTsiD/jVGnLI0hpI8v4357XRGwrcL5JIV8MIYQuFmaXselz5KRIhQap2VqZXg1'+
			'nl9Tc7P8MBq3Sa91WoRk+8RA/gk/UG+zLCVsC2V+n/bfabouwjZQ5rcv5denFe1jE7aBUX6Hts9PfDgdYSZk2jATMm34vwhZaNJp2pbfOflx1MGS9rEJzzWq/GYHHn/i6kkQnmuU+b1dOrFZNfwkszZhG1jrd7P8r4mdkyBsC0W/C9JJ4gBvafhHUNdC5uSH1cvS2fO6CNtG5rdxclcRto3M72qUUSf8tQnbRvHHU6PkHkbYRWmc3Gux1KGIJVw0CREzzDDDDNONfwC3zei0u/sSuwAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 2";
		el.ggDx=0;
		el.ggDy=-6;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.8;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._versiones.appendChild(me._image_2);
		el=me._text_10=document.createElement('div');
		els=me._text_10__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : 1px;';
		hs+='height : 17px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: 60px;';
		hs+='height: 17px;';
		hs+='pointer-events: none;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(72,72,72,1);';
		hs+='font-size: 11px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Versiones";
		el.appendChild(els);
		me._text_10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_10.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._versiones.appendChild(me._text_10);
		me._scrollarea_1__content.appendChild(me._versiones);
		me._responsive_configurador.appendChild(me._scrollarea_1);
		el=me._svg_7=document.createElement('div');
		els=me._svg_7__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIxLjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEyOSAxMjk7IiB5PSIwcHgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBpZD0iTGF5ZXJfMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgdmlld0JveD0iMCAwIDEyOSAxMjkiIHhtbDpzcGFjZT0icH'+
			'Jlc2VydmUiPgogPHN0eWxlIHR5cGU9InRleHQvY3NzIj4mI3hkOwoJLnN0MHtmaWxsOiM4MjgyODI7fSYjeGQ7Cgkuc3Qxe2ZpbGw6IzZCNzM3Mzt9JiN4ZDsKPC9zdHlsZT4KIDxnPgogIDxnPgogICA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMzcuNSwxMjIuOWMtMS4yLDAtMi4zLTAuNS0zLjItMS4zYy0wLjgtMC44LTEuMy0yLTEuMy0zLjJjMC0xLjIsMC41LTIuMywxLjMtMy4ybDUwLjctNTAuN0wzNC4zLDEzLjgmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0wLjgtMC44LTEuMy0yLTEuMy0zLjJjMC0xLjIsMC41LTIuMywxLjMtMy4yYzAuOC0wLjgsMi0xLjMsMy4yLTEuM3MyLjMsMC41LDMu'+
			'MiwxLjNsNTMuOSw1My45YzAuOCwwLjgsMS4zLDIsMS4zLDMuMiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtzLTAuNSwyLjMtMS4zLDMuMmwtNTMuOSw1My45QzM5LjgsMTIyLjQsMzguNywxMjIuOSwzNy41LDEyMi45eiIvPgogICA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMzcuNSw2LjVjMSwwLDIuMSwwLjQsMi45LDEuMmw1My45LDUzLjljMS42LDEuNiwxLjYsNC4yLDAsNS44bC01My45LDUzLjljLTAuOCwwLjgtMS44LDEuMi0yLjksMS4yJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMS4xLDAtMi4xLTAuNC0yLjktMS4yYy0xLjYtMS42LTEuNi00LjIsMC01LjhsNTEtNTFsLTUxLTUxYy0xLj'+
			'YtMS42LTEuNi00LjIsMC01LjhDMzUuNCw2LjksMzYuNCw2LjUsMzcuNSw2LjUgTTM3LjUsNS44JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMS4zLDAtMi41LDAuNS0zLjQsMS40Yy0xLjksMS45LTEuOSw1LDAsNi45bDUwLjUsNTAuNUwzNC4xLDExNWMtMS45LDEuOS0xLjksNSwwLDYuOWMwLjksMC45LDIuMSwxLjQsMy40LDEuNHMyLjUtMC41LDMuNC0xLjQmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7bDUzLjktNTMuOWMxLjktMS45LDEuOS01LDAtNi45TDQwLjksNy4yQzQwLDYuMywzOC44LDUuOCwzNy41LDUuOEwzNy41LDUuOHoiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._svg_7__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 7";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 60px;';
		hs+='opacity : 0.8;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 20px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_7.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width < 640))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._svg_7.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._svg_7.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._svg_7.style[domTransition]='opacity 500ms ease 0ms';
				if (me._svg_7.ggCurrentLogicStateVisible == 0) {
					me._svg_7.style.visibility=(Number(me._svg_7.style.opacity)>0||!me._svg_7.style.opacity)?'inherit':'hidden';
					me._svg_7.ggVisible=true;
				}
				else {
					me._svg_7.style.visibility="hidden";
					me._svg_7.ggVisible=false;
				}
			}
		}
		me._svg_7.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('ticker') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._svg_7.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._svg_7.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._svg_7.style[domTransition]='opacity 500ms ease 0ms';
				if (me._svg_7.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._svg_7.style.opacity == 0.0) { me._svg_7.style.visibility="hidden"; } }, 505);
					me._svg_7.style.opacity=0;
				}
				else {
					me._svg_7.style.visibility=me._svg_7.ggVisible?'inherit':'hidden';
					me._svg_7.style.opacity=0.8;
				}
			}
		}
		me._svg_7.ggUpdatePosition=function (useTransition) {
		}
		me._responsive_configurador.appendChild(me._svg_7);
		el=me._on_off=document.createElement('div');
		el.ggId="On off";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._on_off.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._on_off.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseDown['on_off'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._on_off.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._on_off.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._on_off.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms';
				if (me._on_off.ggCurrentLogicStateScaling == 0) {
					me._on_off.ggParameter.sx = 0.9;
					me._on_off.ggParameter.sy = 0.9;
					me._on_off.style[domTransform]=parameterToTransform(me._on_off.ggParameter);
				}
				else {
					me._on_off.ggParameter.sx = 1;
					me._on_off.ggParameter.sy = 1;
					me._on_off.style[domTransform]=parameterToTransform(me._on_off.ggParameter);
				}
			}
		}
		me._on_off.onclick=function (e) {
			player.setVariableValue('Prendido', !player.getVariableValue('Prendido'));
		}
		me._on_off.onmouseout=function (e) {
			me.elementMouseDown['on_off']=false;
			me._on_off.logicBlock_scaling();
		}
		me._on_off.onmousedown=function (e) {
			me.elementMouseDown['on_off']=true;
			me._on_off.logicBlock_scaling();
		}
		me._on_off.onmouseup=function (e) {
			me.elementMouseDown['on_off']=false;
			me._on_off.logicBlock_scaling();
		}
		me._on_off.ontouchend=function (e) {
			me.elementMouseDown['on_off']=false;
			me._on_off.logicBlock_scaling();
		}
		me._on_off.ggUpdatePosition=function (useTransition) {
		}
		el=me._off=document.createElement('div');
		els=me._off__img=document.createElement('img');
		els.className='ggskin ggskin_off';
		hs=basePath + 'images/off.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="off";
		el.ggDx=0;
		el.ggDy=-6;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.8;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._off.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._off.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('Prendido') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._off.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._off.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._off.style[domTransition]='';
				if (me._off.ggCurrentLogicStateVisible == 0) {
					me._off.style.visibility=(Number(me._off.style.opacity)>0||!me._off.style.opacity)?'inherit':'hidden';
					me._off.ggVisible=true;
				}
				else {
					me._off.style.visibility="hidden";
					me._off.ggVisible=false;
				}
			}
		}
		me._off.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._on_off.appendChild(me._off);
		el=me._on=document.createElement('div');
		els=me._on__img=document.createElement('img');
		els.className='ggskin ggskin_on';
		hs=basePath + 'images/on.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="on";
		el.ggDx=0;
		el.ggDy=-6;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.8;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._on.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._on.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('Prendido') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._on.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._on.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._on.style[domTransition]='';
				if (me._on.ggCurrentLogicStateVisible == 0) {
					me._on.style.visibility=(Number(me._on.style.opacity)>0||!me._on.style.opacity)?'inherit':'hidden';
					me._on.ggVisible=true;
				}
				else {
					me._on.style.visibility="hidden";
					me._on.ggVisible=false;
				}
			}
		}
		me._on.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._on_off.appendChild(me._on);
		el=me._text_1=document.createElement('div');
		els=me._text_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 17px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: 60px;';
		hs+='height: 17px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(72,72,72,1);';
		hs+='font-size: 11px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="On\/Off";
		el.appendChild(els);
		me._text_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._on_off.appendChild(me._text_1);
		me._responsive_configurador.appendChild(me._on_off);
		el=me._cta=document.createElement('div');
		el.ggId="CTA";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #3aa5a7;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 120px;';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 140px;';
		hs+='pointer-events:auto;';
		hs+='-webkit-box-shadow: 3px 3px 6px 0px rgba(0,0,0,0.31); -moz-box-shadow: 3px 3px 6px 0px rgba(0,0,0,0.31); box-shadow: 3px 3px 6px 0px rgba(0,0,0,0.31);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._cta.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._cta.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('configurador') == "0"))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._cta.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._cta.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._cta.style[domTransition]='right 500ms ease 0ms, bottom 500ms ease 0ms';
				if (me._cta.ggCurrentLogicStatePosition == 0) {
					me._cta.style.right='0px';
					me._cta.style.bottom='60px';
				}
				else {
					me._cta.style.right='0px';
					me._cta.style.bottom='120px';
				}
			}
		}
		me._cta.onclick=function (e) {
			player.setVariableValue('INFO', true);
		}
		me._cta.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_2=document.createElement('div');
		els=me._text_2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : 15px;';
		hs+='position : absolute;';
		hs+='top : 11px;';
		hs+='visibility : inherit;';
		hs+='width : 114px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 114px;';
		hs+='height: 25px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Cotizar";
		el.appendChild(els);
		me._text_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_2.ggUpdatePosition=function (useTransition) {
		}
		me._cta.appendChild(me._text_2);
		me._responsive_configurador.appendChild(me._cta);
		me.divSkin.appendChild(me._responsive_configurador);
		el=me._hotspotson=document.createElement('div');
		el.ggId="hotspotson";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0,sy:0 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 60px;';
		hs+='border-radius : 60px;';
		hs+='border : 1px solid #00c2c9;';
		hs+='bottom : 210px;';
		hs+='cursor : pointer;';
		hs+='height : 38px;';
		hs+='position : absolute;';
		hs+='right : -60px;';
		hs+='visibility : inherit;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._hotspotson.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._hotspotson.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('Interfaz') == true)) && 
				((player.getViewerSize().width < 900))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getVariableValue('Interfaz') == true)) && 
				((player.getViewerSize().width > 900))
			)
			{
				newLogicStatePosition = 1;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._hotspotson.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._hotspotson.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._hotspotson.style[domTransition]='right 1000ms ease 0ms, bottom 1000ms ease 0ms, ' + cssPrefix + 'transform 500ms ease 0ms, ' + cssPrefix + 'transform 500ms ease 0ms';
				if (me._hotspotson.ggCurrentLogicStatePosition == 0) {
					me._hotspotson.style.right='15px';
					me._hotspotson.style.bottom='210px';
				}
				else if (me._hotspotson.ggCurrentLogicStatePosition == 1) {
					me._hotspotson.style.right='30px';
					me._hotspotson.style.bottom='210px';
				}
				else {
					me._hotspotson.style.right='-60px';
					me._hotspotson.style.bottom='210px';
				}
			}
		}
		me._hotspotson.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('infohotspots') == false)) && 
				((player.getViewerSize().width < 900))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getVariableValue('infohotspots') == false)) && 
				((player.getViewerSize().width > 900))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._hotspotson.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._hotspotson.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._hotspotson.style[domTransition]='right 1000ms ease 0ms, bottom 1000ms ease 0ms, ' + cssPrefix + 'transform 500ms ease 0ms, ' + cssPrefix + 'transform 500ms ease 0ms';
				if (me._hotspotson.ggCurrentLogicStateScaling == 0) {
					me._hotspotson.ggParameter.sx = 1.3;
					me._hotspotson.ggParameter.sy = 1.3;
					me._hotspotson.style[domTransform]=parameterToTransform(me._hotspotson.ggParameter);
				}
				else if (me._hotspotson.ggCurrentLogicStateScaling == 1) {
					me._hotspotson.ggParameter.sx = 2;
					me._hotspotson.ggParameter.sy = 2;
					me._hotspotson.style[domTransform]=parameterToTransform(me._hotspotson.ggParameter);
				}
				else {
					me._hotspotson.ggParameter.sx = 0;
					me._hotspotson.ggParameter.sy = 0;
					me._hotspotson.style[domTransform]=parameterToTransform(me._hotspotson.ggParameter);
				}
			}
		}
		me._hotspotson.logicBlock_angle = function() {
			var newLogicStateAngle;
			if (
				((player.getVariableValue('infohotspots') == false))
			)
			{
				newLogicStateAngle = 0;
			}
			else {
				newLogicStateAngle = -1;
			}
			if (me._hotspotson.ggCurrentLogicStateAngle != newLogicStateAngle) {
				me._hotspotson.ggCurrentLogicStateAngle = newLogicStateAngle;
				me._hotspotson.style[domTransition]='right 1000ms ease 0ms, bottom 1000ms ease 0ms, ' + cssPrefix + 'transform 500ms ease 0ms, ' + cssPrefix + 'transform 500ms ease 0ms';
				if (me._hotspotson.ggCurrentLogicStateAngle == 0) {
					me._hotspotson.ggParameter.a = 360;
					me._hotspotson.style[domTransform]=parameterToTransform(me._hotspotson.ggParameter);
				}
				else {
					me._hotspotson.ggParameter.a = 0;
					me._hotspotson.style[domTransform]=parameterToTransform(me._hotspotson.ggParameter);
				}
			}
		}
		me._hotspotson.onclick=function (e) {
			player.setVariableValue('infohotspots', true);
		}
		me._hotspotson.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_23=document.createElement('div');
		el.ggId="Rectangle 2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 60px;';
		hs+='border-radius : 60px;';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #00c2c9;';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_23.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_23.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseDown['rectangle_23'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._rectangle_23.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._rectangle_23.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._rectangle_23.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms';
				if (me._rectangle_23.ggCurrentLogicStateScaling == 0) {
					me._rectangle_23.ggParameter.sx = 0.8;
					me._rectangle_23.ggParameter.sy = 0.8;
					me._rectangle_23.style[domTransform]=parameterToTransform(me._rectangle_23.ggParameter);
				}
				else {
					me._rectangle_23.ggParameter.sx = 1;
					me._rectangle_23.ggParameter.sy = 1;
					me._rectangle_23.style[domTransform]=parameterToTransform(me._rectangle_23.ggParameter);
				}
			}
		}
		me._rectangle_23.onmouseout=function (e) {
			me.elementMouseDown['rectangle_23']=false;
			me._rectangle_23.logicBlock_scaling();
		}
		me._rectangle_23.onmousedown=function (e) {
			me.elementMouseDown['rectangle_23']=true;
			me._rectangle_23.logicBlock_scaling();
		}
		me._rectangle_23.onmouseup=function (e) {
			me.elementMouseDown['rectangle_23']=false;
			me._rectangle_23.logicBlock_scaling();
		}
		me._rectangle_23.ontouchend=function (e) {
			me.elementMouseDown['rectangle_23']=false;
			me._rectangle_23.logicBlock_scaling();
		}
		me._rectangle_23.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._svg_60=document.createElement('div');
		els=me._svg_60__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJz8+Cjxzdmcgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzk2LjgxOSAzOTYuODE5OyIgeT0iMHB4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjUxMnB4IiBpZD0iQ2FwYV8xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB2aWV3Qm94PSIwIDAgMzk2LjgxOSAzOTYuODE5IiB4bWw6c3BhY2U9InByZXNlcnZlIiBoZWlnaHQ9IjUxMnB4Ij4KIDxnPgogIDxnPgogICA8Zz4KICAgIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgY2xhc3M9ImFjdGl2ZS'+
			'1wYXRoIiBkPSJNMzUyLjEwMyw0NC42NzljLTU5LjIzNy01OS40MDEtMTU1LjQxMi01OS41MzUtMjE0LjgxMy0wLjI5OGMtNTcuMzE2LDU3LjE1Ny01OS43NDEsMTQ5LjIxOC01LjUxNSwyMDkuMzE0bC0xMS42LDExLjYgICAgYy05LjM3Mi05LjM3My0yNC41NjgtOS4zNzUtMzMuOTQxLTAuMDAzYy0wLjAwMSwwLjAwMS0wLjAwMiwwLjAwMi0wLjAwMywwLjAwM2wtNzkuMiw3OS4yICAgIGMtOS4zNzMsOS4zNzItOS4zNzUsMjQuNTY4LTAuMDAzLDMzLjk0MWMwLjAwMSwwLjAwMSwwLjAwMiwwLjAwMiwwLjAwMywwLjAwM2wxMS4zMTIsMTEuMzEyYzkuMzcyLDkuMzY5LDI0LjU2NCw5LjM2OSwzMy45'+
			'MzYsMCAgICBsNzkuMi03OS4yYzkuMzczLTkuMzcyLDkuMzc1LTI0LjU2OCwwLjAwMy0zMy45NDFjLTAuMDAxLTAuMDAxLTAuMDAyLTAuMDAyLTAuMDAzLTAuMDAzbDExLjYtMTEuNiAgICBjNjIuMjQsNTYuMjQ3LDE1OC4yOTIsNTEuMzg4LDIxNC41MzktMTAuODUxQzQxMS45NDgsMTk0LjAzNyw0MDkuNTIxLDEwMS44NTYsMzUyLjEwMyw0NC42Nzl6IE0xMjAuMTc1LDI5OS4yMzFsLTc5LjIsNzkuMiAgICBjLTMuMTI0LDMuMTIzLTguMTg4LDMuMTIzLTExLjMxMiwwbC0xMS4zMTItMTEuMzJjLTMuMTE4LTMuMTIzLTMuMTE4LTguMTgxLDAtMTEuMzA0bDc5LjItNzkuMmMzLjE2NC0zLjAyNSw4Lj'+
			'E0OC0zLjAyNSwxMS4zMTIsMCAgICBsMTEuMzEyLDExLjMyQzEyMy4yOTMsMjkxLjA1LDEyMy4yOTMsMjk2LjEwOCwxMjAuMTc1LDI5OS4yMzF6IE0zNDAuNzk5LDI0OC4zMjdjLTUzLjExMiw1My4xMS0xMzkuMjIzLDUzLjEwOS0xOTIuMzMzLTAuMDAzICAgIHMtNTMuMTA5LTEzOS4yMjMsMC4wMDMtMTkyLjMzM2M1My4xMTEtNTMuMTA5LDEzOS4yMTktNTMuMTA5LDE5Mi4zMywwQzM5My44MjQsMTA5LjEzOSwzOTMuODI0LDE5NS4xNzksMzQwLjc5OSwyNDguMzI3eiIgZmlsbD0iIzAwYzJjOSIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiLz4KICAgPC9n'+
			'PgogIDwvZz4KICA8Zz4KICAgPGc+CiAgICA8cGF0aCBmaWxsLW9wYWNpdHk9IjEiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZD0iTTMyOS40NzksNjcuMzAzTDMyOS40NzksNjcuMzAzbC0xMS4zMTIsMTEuMzEyYzQwLjU0NSw0MC42NDQsNDAuNTQ1LDEwNi40MzYsMCwxNDcuMDhsMTEuMzEyLDExLjMxMiAgICBDMzc2LjI3NSwxOTAuMTE3LDM3Ni4yNzUsMTE0LjE5MywzMjkuNDc5LDY3LjMwM3oiIGZpbGw9IiMwMGMyYzkiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIi8+CiAgIDwvZz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._svg_60__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 6";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 17px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 17px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_60.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_60.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._rectangle_23.appendChild(me._svg_60);
		me._hotspotson.appendChild(me._rectangle_23);
		me.divSkin.appendChild(me._hotspotson);
		el=me._hotspotsoff=document.createElement('div');
		el.ggId="hotspotsoff";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0,sy:0 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 60px;';
		hs+='border-radius : 60px;';
		hs+='border : 1px solid #00c2c9;';
		hs+='bottom : 210px;';
		hs+='cursor : pointer;';
		hs+='height : 38px;';
		hs+='position : absolute;';
		hs+='right : -60px;';
		hs+='visibility : inherit;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._hotspotsoff.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._hotspotsoff.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('Interfaz') == true)) && 
				((player.getViewerSize().width < 900))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getVariableValue('Interfaz') == true)) && 
				((player.getViewerSize().width > 900))
			)
			{
				newLogicStatePosition = 1;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._hotspotsoff.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._hotspotsoff.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._hotspotsoff.style[domTransition]='right 1000ms ease 0ms, bottom 1000ms ease 0ms, ' + cssPrefix + 'transform 500ms ease 0ms, ' + cssPrefix + 'transform 500ms ease 0ms';
				if (me._hotspotsoff.ggCurrentLogicStatePosition == 0) {
					me._hotspotsoff.style.right='22px';
					me._hotspotsoff.style.bottom='210px';
				}
				else if (me._hotspotsoff.ggCurrentLogicStatePosition == 1) {
					me._hotspotsoff.style.right='60px';
					me._hotspotsoff.style.bottom='210px';
				}
				else {
					me._hotspotsoff.style.right='-60px';
					me._hotspotsoff.style.bottom='210px';
				}
			}
		}
		me._hotspotsoff.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('infohotspots') == true)) && 
				((player.getViewerSize().width < 900))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getVariableValue('infohotspots') == true)) && 
				((player.getViewerSize().width > 900))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._hotspotsoff.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._hotspotsoff.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._hotspotsoff.style[domTransition]='right 1000ms ease 0ms, bottom 1000ms ease 0ms, ' + cssPrefix + 'transform 500ms ease 0ms, ' + cssPrefix + 'transform 500ms ease 0ms';
				if (me._hotspotsoff.ggCurrentLogicStateScaling == 0) {
					me._hotspotsoff.ggParameter.sx = 1.3;
					me._hotspotsoff.ggParameter.sy = 1.3;
					me._hotspotsoff.style[domTransform]=parameterToTransform(me._hotspotsoff.ggParameter);
				}
				else if (me._hotspotsoff.ggCurrentLogicStateScaling == 1) {
					me._hotspotsoff.ggParameter.sx = 2;
					me._hotspotsoff.ggParameter.sy = 2;
					me._hotspotsoff.style[domTransform]=parameterToTransform(me._hotspotsoff.ggParameter);
				}
				else {
					me._hotspotsoff.ggParameter.sx = 0;
					me._hotspotsoff.ggParameter.sy = 0;
					me._hotspotsoff.style[domTransform]=parameterToTransform(me._hotspotsoff.ggParameter);
				}
			}
		}
		me._hotspotsoff.logicBlock_angle = function() {
			var newLogicStateAngle;
			if (
				((player.getVariableValue('infohotspots') == true))
			)
			{
				newLogicStateAngle = 0;
			}
			else {
				newLogicStateAngle = -1;
			}
			if (me._hotspotsoff.ggCurrentLogicStateAngle != newLogicStateAngle) {
				me._hotspotsoff.ggCurrentLogicStateAngle = newLogicStateAngle;
				me._hotspotsoff.style[domTransition]='right 1000ms ease 0ms, bottom 1000ms ease 0ms, ' + cssPrefix + 'transform 500ms ease 0ms, ' + cssPrefix + 'transform 500ms ease 0ms';
				if (me._hotspotsoff.ggCurrentLogicStateAngle == 0) {
					me._hotspotsoff.ggParameter.a = 360;
					me._hotspotsoff.style[domTransform]=parameterToTransform(me._hotspotsoff.ggParameter);
				}
				else {
					me._hotspotsoff.ggParameter.a = 0;
					me._hotspotsoff.style[domTransform]=parameterToTransform(me._hotspotsoff.ggParameter);
				}
			}
		}
		me._hotspotsoff.onclick=function (e) {
			player.setVariableValue('infohotspots', false);
		}
		me._hotspotsoff.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_22=document.createElement('div');
		el.ggId="Rectangle 2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 60px;';
		hs+='border-radius : 60px;';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #00c2c9;';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_22.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_22.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseDown['rectangle_22'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._rectangle_22.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._rectangle_22.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._rectangle_22.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms';
				if (me._rectangle_22.ggCurrentLogicStateScaling == 0) {
					me._rectangle_22.ggParameter.sx = 0.8;
					me._rectangle_22.ggParameter.sy = 0.8;
					me._rectangle_22.style[domTransform]=parameterToTransform(me._rectangle_22.ggParameter);
				}
				else {
					me._rectangle_22.ggParameter.sx = 1;
					me._rectangle_22.ggParameter.sy = 1;
					me._rectangle_22.style[domTransform]=parameterToTransform(me._rectangle_22.ggParameter);
				}
			}
		}
		me._rectangle_22.onclick=function (e) {
			player.setVariableValue('infohotspots', true);
		}
		me._rectangle_22.onmouseout=function (e) {
			me.elementMouseDown['rectangle_22']=false;
			me._rectangle_22.logicBlock_scaling();
		}
		me._rectangle_22.onmousedown=function (e) {
			me.elementMouseDown['rectangle_22']=true;
			me._rectangle_22.logicBlock_scaling();
		}
		me._rectangle_22.onmouseup=function (e) {
			me.elementMouseDown['rectangle_22']=false;
			me._rectangle_22.logicBlock_scaling();
		}
		me._rectangle_22.ontouchend=function (e) {
			me.elementMouseDown['rectangle_22']=false;
			me._rectangle_22.logicBlock_scaling();
		}
		me._rectangle_22.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._svg_6=document.createElement('div');
		els=me._svg_6__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJz8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNTEycHgiIHZpZXdCb3g9IjAgMCA0MjYuNjY2NjcgNDI2LjY2NjY3IiBoZWlnaHQ9IjUxMnB4Ij4KIDxnPgogIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkPSJtNDA1LjMzMjAzMSAxOTJoLTE3MC42NjQwNjJ2LTE3MC42Njc5NjljMC0xMS43NzM0MzctOS41NTg1OTQtMjEuMzMyMDMxLTIxLjMzNTkzOC0yMS4zMzIwMzEtMTEuNzczNDM3IDAtMjEuMzMyMDMxIDkuNTU4NTk0LTIxLjMzMjAzMSAyMS4zMzIwMzF2MTcwLjY2Nzk2OWgtMTcwLj'+
			'Y2Nzk2OWMtMTEuNzczNDM3IDAtMjEuMzMyMDMxIDkuNTU4NTk0LTIxLjMzMjAzMSAyMS4zMzIwMzEgMCAxMS43NzczNDQgOS41NTg1OTQgMjEuMzM1OTM4IDIxLjMzMjAzMSAyMS4zMzU5MzhoMTcwLjY2Nzk2OXYxNzAuNjY0MDYyYzAgMTEuNzc3MzQ0IDkuNTU4NTk0IDIxLjMzNTkzOCAyMS4zMzIwMzEgMjEuMzM1OTM4IDExLjc3NzM0NCAwIDIxLjMzNTkzOC05LjU1ODU5NCAyMS4zMzU5MzgtMjEuMzM1OTM4di0xNzAuNjY0MDYyaDE3MC42NjQwNjJjMTEuNzc3MzQ0IDAgMjEuMzM1OTM4LTkuNTU4NTk0IDIxLjMzNTkzOC0yMS4zMzU5MzggMC0xMS43NzM0MzctOS41NTg1OTQtMjEuMzMyMDMx'+
			'LTIxLjMzNTkzOC0yMS4zMzIwMzF6bTAgMCIgZmlsbD0iIzAwYzJjOSIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._svg_6__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 6";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:45,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 17px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 17px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._svg_6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_6.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._rectangle_22.appendChild(me._svg_6);
		me._hotspotsoff.appendChild(me._rectangle_22);
		me.divSkin.appendChild(me._hotspotsoff);
		el=me._ht_image=document.createElement('div');
		el.ggId="ht_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0,sy:0 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 20;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._ht_image.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._ht_image.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('info_w_picture') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._ht_image.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._ht_image.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._ht_image.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms';
				if (me._ht_image.ggCurrentLogicStateScaling == 0) {
					me._ht_image.ggParameter.sx = 1;
					me._ht_image.ggParameter.sy = 1;
					me._ht_image.style[domTransform]=parameterToTransform(me._ht_image.ggParameter);
				}
				else {
					me._ht_image.ggParameter.sx = 0;
					me._ht_image.ggParameter.sy = 0;
					me._ht_image.style[domTransform]=parameterToTransform(me._ht_image.ggParameter);
				}
			}
		}
		me._ht_image.ggUpdatePosition=function (useTransition) {
		}
		el=me._information_horiz=document.createElement('div');
		el.ggId="information horiz";
		el.ggDx=3;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1.2,sy:1.2 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 20;';
		hs+='height : 400px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 800px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._information_horiz.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._information_horiz.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width > 820)) && 
				((player.getViewerSize().width < 1024))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getViewerSize().width <= 820)) && 
				((player.getViewerSize().width > 520))
			)
			{
				newLogicStateScaling = 1;
			}
			else if (
				((player.getViewerSize().width > 1024))
			)
			{
				newLogicStateScaling = 2;
			}
			else if (
				((player.getViewerSize().width < 520))
			)
			{
				newLogicStateScaling = 3;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._information_horiz.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._information_horiz.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._information_horiz.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms, opacity 600ms ease 0ms';
				if (me._information_horiz.ggCurrentLogicStateScaling == 0) {
					me._information_horiz.ggParameter.sx = 1;
					me._information_horiz.ggParameter.sy = 1;
					me._information_horiz.style[domTransform]=parameterToTransform(me._information_horiz.ggParameter);
				}
				else if (me._information_horiz.ggCurrentLogicStateScaling == 1) {
					me._information_horiz.ggParameter.sx = 0.6;
					me._information_horiz.ggParameter.sy = 0.6;
					me._information_horiz.style[domTransform]=parameterToTransform(me._information_horiz.ggParameter);
				}
				else if (me._information_horiz.ggCurrentLogicStateScaling == 2) {
					me._information_horiz.ggParameter.sx = 1.5;
					me._information_horiz.ggParameter.sy = 1.5;
					me._information_horiz.style[domTransform]=parameterToTransform(me._information_horiz.ggParameter);
				}
				else if (me._information_horiz.ggCurrentLogicStateScaling == 3) {
					me._information_horiz.ggParameter.sx = 0.4;
					me._information_horiz.ggParameter.sy = 0.4;
					me._information_horiz.style[domTransform]=parameterToTransform(me._information_horiz.ggParameter);
				}
				else {
					me._information_horiz.ggParameter.sx = 1.2;
					me._information_horiz.ggParameter.sy = 1.2;
					me._information_horiz.style[domTransform]=parameterToTransform(me._information_horiz.ggParameter);
				}
			}
		}
		me._information_horiz.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width / player.getViewerSize().height >= 1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._information_horiz.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._information_horiz.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._information_horiz.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms, opacity 600ms ease 0ms';
				if (me._information_horiz.ggCurrentLogicStateVisible == 0) {
					me._information_horiz.style.visibility=(Number(me._information_horiz.style.opacity)>0||!me._information_horiz.style.opacity)?'inherit':'hidden';
					me._information_horiz.ggVisible=true;
				}
				else {
					me._information_horiz.style.visibility="hidden";
					me._information_horiz.ggVisible=false;
				}
			}
		}
		me._information_horiz.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('info_w_picture') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._information_horiz.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._information_horiz.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._information_horiz.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms, opacity 600ms ease 0ms';
				if (me._information_horiz.ggCurrentLogicStateAlpha == 0) {
					me._information_horiz.style.visibility=me._information_horiz.ggVisible?'inherit':'hidden';
					me._information_horiz.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._information_horiz.style.opacity == 0.0) { me._information_horiz.style.visibility="hidden"; } }, 605);
					me._information_horiz.style.opacity=0;
				}
			}
		}
		me._information_horiz.onclick=function (e) {
			player.setVariableValue('info_w_picture', false);
		}
		me._information_horiz.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._information_bg0=document.createElement('div');
		el.ggId="information_bg";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: 20;';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #ffffff;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._information_bg0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._information_bg0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._information_horiz.appendChild(me._information_bg0);
		el=me._info_popup_close1=document.createElement('div');
		els=me._info_popup_close1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJz8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMjAgMjAiPgogPHBhdGggZD0iTTEwIDguNTg2TDIuOTI5IDEuNTE1IDEuNTE1IDIuOTI5IDguNTg2IDEwbC03LjA3MSA3LjA3MSAxLjQxNCAxLjQxNEwxMCAxMS40MTRsNy4wNzEgNy4wNzEgMS40MTQtMS40MTRMMTEuNDE0IDEwbDcuMDcxLTcuMDcxLTEuNDE0LTEuNDE0TDEwIDguNTg2eiIvPgo8L3N2Zz4K';
		me._info_popup_close1__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="info_popup_close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='z-index: 20;';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='position : absolute;';
		hs+='right : 10px;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._info_popup_close1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_popup_close1.onclick=function (e) {
			player.setVariableValue('info_w_picture', false);
		}
		me._info_popup_close1.ggUpdatePosition=function (useTransition) {
		}
		me._information_horiz.appendChild(me._info_popup_close1);
		el=me._container_img0=document.createElement('div');
		el.ggId="Container img";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 20;';
		hs+='height : 380px;';
		hs+='left : 10px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 427px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._container_img0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_img0.ggUpdatePosition=function (useTransition) {
		}
		el=me._popup_image=document.createElement('div');
		els=me._popup_image__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		els.setAttribute('style','position: absolute;-webkit-user-drag:none;pointer-events:none;;');
		els.onload=function() {me._popup_image.ggUpdatePosition();}
		el.ggText=basePath + "";
		els.setAttribute('src', el.ggText);
		els['ondragstart']=function() { return false; };
		hs ='';
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="popup_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='z-index: 20;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._popup_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._popup_image.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			var parentWidth = me._popup_image.clientWidth;
			var parentHeight = me._popup_image.clientHeight;
			var img = me._popup_image__img;
			var aspectRatioDiv = me._popup_image.clientWidth / me._popup_image.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			var currentWidth,currentHeight;
			if (aspectRatioDiv > aspectRatioImg) {
				currentWidth = parentWidth;
				currentHeight = parentWidth / aspectRatioImg;
				img.style.width=parentWidth + 'px';
				img.style.height='';
			} else {
				currentHeight = parentHeight;
				currentWidth = parentHeight * aspectRatioImg;
				img.style.width='';
				img.style.height=parentHeight + 'px';
			};
			img.style.left='50%';
			img.style.marginLeft='-' + currentWidth/2 + 'px';
			img.style.top='50%';
			img.style.marginTop='-' + currentHeight/2 + 'px';
		}
		me._container_img0.appendChild(me._popup_image);
		me._information_horiz.appendChild(me._container_img0);
		el=me._container_text0=document.createElement('div');
		el.ggId="Container text";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 20;';
		hs+='height : 364px;';
		hs+='left : 450px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 19px;';
		hs+='visibility : inherit;';
		hs+='width : 3px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._container_text0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_text0.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getVariableValue('info_w_picture') == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._container_text0.ggCurrentLogicStateSize != newLogicStateSize) {
				me._container_text0.ggCurrentLogicStateSize = newLogicStateSize;
				me._container_text0.style[domTransition]='width 2000ms ease 0ms, height 2000ms ease 0ms';
				if (me._container_text0.ggCurrentLogicStateSize == 0) {
					me._container_text0.style.width='330px';
					me._container_text0.style.height='364px';
					setTimeout(function() {skin.updateSize(me._container_text0);}, 2000);
				}
				else {
					me._container_text0.style.width='3px';
					me._container_text0.style.height='364px';
					setTimeout(function() {skin.updateSize(me._container_text0);}, 2000);
				}
			}
		}
		me._container_text0.ggUpdatePosition=function (useTransition) {
		}
		el=me._div2=document.createElement('div');
		el.ggId="div2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: 20;';
		hs+='background : #3aa5a7;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 4px;';
		hs+='left : 2px;';
		hs+='position : absolute;';
		hs+='top : 82px;';
		hs+='visibility : inherit;';
		hs+='width : 330px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._div2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._div2.ggUpdatePosition=function (useTransition) {
		}
		me._container_text0.appendChild(me._div2);
		el=me._info_text_body=document.createElement('div');
		els=me._info_text_body__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_text_body";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 20;';
		hs+='height : 210px;';
		hs+='left : 4px;';
		hs+='position : absolute;';
		hs+='top : 28.85%;';
		hs+='visibility : inherit;';
		hs+='width : 330px;';
		hs+='pointer-events:auto;';
		hs+='font-size: 14px;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 330px;';
		hs+='height: 210px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._info_text_body.ggUpdateText=function() {
			var hs=player.hotspot.description;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._info_text_body.ggUpdateText();
		player.addListener('activehotspotchanged', function() {
			me._info_text_body.ggUpdateText();
		});
		el.appendChild(els);
		me._info_text_body.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_text_body.ggUpdatePosition=function (useTransition) {
		}
		me._container_text0.appendChild(me._info_text_body);
		el=me._info_title=document.createElement('div');
		els=me._info_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 20;';
		hs+='height : 41px;';
		hs+='left : 4px;';
		hs+='position : absolute;';
		hs+='top : 40px;';
		hs+='visibility : inherit;';
		hs+='width : 300px;';
		hs+='pointer-events:auto;';
		hs+='font-size: 27px; font-family: \"Visby-Bold\"';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 300px;';
		hs+='height: 41px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._info_title.ggUpdateText=function() {
			var hs=player.hotspot.title;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._info_title.ggUpdateText();
		player.addListener('activehotspotchanged', function() {
			me._info_title.ggUpdateText();
		});
		el.appendChild(els);
		me._info_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_title.ggUpdatePosition=function (useTransition) {
		}
		me._container_text0.appendChild(me._info_title);
		me._information_horiz.appendChild(me._container_text0);
		me._ht_image.appendChild(me._information_horiz);
		el=me._information_vert=document.createElement('div');
		el.ggId="information vert";
		el.ggDx=3;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1.2,sy:1.2 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 20;';
		hs+='height : 600px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 350px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._information_vert.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._information_vert.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width < 350))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getViewerSize().width <= 600)) && 
				((player.getViewerSize().width > 350))
			)
			{
				newLogicStateScaling = 1;
			}
			else if (
				((player.getViewerSize().width > 600)) && 
				((player.getViewerSize().width < 1024))
			)
			{
				newLogicStateScaling = 2;
			}
			else if (
				((player.getViewerSize().width > 1024))
			)
			{
				newLogicStateScaling = 3;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._information_vert.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._information_vert.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._information_vert.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms, opacity 600ms ease 0ms';
				if (me._information_vert.ggCurrentLogicStateScaling == 0) {
					me._information_vert.ggParameter.sx = 0.8;
					me._information_vert.ggParameter.sy = 0.8;
					me._information_vert.style[domTransform]=parameterToTransform(me._information_vert.ggParameter);
				}
				else if (me._information_vert.ggCurrentLogicStateScaling == 1) {
					me._information_vert.ggParameter.sx = 1;
					me._information_vert.ggParameter.sy = 1;
					me._information_vert.style[domTransform]=parameterToTransform(me._information_vert.ggParameter);
				}
				else if (me._information_vert.ggCurrentLogicStateScaling == 2) {
					me._information_vert.ggParameter.sx = 1.5;
					me._information_vert.ggParameter.sy = 1.5;
					me._information_vert.style[domTransform]=parameterToTransform(me._information_vert.ggParameter);
				}
				else if (me._information_vert.ggCurrentLogicStateScaling == 3) {
					me._information_vert.ggParameter.sx = 2;
					me._information_vert.ggParameter.sy = 2;
					me._information_vert.style[domTransform]=parameterToTransform(me._information_vert.ggParameter);
				}
				else {
					me._information_vert.ggParameter.sx = 1.2;
					me._information_vert.ggParameter.sy = 1.2;
					me._information_vert.style[domTransform]=parameterToTransform(me._information_vert.ggParameter);
				}
			}
		}
		me._information_vert.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width / player.getViewerSize().height < 1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._information_vert.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._information_vert.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._information_vert.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms, opacity 600ms ease 0ms';
				if (me._information_vert.ggCurrentLogicStateVisible == 0) {
					me._information_vert.style.visibility=(Number(me._information_vert.style.opacity)>0||!me._information_vert.style.opacity)?'inherit':'hidden';
					me._information_vert.ggVisible=true;
				}
				else {
					me._information_vert.style.visibility="hidden";
					me._information_vert.ggVisible=false;
				}
			}
		}
		me._information_vert.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('info_w_picture') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._information_vert.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._information_vert.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._information_vert.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms, opacity 600ms ease 0ms';
				if (me._information_vert.ggCurrentLogicStateAlpha == 0) {
					me._information_vert.style.visibility=me._information_vert.ggVisible?'inherit':'hidden';
					me._information_vert.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._information_vert.style.opacity == 0.0) { me._information_vert.style.visibility="hidden"; } }, 605);
					me._information_vert.style.opacity=0;
				}
			}
		}
		me._information_vert.onclick=function (e) {
			player.setVariableValue('info_w_picture', false);
		}
		me._information_vert.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._information_bg=document.createElement('div');
		el.ggId="information_bg";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: 20;';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #ffffff;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._information_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._information_bg.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._information_vert.appendChild(me._information_bg);
		el=me._info_popup_close0=document.createElement('div');
		els=me._info_popup_close0__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJz8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMjAgMjAiPgogPHBhdGggZD0iTTEwIDguNTg2TDIuOTI5IDEuNTE1IDEuNTE1IDIuOTI5IDguNTg2IDEwbC03LjA3MSA3LjA3MSAxLjQxNCAxLjQxNEwxMCAxMS40MTRsNy4wNzEgNy4wNzEgMS40MTQtMS40MTRMMTEuNDE0IDEwbDcuMDcxLTcuMDcxLTEuNDE0LTEuNDE0TDEwIDguNTg2eiIvPgo8L3N2Zz4K';
		me._info_popup_close0__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="info_popup_close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='z-index: 20;';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='position : absolute;';
		hs+='right : 10px;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._info_popup_close0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_popup_close0.onclick=function (e) {
			player.setVariableValue('info_w_picture', false);
		}
		me._info_popup_close0.ggUpdatePosition=function (useTransition) {
		}
		me._information_vert.appendChild(me._info_popup_close0);
		el=me._container_img=document.createElement('div');
		el.ggId="Container img";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 20;';
		hs+='height : 331px;';
		hs+='left : 10px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 106px;';
		hs+='visibility : inherit;';
		hs+='width : 330px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._container_img.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_img.ggUpdatePosition=function (useTransition) {
		}
		el=me._popup_image2=document.createElement('div');
		els=me._popup_image2__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		els.setAttribute('style','position: absolute;-webkit-user-drag:none;pointer-events:none;;');
		els.onload=function() {me._popup_image2.ggUpdatePosition();}
		el.ggText=basePath + "";
		els.setAttribute('src', el.ggText);
		els['ondragstart']=function() { return false; };
		hs ='';
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="popup_image2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='z-index: 20;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._popup_image2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._popup_image2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			var parentWidth = me._popup_image2.clientWidth;
			var parentHeight = me._popup_image2.clientHeight;
			var img = me._popup_image2__img;
			var aspectRatioDiv = me._popup_image2.clientWidth / me._popup_image2.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			var currentWidth,currentHeight;
			if (aspectRatioDiv > aspectRatioImg) {
				currentWidth = parentWidth;
				currentHeight = parentWidth / aspectRatioImg;
				img.style.width=parentWidth + 'px';
				img.style.height='';
			} else {
				currentHeight = parentHeight;
				currentWidth = parentHeight * aspectRatioImg;
				img.style.width='';
				img.style.height=parentHeight + 'px';
			};
			img.style.left='50%';
			img.style.marginLeft='-' + currentWidth/2 + 'px';
			img.style.top='50%';
			img.style.marginTop='-' + currentHeight/2 + 'px';
		}
		me._container_img.appendChild(me._popup_image2);
		me._information_vert.appendChild(me._container_img);
		el=me._container_text=document.createElement('div');
		el.ggId="Container text";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 20;';
		hs+='height : 580px;';
		hs+='left : 10px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 3px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._container_text.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_text.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getVariableValue('info_w_picture') == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._container_text.ggCurrentLogicStateSize != newLogicStateSize) {
				me._container_text.ggCurrentLogicStateSize = newLogicStateSize;
				me._container_text.style[domTransition]='width 2000ms ease 0ms, height 2000ms ease 0ms';
				if (me._container_text.ggCurrentLogicStateSize == 0) {
					me._container_text.style.width='330px';
					me._container_text.style.height='580px';
					setTimeout(function() {skin.updateSize(me._container_text);}, 2000);
				}
				else {
					me._container_text.style.width='3px';
					me._container_text.style.height='580px';
					setTimeout(function() {skin.updateSize(me._container_text);}, 2000);
				}
			}
		}
		me._container_text.ggUpdatePosition=function (useTransition) {
		}
		el=me._div=document.createElement('div');
		el.ggId="div";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: 20;';
		hs+='background : #3aa5a7;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 4px;';
		hs+='left : 2px;';
		hs+='position : absolute;';
		hs+='top : 82px;';
		hs+='visibility : inherit;';
		hs+='width : 330px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._div.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._div.ggUpdatePosition=function (useTransition) {
		}
		me._container_text.appendChild(me._div);
		el=me._info_text_body2=document.createElement('div');
		els=me._info_text_body2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_text_body2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 20;';
		hs+='height : 135px;';
		hs+='left : 4px;';
		hs+='position : absolute;';
		hs+='top : 75.69%;';
		hs+='visibility : inherit;';
		hs+='width : 328px;';
		hs+='pointer-events:auto;';
		hs+='font-size: 14px;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 328px;';
		hs+='height: 135px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._info_text_body2.ggUpdateText=function() {
			var hs=player.hotspot.description;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._info_text_body2.ggUpdateText();
		player.addListener('activehotspotchanged', function() {
			me._info_text_body2.ggUpdateText();
		});
		el.appendChild(els);
		me._info_text_body2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_text_body2.ggUpdatePosition=function (useTransition) {
		}
		me._container_text.appendChild(me._info_text_body2);
		el=me._info_title2=document.createElement('div');
		els=me._info_title2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_title2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 20;';
		hs+='height : 42px;';
		hs+='left : 4px;';
		hs+='position : absolute;';
		hs+='top : 39px;';
		hs+='visibility : inherit;';
		hs+='width : 287px;';
		hs+='pointer-events:auto;';
		hs+='font-size: 26px; font-family: \"Visby-Bold\"';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 287px;';
		hs+='height: 42px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._info_title2.ggUpdateText=function() {
			var hs=player.hotspot.title;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._info_title2.ggUpdateText();
		player.addListener('activehotspotchanged', function() {
			me._info_title2.ggUpdateText();
		});
		el.appendChild(els);
		me._info_title2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_title2.ggUpdatePosition=function (useTransition) {
		}
		me._container_text.appendChild(me._info_title2);
		me._information_vert.appendChild(me._container_text);
		me._ht_image.appendChild(me._information_vert);
		me.divSkin.appendChild(me._ht_image);
		el=me._timer_mano=document.createElement('div');
		el.ggTimestamp=this.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=3000;
		el.ggId="timer mano";
		el.ggDx=0.24;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='bottom : 0.27%;';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._timer_mano.ggIsActive=function() {
			return (me._timer_mano.ggTimestamp==0 ? false : (Math.floor((me.ggCurrentTime - me._timer_mano.ggTimestamp) / me._timer_mano.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._timer_mano.ggActivate=function () {
			me._timer_mano.style[domTransition]='none';
			me._timer_mano.style.opacity='0';
			me._timer_mano.style.visibility='hidden';
		}
		me._timer_mano.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
			}
		}
		el=me._manogirar=document.createElement('div');
		el.ggId="manogirar";
		el.ggDx=5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 140px;';
		hs+='border-radius : 140px;';
		hs+='background : rgba(22,22,22,0.176471);';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 151px;';
		hs+='cursor : default;';
		hs+='height : 140px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 140px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._manogirar.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._manogirar.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._svg_4=document.createElement('div');
		els=me._svg_4__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0naXNvLTg4NTktMSc/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+Cjxzdmcgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHk9IjBweCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MTJweCIgaWQ9IkxheWVyXzEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHZpZXdCb3g9IjAgMCA1MT'+
			'IgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIiBoZWlnaHQ9IjUxMnB4Ij4KIDxnPgogIDxnPgogICA8Zz4KICAgIDxwYXRoIGQ9Ik00MzIuNzcyLDM4NGgtODguOTE3Yy01LjM1NCwwLTguMTI1LTMuNTMxLTkuMDYzLTUuMDUycy0yLjg3NS01LjU4My0wLjQ3OS0xMC4zODVMNDY0LjczMSwxMDcuNzQgICAgIGMzLTYuMDIxLDQuNjA0LTEyLjc3MSw0LjYwNC0yMS40NDhjMC0yNC4wNTItMTkuNTYzLTQzLjYyNS00My42MjUtNDMuNjI1Yy0xNi42MjUsMC0zMS41ODMsOS4yNC0zOS4wMjEsMjQuMTE1bC02Ni43MDgsMTMzLjQxNyAgICAgYy0xMS4zMTMtMjAuNzcxLTM0LjcwOC0zMi40NDgtNTguNDE3'+
			'LTI4Ljg3NWwtMTEzLjM3NSwxNy40NDhjLTE3LjA4MywyLjYyNS0zMS44OTYsMTMuNDE3LTM5LjYwNCwyOC44NjVMNTEuNzEsMzMxLjQwNiAgICAgYy01LjkxNywxMS44MjMtOS4wNDIsMjUuMDYzLTkuMDQyLDM4LjI4MWMwLDMyLjYzNSwxOC4xMjUsNjEuOTY5LDQ3LjMxMyw3Ni41NjNsMTAwLjI3MSw1MC4xMzUgICAgIEMyMTAuNjg5LDUwNi42MDQsMjMzLjU2NCw1MTIsMjU2LjM5Nyw1MTJjMTQuOTc5LDAsMjkuODEzLTIuMjcxLDQ0LjEwNC02Ljc0bDE1MC42ODgtNDcuMDgzYzIuNzUtMC44NjUsNS4wNjMtMi44MTMsNi4zNTQtNS40MDYgICAgIGw3LjkzOC0xNS44NzVjMi41MjEtNS4wNTIsMy'+
			'44NTQtMTAuNzA4LDMuODU0LTE2LjM0NEM0NjkuMzM1LDQwMC4zOTYsNDUyLjkzOSwzODQsNDMyLjc3MiwzODR6IE00NDYuMzk3LDQyNy4zNjVsLTUuODk2LDExLjgwMiAgICAgbC0xNDYuMzc1LDQ1Ljc0Yy0zMC44OTYsOS42MzUtNjUuMzk2LDYuODU0LTk0LjMzMy03LjYwNEw5OS41MjIsNDI3LjE2N2MtMjEuOTE3LTEwLjk1OC0zNS41MjEtMzIuOTc5LTM1LjUyMS01Ny40NzkgICAgIGMwLTkuOTI3LDIuMzU0LTE5Ljg2NSw2Ljc5Mi0yOC43NGw1Ni44NzUtMTEzLjc3MWM0LjYyNS05LjI3MSwxMy41MjEtMTUuNzUsMjMuNzcxLTE3LjMyM2wxMTMuMzc1LTE3LjQ0OCAgICAgYzE1LjE0Ni0yLjI4'+
			'MSwzMC4yMjksNS41LDM3LjA0MiwxOS4xNjdsOC42MDQsMTcuMTk4YzMuNjI1LDcuMjI5LDE1LjQ1OCw3LjIyOSwxOS4wODMsMGw3Ni4yMjktMTUyLjQ0OCAgICAgQzQwOS41NjQsNjguNzE5LDQxNy4yMSw2NCw0MjUuNzEsNjRjMTIuMjkyLDAsMjIuMjkyLDEwLDIyLjI5MiwyNC4yMTljMCwzLjQ0OC0wLjgxMyw2Ljg5Ni0yLjM1NCw5Ljk2OUwzMTUuMjMxLDM1OS4wMzEgICAgIGMtNSw5Ljk5LTQuNDU4LDIxLjYzNSwxLjQxNywzMS4xMzVzMTYuMDQyLDE1LjE2NywyNy4yMDgsMTUuMTY3aDg4LjkxN2M4LjM5NiwwLDE1LjIyOSw2LjgyMywxNS4yMjksMTUuMjE5ICAgICBDNDQ4LjAwMSw0MjIuOT'+
			'A2LDQ0Ny40MzksNDI1LjI2LDQ0Ni4zOTcsNDI3LjM2NXoiIGZpbGw9IiNGRkZGRkYiLz4KICAgIDxwYXRoIGQ9Ik01My4zMzUsMTI4LjQ2OWMwLjg3NSwwLDEuNzcxLTAuMTA0LDIuNjQ2LTAuMzMzbDg1LjMzMy0yMS44MDJjMy40NzktMC44OTYsNi4yOTItMy40OSw3LjQ1OC02LjkwNiAgICAgYzEuMTQ2LTMuNDE3LDAuNS03LjE4OC0xLjcyOS0xMC4wMjFsLTIyLjA0Mi0yOC4wNTJjMzguMjA4LTI1Ljc0LDgzLjY0Ni00MC4wMjEsMTMxLTQwLjAyMWMzNy43MDgsMCw3My43MDgsOC42NjcsMTA3LDI1Ljc2ICAgICBjNS4yMDgsMi42NjcsMTEuNjg4LDAuNjQ2LDE0LjM1NC00LjYxNWMyLjcwOC01'+
			'LjI0LDAuNjI1LTExLjY3Ny00LjYwNC0xNC4zNjVDMzM2LjkxOCw5LjcxOSwyOTYuNTQzLDAsMjU2LjAwMSwwICAgICBjLTU1LjU2MiwwLTEwOC43NSwxOC4wMzEtMTUyLjI1LDUwLjI1Yy0wLjIyOSwwLjE1Ni0wLjQ1OCwwLjMxMy0wLjY4OCwwLjQ5Yy0wLjA2MywwLjA1Mi0wLjEyNSwwLjEwNC0wLjE4OCwwLjE1NiAgICAgYy0yMi4zNTQsMTYuNzA4LTQyLjE0NiwzNy4xNzctNTguMzU0LDYwLjg4NWMtMi41LDMuNjY3LTIuNDc5LDguNSwwLjA4MywxMi4xMzVDNDYuNjI2LDEyNi44MTMsNDkuOTE4LDEyOC40NjksNTMuMzM1LDEyOC40Njl6ICAgICAgTTEwNy44NTYsNzQuMDczbDEyLjMxMywxNS'+
			'42NDZsLTM5LjE2NywxMEM4OS4zMTQsOTAuNDI3LDk4LjI5Myw4MS44NTQsMTA3Ljg1Niw3NC4wNzN6IiBmaWxsPSIjRkZGRkZGIi8+CiAgIDwvZz4KICA8L2c+CiA8L2c+CiA8Zy8+CiA8Zy8+CiA8Zy8+CiA8Zy8+CiA8Zy8+CiA8Zy8+CiA8Zy8+CiA8Zy8+CiA8Zy8+CiA8Zy8+CiA8Zy8+CiA8Zy8+CiA8Zy8+CiA8Zy8+CiA8Zy8+Cjwvc3ZnPgo=';
		me._svg_4__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 4";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:10,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 110px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 110px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._svg_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_4.logicBlock_angle = function() {
			var newLogicStateAngle;
			if (
				((player.getVariableValue('ticker') == true))
			)
			{
				newLogicStateAngle = 0;
			}
			else {
				newLogicStateAngle = -1;
			}
			if (me._svg_4.ggCurrentLogicStateAngle != newLogicStateAngle) {
				me._svg_4.ggCurrentLogicStateAngle = newLogicStateAngle;
				me._svg_4.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms';
				if (me._svg_4.ggCurrentLogicStateAngle == 0) {
					me._svg_4.ggParameter.a = -30;
					me._svg_4.style[domTransform]=parameterToTransform(me._svg_4.ggParameter);
				}
				else {
					me._svg_4.ggParameter.a = 10;
					me._svg_4.style[domTransform]=parameterToTransform(me._svg_4.ggParameter);
				}
			}
		}
		me._svg_4.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		me._manogirar.appendChild(me._svg_4);
		me._timer_mano.appendChild(me._manogirar);
		me.divSkin.appendChild(me._timer_mano);
		el=me._ticker=document.createElement('div');
		el.ggTimestamp=this.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=3600000;
		el.ggId="ticker";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 477px;';
		hs+='position : absolute;';
		hs+='top : 139px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ticker.ggIsActive=function() {
			return (me._ticker.ggTimestamp==0 ? false : (Math.floor((me.ggCurrentTime - me._ticker.ggTimestamp) / me._ticker.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._ticker.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._ticker.ggIsActive() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ticker.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ticker.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ticker.style[domTransition]='';
				if (me._ticker.ggCurrentLogicStateVisible == 0) {
					me._ticker.style.visibility="hidden";
					me._ticker.ggVisible=false;
				}
				else {
					me._ticker.style.visibility=(Number(me._ticker.style.opacity)>0||!me._ticker.style.opacity)?'inherit':'hidden';
					me._ticker.ggVisible=true;
				}
			}
		}
		me._ticker.ggActivate=function () {
			player.setVariableValue('ticker', true);
		}
		me._ticker.ggDeactivate=function () {
			player.setVariableValue('ticker', false);
		}
		me._ticker.ggCurrentLogicStateVisible = -1;
		me._ticker.ggUpdateConditionTimer=function () {
			me._ticker.logicBlock_visible();
		}
		me._ticker.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._ticker);
		el=me._intro_interfaz=document.createElement('div');
		el.ggTimestamp=this.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=3600000;
		el.ggId="Intro interfaz";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 480px;';
		hs+='position : absolute;';
		hs+='top : 222px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._intro_interfaz.ggIsActive=function() {
			return (me._intro_interfaz.ggTimestamp + me._intro_interfaz.ggTimeout) >= me.ggCurrentTime;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._intro_interfaz.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._intro_interfaz.ggIsActive() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._intro_interfaz.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._intro_interfaz.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._intro_interfaz.style[domTransition]='';
				if (me._intro_interfaz.ggCurrentLogicStateVisible == 0) {
					me._intro_interfaz.style.visibility="hidden";
					me._intro_interfaz.ggVisible=false;
				}
				else {
					me._intro_interfaz.style.visibility=(Number(me._intro_interfaz.style.opacity)>0||!me._intro_interfaz.style.opacity)?'inherit':'hidden';
					me._intro_interfaz.ggVisible=true;
				}
			}
		}
		me._intro_interfaz.ggDeactivate=function () {
			player.setVariableValue('Interfaz', true);
		}
		me._intro_interfaz.ggCurrentLogicStateVisible = -1;
		me._intro_interfaz.ggUpdateConditionTimer=function () {
			me._intro_interfaz.logicBlock_visible();
		}
		me._intro_interfaz.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._intro_interfaz);
		el=me._timer_1=document.createElement('div');
		el.ggTimestamp=this.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=3600000;
		el.ggId="Timer 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 490px;';
		hs+='position : absolute;';
		hs+='top : 274px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._timer_1.ggIsActive=function() {
			return (me._timer_1.ggTimestamp + me._timer_1.ggTimeout) >= me.ggCurrentTime;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._timer_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._timer_1.ggIsActive() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._timer_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._timer_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._timer_1.style[domTransition]='';
				if (me._timer_1.ggCurrentLogicStateVisible == 0) {
					me._timer_1.style.visibility="hidden";
					me._timer_1.ggVisible=false;
				}
				else {
					me._timer_1.style.visibility=(Number(me._timer_1.style.opacity)>0||!me._timer_1.style.opacity)?'inherit':'hidden';
					me._timer_1.ggVisible=true;
				}
			}
		}
		me._timer_1.ggDeactivate=function () {
			player.changeFovLog(-2,true);
		}
		me._timer_1.ggCurrentLogicStateVisible = -1;
		me._timer_1.ggUpdateConditionTimer=function () {
			me._timer_1.logicBlock_visible();
		}
		me._timer_1.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._timer_1);
		el=me._timer_versiones=document.createElement('div');
		el.ggTimestamp=0;
		el.ggLastIsActive=false;
		el.ggTimeout=0;
		el.ggId="timer versiones";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 497px;';
		hs+='position : absolute;';
		hs+='top : 485px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._timer_versiones.ggIsActive=function() {
			return (me._timer_versiones.ggTimestamp + me._timer_versiones.ggTimeout) >= me.ggCurrentTime;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._timer_versiones.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._timer_versiones.ggIsActive() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._timer_versiones.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._timer_versiones.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._timer_versiones.style[domTransition]='';
				if (me._timer_versiones.ggCurrentLogicStateVisible == 0) {
					me._timer_versiones.style.visibility="hidden";
					me._timer_versiones.ggVisible=false;
				}
				else {
					me._timer_versiones.style.visibility=(Number(me._timer_versiones.style.opacity)>0||!me._timer_versiones.style.opacity)?'inherit':'hidden';
					me._timer_versiones.ggVisible=true;
				}
			}
		}
		me._timer_versiones.ggActivate=function () {
			player.setVariableValue('versionesescalar', true);
		}
		me._timer_versiones.ggDeactivate=function () {
			player.setVariableValue('versionesescalar', false);
		}
		me._timer_versiones.ggCurrentLogicStateVisible = -1;
		me._timer_versiones.ggUpdateConditionTimer=function () {
			me._timer_versiones.logicBlock_visible();
		}
		me._timer_versiones.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._timer_versiones);
		el=me._video_screentint_file=document.createElement('div');
		el.ggId="video_screentint_file";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: 20;';
		hs+='background : rgba(255,255,255,0.960784);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0%;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._video_screentint_file.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._video_screentint_file.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_video_file') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_screentint_file.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_screentint_file.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_screentint_file.style[domTransition]='';
				if (me._video_screentint_file.ggCurrentLogicStateVisible == 0) {
					me._video_screentint_file.style.visibility=(Number(me._video_screentint_file.style.opacity)>0||!me._video_screentint_file.style.opacity)?'inherit':'hidden';
					me._video_screentint_file.ggVisible=true;
				}
				else {
					me._video_screentint_file.style.visibility="hidden";
					me._video_screentint_file.ggVisible=false;
				}
			}
		}
		me._video_screentint_file.onclick=function (e) {
			player.setVariableValue('vis_video_file', false);
		}
		me._video_screentint_file.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._video_screentint_file);
		el=me._video_popup_file=document.createElement('div');
		el.ggId="video_popup_file";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 20;';
		hs+='height : 80%;';
		hs+='left : 10%;';
		hs+='position : absolute;';
		hs+='top : 10%;';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._video_popup_file.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._video_popup_file.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_video_file') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_popup_file.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_popup_file.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_popup_file.style[domTransition]='';
				if (me._video_popup_file.ggCurrentLogicStateVisible == 0) {
					me._video_popup_file.style.visibility=(Number(me._video_popup_file.style.opacity)>0||!me._video_popup_file.style.opacity)?'inherit':'hidden';
					me._video_popup_file.ggVisible=true;
				}
				else {
					me._video_popup_file.style.visibility="hidden";
					me._video_popup_file.ggVisible=false;
				}
			}
		}
		me._video_popup_file.ggUpdatePosition=function (useTransition) {
		}
		el=me._loading_video_file=document.createElement('div');
		els=me._loading_video_file__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NCIgZmlsbD0id2hpdGUiIHZpZXdCb3g9IjAgMCAzMiAzMiIgaGVpZ2h0PSI2NCI+CiA8Y2lyY2xlIGN5PSIzIiByPSIwIiBjeD0iMTYiPgogIDxhbmltYXRlIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iMCIgdmFsdWVzPSIwOzM7MDswIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgYXR0cmlidXRlTmFtZT0iciIgY2FsY01vZGU9InNwbGluZSIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIHRyYW5zZm9ybT0icm90YXRlKD'+
			'Q1IDE2IDE2KSIgY3k9IjMiIHI9IjAiIGN4PSIxNiI+CiAgPGFuaW1hdGUgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSIwLjEyNXMiIHZhbHVlcz0iMDszOzA7MCIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIGF0dHJpYnV0ZU5hbWU9InIiIGNhbGNNb2RlPSJzcGxpbmUiLz4KIDwvY2lyY2xlPgogPGNpcmNsZSB0cmFuc2Zvcm09InJvdGF0ZSg5MCAxNiAxNikiIGN5PSIzIiByPSIwIiBjeD0iMTYiPgogIDxhbmltYXRlIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iMC4yNXMi'+
			'IHZhbHVlcz0iMDszOzA7MCIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIGF0dHJpYnV0ZU5hbWU9InIiIGNhbGNNb2RlPSJzcGxpbmUiLz4KIDwvY2lyY2xlPgogPGNpcmNsZSB0cmFuc2Zvcm09InJvdGF0ZSgxMzUgMTYgMTYpIiBjeT0iMyIgcj0iMCIgY3g9IjE2Ij4KICA8YW5pbWF0ZSBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYmVnaW49IjAuMzc1cyIgdmFsdWVzPSIwOzM7MDswIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgYXR0cmlidXRlTm'+
			'FtZT0iciIgY2FsY01vZGU9InNwbGluZSIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIHRyYW5zZm9ybT0icm90YXRlKDE4MCAxNiAxNikiIGN5PSIzIiByPSIwIiBjeD0iMTYiPgogIDxhbmltYXRlIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iMC41cyIgdmFsdWVzPSIwOzM7MDswIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgYXR0cmlidXRlTmFtZT0iciIgY2FsY01vZGU9InNwbGluZSIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIHRyYW5zZm9ybT0icm90YXRlKDIyNSAxNiAxNikiIGN5PSIzIiByPSIwIiBj'+
			'eD0iMTYiPgogIDxhbmltYXRlIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iMC42MjVzIiB2YWx1ZXM9IjA7MzswOzAiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiBhdHRyaWJ1dGVOYW1lPSJyIiBjYWxjTW9kZT0ic3BsaW5lIi8+CiA8L2NpcmNsZT4KIDxjaXJjbGUgdHJhbnNmb3JtPSJyb3RhdGUoMjcwIDE2IDE2KSIgY3k9IjMiIHI9IjAiIGN4PSIxNiI+CiAgPGFuaW1hdGUgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSIwLjc1cyIgdmFsdWVzPSIwOzM7MDswIiBrZXlTcG'+
			'xpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgYXR0cmlidXRlTmFtZT0iciIgY2FsY01vZGU9InNwbGluZSIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIHRyYW5zZm9ybT0icm90YXRlKDMxNSAxNiAxNikiIGN5PSIzIiByPSIwIiBjeD0iMTYiPgogIDxhbmltYXRlIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iMC44NzVzIiB2YWx1ZXM9IjA7MzswOzAiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiBhdHRyaWJ1dGVOYW1lPSJyIiBjYWxjTW9kZT0ic3BsaW5l'+
			'Ii8+CiA8L2NpcmNsZT4KIDxjaXJjbGUgdHJhbnNmb3JtPSJyb3RhdGUoMTgwIDE2IDE2KSIgY3k9IjMiIHI9IjAiIGN4PSIxNiI+CiAgPGFuaW1hdGUgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSIwLjVzIiB2YWx1ZXM9IjA7MzswOzAiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiBhdHRyaWJ1dGVOYW1lPSJyIiBjYWxjTW9kZT0ic3BsaW5lIi8+CiA8L2NpcmNsZT4KPC9zdmc+Cg==';
		me._loading_video_file__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="loading_video_file";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._loading_video_file.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._loading_video_file.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._video_popup_file.appendChild(me._loading_video_file);
		el=me._popup_video_file=document.createElement('div');
		me._popup_video_file.seekbars = [];
		me._popup_video_file.seekbars.push('seekbar_file');
		me._popup_video_file.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._popup_video_file.seekbars.length; i++) {
					var seekbar = me.findElements(me._popup_video_file.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].connectToMediaEl();
				}
			}
			while (me._popup_video_file.hasChildNodes()) {
				me._popup_video_file.removeChild(me._popup_video_file.lastChild);
			}
			if (me._popup_video_file__vid) {
				me._popup_video_file__vid.pause();
			}
			if(media == '') {
				notifySeekbars();
			if (me._popup_video_file.ggVideoNotLoaded ==false && me._popup_video_file.ggDeactivate) { me._popup_video_file.ggDeactivate(); }
				me._popup_video_file.ggVideoNotLoaded = true;
			var mediaObj = player.getMediaObject('popup_video_file');
			if (mediaObj) {
				mediaObj.autoplay = false;
			}
				return;
			}
			me._popup_video_file.ggVideoNotLoaded = false;
			me._popup_video_file__vid=document.createElement('video');
			me._popup_video_file__vid.className='ggskin ggskin_video';
			me._popup_video_file__vid.setAttribute('width', '100%');
			me._popup_video_file__vid.setAttribute('height', '100%');
			me._popup_video_file__vid.setAttribute('controlsList', 'nodownload');
			me._popup_video_file__vid.setAttribute('oncontextmenu', 'return false;');
			me._popup_video_file__source=document.createElement('source');
			me._popup_video_file__source.setAttribute('src', media);
			me._popup_video_file__vid.setAttribute('playsinline', 'playsinline');
			me._popup_video_file__vid.setAttribute('style', ';');
			me._popup_video_file__vid.style.outline = 'none';
			me._popup_video_file__vid.appendChild(me._popup_video_file__source);
			me._popup_video_file.appendChild(me._popup_video_file__vid);
			var videoEl = player.registerVideoElement('popup_video_file', me._popup_video_file__vid);
			videoEl.autoplay = false;
			notifySeekbars();
			if (me._popup_video_file.ggMediaEnded) {
				me._popup_video_file__vid.addEventListener('ended', me._popup_video_file.ggMediaEnded);
			}
			me._popup_video_file.ggVideoSource = media;
		}
		el.ggId="popup_video_file";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0%;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._popup_video_file.ggIsActive=function() {
			if (me._popup_video_file__vid != null) {
				return (me._popup_video_file__vid.paused == false && me._popup_video_file__vid.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._popup_video_file.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_video_file') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._popup_video_file.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._popup_video_file.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._popup_video_file.style[domTransition]='';
				if (me._popup_video_file.ggCurrentLogicStateVisible == 0) {
					me._popup_video_file.style.visibility=(Number(me._popup_video_file.style.opacity)>0||!me._popup_video_file.style.opacity)?'inherit':'hidden';
					if (me._popup_video_file.ggVideoNotLoaded) {
						me._popup_video_file.ggInitMedia(me._popup_video_file.ggVideoSource);
					}
					me._popup_video_file.ggVisible=true;
				}
				else {
					me._popup_video_file.style.visibility="hidden";
					me._popup_video_file.ggInitMedia('');
					me._popup_video_file.ggVisible=false;
				}
			}
		}
		me._popup_video_file.ggMediaEnded=function () {
			player.setVariableValue('vis_video_file', false);
		}
		me._popup_video_file.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_3=document.createElement('div');
		els=me._text_3__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 3";
		el.ggDx=1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : 60px;';
		hs+='height : 28px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 268px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: 268px;';
		hs+='height: 28px;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0.705882);';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Cargando . . .";
		el.appendChild(els);
		me._text_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_3.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsLoading() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._text_3.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._text_3.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._text_3.style[domTransition]='';
				if (me._text_3.ggCurrentLogicStateVisible == 0) {
					me._text_3.style.visibility=(Number(me._text_3.style.opacity)>0||!me._text_3.style.opacity)?'inherit':'hidden';
					me._text_3.ggVisible=true;
				}
				else {
					me._text_3.style.visibility="hidden";
					me._text_3.ggVisible=false;
				}
			}
		}
		me._text_3.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._popup_video_file.appendChild(me._text_3);
		me._video_popup_file.appendChild(me._popup_video_file);
		el=me._rectangle_21=document.createElement('div');
		el.ggId="Rectangle 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 1px solid #bbbbbb;';
		hs+='cursor : default;';
		hs+='height : 30px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : -53px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_21.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_21.onclick=function (e) {
			player.setVariableValue('vis_video_file', false);
		}
		me._rectangle_21.ggUpdatePosition=function (useTransition) {
		}
		el=me._info_popup_close=document.createElement('div');
		els=me._info_popup_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJz8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMjAgMjAiPgogPHBhdGggZD0iTTEwIDguNTg2TDIuOTI5IDEuNTE1IDEuNTE1IDIuOTI5IDguNTg2IDEwbC03LjA3MSA3LjA3MSAxLjQxNCAxLjQxNEwxMCAxMS40MTRsNy4wNzEgNy4wNzEgMS40MTQtMS40MTRMMTEuNDE0IDEwbDcuMDcxLTcuMDcxLTEuNDE0LTEuNDE0TDEwIDguNTg2eiIvPgo8L3N2Zz4K';
		me._info_popup_close__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="info_popup_close";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._info_popup_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_popup_close.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._rectangle_21.appendChild(me._info_popup_close);
		el=me._volver=document.createElement('div');
		els=me._volver__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="volver";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 30px;';
		hs+='position : absolute;';
		hs+='right : 41px;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 227px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='right: 0px;';
		hs+='top:  0px;';
		hs+='width: 227px;';
		hs+='height: 30px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(72,72,72,1);';
		hs+='font-size: 22px;';
		hs+='font-weight: inherit;';
		hs+='text-align: right;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="VOLVER";
		el.appendChild(els);
		me._volver.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._volver.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._rectangle_21.appendChild(me._volver);
		me._video_popup_file.appendChild(me._rectangle_21);
		me.divSkin.appendChild(me._video_popup_file);
		el=me._video_popup_controls_file=document.createElement('div');
		el.ggId="video_popup_controls_file";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 20;';
		hs+='bottom : 80px;';
		hs+='height : 25px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 284px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._video_popup_controls_file.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._video_popup_controls_file.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_video_file') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_popup_controls_file.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_popup_controls_file.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_popup_controls_file.style[domTransition]='';
				if (me._video_popup_controls_file.ggCurrentLogicStateVisible == 0) {
					me._video_popup_controls_file.style.visibility=(Number(me._video_popup_controls_file.style.opacity)>0||!me._video_popup_controls_file.style.opacity)?'inherit':'hidden';
					me._video_popup_controls_file.ggVisible=true;
				}
				else {
					me._video_popup_controls_file.style.visibility="hidden";
					me._video_popup_controls_file.ggVisible=false;
				}
			}
		}
		me._video_popup_controls_file.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._seekbar_file=document.createElement('div');
		me._seekbar_file__playhead=document.createElement('div');
		me._seekbar_file.mediaEl = null;
		me._seekbar_file.fromBufferSource = false;
		el.ggId="seekbar_file";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_seekbar ";
		el.ggType='seekbar';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 14px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 6px;';
		hs+='visibility : inherit;';
		hs+='width : 249px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._seekbar_file.connectToMediaEl = function() {
			var disableSeekbar = function() {
				me._seekbar_file__playhead.style.visibility = 'hidden';
				me._seekbar_file.style.background = '#ffffff';
				me._seekbar_file.ggConnected = false;
			}
			if (me._seekbar_file.mediaEl != null) {
				if (me._seekbar_file.fromBufferSource) {
					player.removeEventListener('bufferSoundTimeupdate', me._seekbar_file.updatePlayback);
					if (me._seekbar_file.ggActivate) {
						player.removeEventListener('bufferSoundPlay', me._seekbar_file.bufferSoundActivate);
					}
					if (me._seekbar_file.ggDeactivate) {
						player.removeEventListener('bufferSoundPause', me._seekbar_file.bufferSoundDeactivate);
						player.removeEventListener('bufferSoundStop', me._seekbar_file.bufferSoundDeactivate);
						player.removeEventListener('bufferSoundEnded', me._seekbar_file.bufferSoundDeactivate);
					}
					if (me._seekbar_file.ggMediaEnded) {
						player.removeEventListener('bufferSoundEnded', me._seekbar_file.bufferSoundMediaEnded);
					}
				} else {
					me._seekbar_file.mediaEl.removeEventListener('progress', me._seekbar_file.updatePlayback);
					me._seekbar_file.mediaEl.removeEventListener('canplay', me._seekbar_file.updatePlayback);
					me._seekbar_file.mediaEl.removeEventListener('timeupdate', me._seekbar_file.updatePlayback);
					if (me._seekbar_file.ggActivate) {
						me._seekbar_file.mediaEl.removeEventListener('play', me._seekbar_file.ggActivate);
					}
					if (me._seekbar_file.ggDeactivate) {
						me._seekbar_file.mediaEl.removeEventListener('ended', me._seekbar_file.ggDeactivate);
						me._seekbar_file.mediaEl.removeEventListener('pause', me._seekbar_file.ggDeactivate);
					}
					if (me._seekbar_file.ggMediaEnded) {
						me._seekbar_file.mediaEl.removeEventListener('ended', me._seekbar_file.ggMediaEnded);
					}
				}
			}
			me._seekbar_file.mediaEl = player.getMediaObject('popup_video_file');
			if (me._seekbar_file.mediaEl) {
				me._seekbar_file.fromBufferSource = false;
			} else {
				me._seekbar_file.mediaEl = player.getMediaBufferSourceObject('popup_video_file');
				me._seekbar_file.fromBufferSource = true;
			}
			if (me._seekbar_file.mediaEl != null) {
				me._seekbar_file__playhead.style.visibility = 'inherit';
				me._seekbar_file__playhead.style.left = '1px';
				if (me._seekbar_file.fromBufferSource) {
					player.addListener('bufferSoundTimeupdate', me._seekbar_file.updatePlayback);
					if (me._seekbar_file.ggActivate) {
						me._seekbar_file.bufferSoundActivate = function(args) { if (args['id'] == me._seekbar_file.mediaEl.id) me._seekbar_file.ggActivate(); };
						player.addListener('bufferSoundPlay', me._seekbar_file.bufferSoundActivate);
					}
					if (me._seekbar_file.ggDeactivate) {
						me._seekbar_file.bufferSoundDeactivate = function(args) { if (args['id'] == me._seekbar_file.mediaEl.id) me._seekbar_file.ggDeactivate(); };
						player.addListener('bufferSoundPause', me._seekbar_file.bufferSoundDeactivate);
						player.addListener('bufferSoundStop', me._seekbar_file.bufferSoundDeactivate);
						player.addListener('bufferSoundEnded', me._seekbar_file.bufferSoundDeactivate);
					}
					if (me._seekbar_file.ggMediaEnded) {
						me._seekbar_file.bufferSoundMediaEnded = function(args) { if (args['id'] == me._seekbar_file.mediaEl.id) me._seekbar_file.ggMediaEnded(); };
						player.addListener('bufferSoundEnded', me._seekbar_file.bufferSoundMediaEnded);
					}
				} else {
					me._seekbar_file.mediaEl.addEventListener('progress', me._seekbar_file.updatePlayback);
					me._seekbar_file.mediaEl.addEventListener('canplay', me._seekbar_file.updatePlayback);
					me._seekbar_file.mediaEl.addEventListener('timeupdate', me._seekbar_file.updatePlayback);
					if (me._seekbar_file.ggActivate) {
						me._seekbar_file.mediaEl.addEventListener('play', me._seekbar_file.ggActivate);
					}
					if (me._seekbar_file.ggDeactivate) {
						me._seekbar_file.mediaEl.addEventListener('ended', me._seekbar_file.ggDeactivate);
						me._seekbar_file.mediaEl.addEventListener('pause', me._seekbar_file.ggDeactivate);
					}
					if (me._seekbar_file.ggMediaEnded) {
						me._seekbar_file.mediaEl.addEventListener('ended', me._seekbar_file.ggMediaEnded);
					}
				}
				me._seekbar_file.ggConnected = true;
			} else {
				disableSeekbar();
			}
			var videoEl = me.findElements('popup_video_file');
			if (videoEl.length > 0 && !videoEl[0].hasChildNodes()) {
				disableSeekbar();
			}
		}
		me._seekbar_file.updatePlayback = function(args) {
			if (!me._seekbar_file.ggConnected) return;
			if (me._seekbar_file.mediaEl != null) {
				if (me._seekbar_file.mediaEl.readyState || (me._seekbar_file.fromBufferSource && args && args['id'] == me._seekbar_file.mediaEl.id)) {
					if (me._seekbar_file.fromBufferSource) {
						var percent = me._seekbar_file.mediaEl.bufferSoundCurrentTime() / me._seekbar_file.mediaEl.bufferSoundDuration();
					} else {
						var percent = me._seekbar_file.mediaEl.currentTime / me._seekbar_file.mediaEl.duration;
					}
					percent = Math.min(percent, 1.0);
					var playheadpos = Math.round((me._seekbar_file.clientWidth - 2 * 8 + 1) * percent);
					playheadpos += 1;
					me._seekbar_file__playhead.style.left = playheadpos.toString() + 'px';
					var offsetPercent = Math.round(100.0 * (8 / me._seekbar_file.clientWidth));
					var currPos = offsetPercent + Math.round(percent * (100 - 2 * offsetPercent));
					var gradientString ='linear-gradient(90deg, #484848 0%, #484848 ' + currPos + '%';
					if (me._seekbar_file.fromBufferSource) {
						gradientString += ', #bbbbbb ' + currPos +'%, #bbbbbb 100%';
					} else {
						for (var i = 0; i < me._seekbar_file.mediaEl.buffered.length; i++) {
							var rangeStart = Math.round((me._seekbar_file.mediaEl.buffered.start(i) / me._seekbar_file.mediaEl.duration) * 100.0);
							var rangeEnd = Math.ceil((me._seekbar_file.mediaEl.buffered.end(i) / me._seekbar_file.mediaEl.duration) * 100.0);
							if (rangeEnd > currPos) {
								if (rangeStart < currPos) {
									gradientString += ', #bbbbbb ' + currPos + '%';
								} else {
									gradientString += ', #ffffff ' + currPos + '%, #ffffff ' + rangeStart + '%';
									gradientString += ', #bbbbbb ' + rangeStart + '%';
								}
									gradientString += ', #bbbbbb ' + rangeEnd + '%';
								currPos = rangeEnd;
							}
						}
						if (currPos < 100) {
							gradientString += ', #ffffff ' + currPos + '%';
						}
					}
					gradientString += ')';
					me._seekbar_file.style.background = gradientString;
				}
			}
		}
		me._seekbar_file.appendChild(me._seekbar_file__playhead);
		hs+='background: #ffffff;';
		hs+='border: 1px solid #ffffff;';
		hs+='border-radius: 8px;';
		hs+=cssPrefix + 'border-radius: 8px;';
		var hs_playhead = 'height: 14px;';
		hs_playhead += 'width: 14px;';
		hs_playhead += 'border: 0px;';
		hs_playhead += 'position: absolute;';
		hs_playhead += 'left: 1px;';
		hs_playhead += 'top: 0px;';
		hs_playhead += 'border-radius: 7;';
		hs_playhead += cssPrefix + 'border-radius: 7px;';
		hs_playhead += 'background-color: rgba(0,113,117,1);';
		hs_playhead += 'pointer-events: none;';
		me._seekbar_file.setAttribute('style', hs);
		me._seekbar_file__playhead.setAttribute('style', hs_playhead);
		me._seekbar_file.ggIsActive=function() {
			if (me._seekbar_file.mediaEl != null) {
				return (me._seekbar_file.mediaEl.paused == false && me._seekbar_file.mediaEl.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._seekbar_file.onmousedown=function (e) {
			if (e.buttons == 1 || (e.buttons == null && e.which == 1) || e.type == 'touchend' || e.type == 'mouseup') {
				if (me._seekbar_file.mediaEl != null) {
					var eventXPos;
					if(e.type == 'touchend') eventXPos = e.layerX; else eventXPos = e.offsetX;
					if (me._seekbar_file.fromBufferSource) {
						var seekpos = (eventXPos / me._seekbar_file.clientWidth) * me._seekbar_file.mediaEl.bufferSoundDuration();
						if (e.type == 'mousemove' || e.type == 'mousedown') {
							me._seekbar_file.mediaEl.bufferSoundSetDragTime(seekpos);
						} else {
							me._seekbar_file.mediaEl.bufferSoundSetTime(seekpos);
						}
					} else {
						var seekpos = (eventXPos / me._seekbar_file.clientWidth) * me._seekbar_file.mediaEl.duration;
						me._seekbar_file.mediaEl.currentTime = seekpos;
					}
				}
			}
		}
		me._seekbar_file.onmouseup=function (e) {
			if (e.buttons == 1 || (e.buttons == null && e.which == 1) || e.type == 'touchend' || e.type == 'mouseup') {
				if (me._seekbar_file.mediaEl != null) {
					var eventXPos;
					if(e.type == 'touchend') eventXPos = e.layerX; else eventXPos = e.offsetX;
					if (me._seekbar_file.fromBufferSource) {
						var seekpos = (eventXPos / me._seekbar_file.clientWidth) * me._seekbar_file.mediaEl.bufferSoundDuration();
						if (e.type == 'mousemove' || e.type == 'mousedown') {
							me._seekbar_file.mediaEl.bufferSoundSetDragTime(seekpos);
						} else {
							me._seekbar_file.mediaEl.bufferSoundSetTime(seekpos);
						}
					} else {
						var seekpos = (eventXPos / me._seekbar_file.clientWidth) * me._seekbar_file.mediaEl.duration;
						me._seekbar_file.mediaEl.currentTime = seekpos;
					}
				}
			}
		}
		me._seekbar_file.onmousemove=function (e) {
			if (e.buttons == 1 || (e.buttons == null && e.which == 1) || e.type == 'touchend' || e.type == 'mouseup') {
				if (me._seekbar_file.mediaEl != null) {
					var eventXPos;
					if(e.type == 'touchend') eventXPos = e.layerX; else eventXPos = e.offsetX;
					if (me._seekbar_file.fromBufferSource) {
						var seekpos = (eventXPos / me._seekbar_file.clientWidth) * me._seekbar_file.mediaEl.bufferSoundDuration();
						if (e.type == 'mousemove' || e.type == 'mousedown') {
							me._seekbar_file.mediaEl.bufferSoundSetDragTime(seekpos);
						} else {
							me._seekbar_file.mediaEl.bufferSoundSetTime(seekpos);
						}
					} else {
						var seekpos = (eventXPos / me._seekbar_file.clientWidth) * me._seekbar_file.mediaEl.duration;
						me._seekbar_file.mediaEl.currentTime = seekpos;
					}
				}
			}
		}
		me._seekbar_file.ontouchend=function (e) {
			if (e.buttons == 1 || (e.buttons == null && e.which == 1) || e.type == 'touchend' || e.type == 'mouseup') {
				if (me._seekbar_file.mediaEl != null) {
					var eventXPos;
					if(e.type == 'touchend') eventXPos = e.layerX; else eventXPos = e.offsetX;
					if (me._seekbar_file.fromBufferSource) {
						var seekpos = (eventXPos / me._seekbar_file.clientWidth) * me._seekbar_file.mediaEl.bufferSoundDuration();
						if (e.type == 'mousemove' || e.type == 'mousedown') {
							me._seekbar_file.mediaEl.bufferSoundSetDragTime(seekpos);
						} else {
							me._seekbar_file.mediaEl.bufferSoundSetTime(seekpos);
						}
					} else {
						var seekpos = (eventXPos / me._seekbar_file.clientWidth) * me._seekbar_file.mediaEl.duration;
						me._seekbar_file.mediaEl.currentTime = seekpos;
					}
				}
			}
		}
		me._seekbar_file.ggActivate=function () {
			me._ht_video_pause_file.style[domTransition]='none';
			me._ht_video_pause_file.style.visibility=(Number(me._ht_video_pause_file.style.opacity)>0||!me._ht_video_pause_file.style.opacity)?'inherit':'hidden';
			me._ht_video_pause_file.ggVisible=true;
			me._ht_video_play_file.style[domTransition]='none';
			me._ht_video_play_file.style.visibility='hidden';
			me._ht_video_play_file.ggVisible=false;
		}
		me._seekbar_file.ggDeactivate=function () {
			me._ht_video_play_file.style[domTransition]='none';
			me._ht_video_play_file.style.visibility=(Number(me._ht_video_play_file.style.opacity)>0||!me._ht_video_play_file.style.opacity)?'inherit':'hidden';
			me._ht_video_play_file.ggVisible=true;
			me._ht_video_pause_file.style[domTransition]='none';
			me._ht_video_pause_file.style.visibility='hidden';
			me._ht_video_pause_file.ggVisible=false;
		}
		me._seekbar_file.ggUpdatePosition=function (useTransition) {
			me._seekbar_file.updatePlayback();
		}
		me._seekbar_file.ggNodeChange=function () {
			me._seekbar_file.connectToMediaEl();
		}
		me._video_popup_controls_file.appendChild(me._seekbar_file);
		el=me._ht_video_play_file=document.createElement('div');
		els=me._ht_video_play_file__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJMYXllcl8xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB2aWV3Qm94PSItMjQwIDMzMiAxMzAgMTMwIiBiYXNlUHJvZmlsZT0idGlueSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBkPSJNLTE3NSwzNDAuOWMtMzEsMC01Ni4xLDI1LjEtNTYuMSw1Ni4xYzAsMzEsMjUuMSw1Ni4xLDU2LjEsNTYuMXM1Ni4xLTI1LjEsNTYuMS01Ni4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtDLTExOC45LDM2Ni0xNDQsMzQwLjktMTc1LDM0MC45eiBNLTE1MC41LDM5OC42bC0zOC4xLDI2LjZjLTEuMywwLjktMi4zLDAuMy0yLjMtMS4yVjM3MGMwLTEuNSwxLTIuMSwyLjMtMS4ybDM4LjIsMjYuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xNDkuMywzOTYuMy0xNDkuMywzOTcuNy0xNTAuNSwzOTguNnoiIGZpbGw9IiNiYmJiYmIiLz4KIDwv'+
			'Zz4KIDxnIGlkPSJMYXllcl8yIj4KICA8cGF0aCBmaWxsLW9wYWNpdHk9IjEiIGQ9Ik0tMTkxLDM3MGMwLTEuNSwxLTIuMSwyLjMtMS4ybDM4LjIsMjYuNmMxLjMsMC45LDEuMywyLjMsMCwzLjJsLTM4LjIsMjYuNmMtMS4zLDAuOS0yLjMsMC4zLTIuMy0xLjJWMzcweiIgZmlsbD0iIzAwNzE3NSIvPgogPC9nPgo8L3N2Zz4K';
		me._ht_video_play_file__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_video_play_file__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJMYXllcl8xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB2aWV3Qm94PSItMjQwIDMzMiAxMzAgMTMwIiBiYXNlUHJvZmlsZT0idGlueSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBkPSJNLTE3NSwzMzQuNmMtMzQuNCwwLTYyLjQsMjcuOS02Mi40LDYyLjRjMCwzNC40LDI3LjksNjIuNCw2Mi40LDYyLjRzNjIuNC0yNy45LDYyLjQtNjIuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xMTIuNiwzNjIuNi0xNDAuNiwzMzQuNi0xNzUsMzM0LjZ6IE0tMTQ3LjgsMzk4LjhsLTQyLjQsMjkuNmMtMS40LDEtMi42LDAuNC0yLjYtMS4zVjM2N2MwLTEuNywxLjItMi4zLDIuNi0xLjNsNDIuNCwyOS42JiN4ZDsmI3hhOyYjeDk7JiN4OTtDLTE0Ni40LDM5Ni4yLTE0Ni40LDM5Ny44LTE0Ny44LDM5OC44eiIgZmlsbD0iI2JiYmJi'+
			'YiIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgZD0iTS0xOTIuOCwzNjdjMC0xLjcsMS4yLTIuMywyLjYtMS4zbDQyLjQsMjkuNmMxLjQsMSwxLjQsMi42LDAsMy42bC00Mi40LDI5LjZjLTEuNCwxLTIuNiwwLjQtMi42LTEuM1YzNjd6IiBmaWxsPSIjMDA3MTc1Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_video_play_file__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_video_play_file";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : 259px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_video_play_file.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_video_play_file.onclick=function (e) {
			if (me._popup_video_file.ggApiPlayer) {
				if (me._popup_video_file.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						me._popup_video_file.ggApiPlayer.playVideo();
					};
					if (me._popup_video_file.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._popup_video_file.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._popup_video_file.ggApiPlayerType == 'vimeo') {
					me._popup_video_file.ggApiPlayer.play();
				}
			} else {
				player.playSound("popup_video_file","1");
			}
			me._ht_video_play_file.style[domTransition]='none';
			me._ht_video_play_file.style.visibility='hidden';
			me._ht_video_play_file.ggVisible=false;
			me._ht_video_pause_file.style[domTransition]='none';
			me._ht_video_pause_file.style.visibility=(Number(me._ht_video_pause_file.style.opacity)>0||!me._ht_video_pause_file.style.opacity)?'inherit':'hidden';
			me._ht_video_pause_file.ggVisible=true;
		}
		me._ht_video_play_file.onmouseover=function (e) {
			me._ht_video_play_file__img.style.visibility='hidden';
			me._ht_video_play_file__imgo.style.visibility='inherit';
		}
		me._ht_video_play_file.onmouseout=function (e) {
			me._ht_video_play_file__img.style.visibility='inherit';
			me._ht_video_play_file__imgo.style.visibility='hidden';
		}
		me._ht_video_play_file.ggUpdatePosition=function (useTransition) {
		}
		me._video_popup_controls_file.appendChild(me._ht_video_play_file);
		el=me._ht_video_pause_file=document.createElement('div');
		els=me._ht_video_pause_file__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJMYXllcl8xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB2aWV3Qm94PSItMjQwIDMzMiAxMzAgMTMwIiBiYXNlUHJvZmlsZT0idGlueSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBkPSJNLTE3NSwzNDAuOWMtMzEsMC01Ni4xLDI1LjEtNTYuMSw1Ni4xYzAsMzEsMjUuMSw1Ni4xLDU2LjEsNTYuMXM1Ni4xLTI1LjEsNTYuMS01Ni4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtDLTExOC45LDM2Ni0xNDQsMzQwLjktMTc1LDM0MC45eiBNLTE3Ny43LDQxNi4zYzAsMS4zLTEsMi4zLTIuMywyLjNoLTE0LjNjLTEuMywwLTIuMy0xLTIuMy0yLjN2LTM4LjZjMC0xLjMsMS0yLjMsMi4zLTIuM2gxNC4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMS4zLDAsMi4zLDEsMi4zLDIuM0MtMTc3LjcsMzc3LjctMTc3LjcsNDE2LjMtMTc3Ljcs'+
			'NDE2LjN6IE0tMTUzLjQsNDE2LjNjMCwxLjMtMSwyLjMtMi4zLDIuM0gtMTcwYy0xLjMsMC0yLjMtMS0yLjMtMi4zdi0zOC42JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0xLjMsMS0yLjMsMi4zLTIuM2gxNC4zYzEuMywwLDIuMywxLDIuMywyLjNDLTE1My40LDM3Ny43LTE1My40LDQxNi4zLTE1My40LDQxNi4zeiIgZmlsbD0iI2JiYmJiYiIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxnPgogICA8cGF0aCBmaWxsLW9wYWNpdHk9IjEiIGQ9Ik0tMTgwLDM3NS40aC0xNC4zYy0xLjMsMC0yLjMsMS0yLjMsMi4zdjM4LjZjMCwxLjMsMSwyLjMsMi4zLDIuM2gxNC4zYzEuMywwLDIuMy0xLDIuMy'+
			'0yLjN2LTM4LjYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Qy0xNzcuNywzNzYuNC0xNzguNywzNzUuNC0xODAsMzc1LjR6IiBmaWxsPSIjMDA3MTc1Ii8+CiAgIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgZD0iTS0xNTUuNywzNzUuNEgtMTcwYy0xLjMsMC0yLjMsMS0yLjMsMi4zdjM4LjZjMCwxLjMsMSwyLjMsMi4zLDIuM2gxNC4zYzEuMywwLDIuMy0xLDIuMy0yLjN2LTM4LjYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Qy0xNTMuNCwzNzYuNC0xNTQuNCwzNzUuNC0xNTUuNywzNzUuNHoiIGZpbGw9IiMwMDcxNzUiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_video_pause_file__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_video_pause_file__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJMYXllcl8xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB2aWV3Qm94PSItMjQwIDMzMiAxMzAgMTMwIiBiYXNlUHJvZmlsZT0idGlueSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBkPSJNLTE3NSwzMzQuNmMtMzQuNCwwLTYyLjQsMjcuOS02Mi40LDYyLjRjMCwzNC40LDI3LjksNjIuNCw2Mi40LDYyLjRzNjIuNC0yNy45LDYyLjQtNjIuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xMTIuNiwzNjIuNi0xNDAuNiwzMzQuNi0xNzUsMzM0LjZ6IE0tMTc4LDQxOC40YzAsMS40LTEuMSwyLjYtMi42LDIuNmgtMTUuOWMtMS40LDAtMi42LTEuMS0yLjYtMi42di00Mi45JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0xLjQsMS4xLTIuNiwyLjYtMi42aDE1LjljMS40LDAsMi42LDEuMSwyLjYsMi42Qy0xNzgsMzc1LjUtMTc4LDQx'+
			'OC40LTE3OCw0MTguNHogTS0xNTEsNDE4LjRjMCwxLjQtMS4xLDIuNi0yLjYsMi42aC0xNS45JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTEuNCwwLTIuNi0xLjEtMi42LTIuNnYtNDIuOWMwLTEuNCwxLjEtMi42LDIuNi0yLjZoMTUuOWMxLjQsMCwyLjYsMS4xLDIuNiwyLjZDLTE1MSwzNzUuNS0xNTEsNDE4LjQtMTUxLDQxOC40eiIgZmlsbD0iI2JiYmJiYiIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxnPgogICA8cGF0aCBmaWxsLW9wYWNpdHk9IjEiIGQ9Ik0tMTgwLjUsMzczaC0xNS45Yy0xLjQsMC0yLjYsMS4xLTIuNiwyLjZ2NDIuOWMwLDEuNCwxLjEsMi42LDIuNiwyLjZoMTUuOWMxLj'+
			'QsMCwyLjYtMS4xLDIuNi0yLjZ2LTQyLjkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Qy0xNzgsMzc0LjEtMTc5LjEsMzczLTE4MC41LDM3M3oiIGZpbGw9IiMwMDcxNzUiLz4KICAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBkPSJNLTE1My41LDM3M2gtMTUuOWMtMS40LDAtMi42LDEuMS0yLjYsMi42djQyLjljMCwxLjQsMS4xLDIuNiwyLjYsMi42aDE1LjljMS40LDAsMi42LTEuMSwyLjYtMi42di00Mi45JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0MtMTUxLDM3NC4xLTE1Mi4xLDM3My0xNTMuNSwzNzN6IiBmaWxsPSIjMDA3MTc1Ii8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._ht_video_pause_file__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_video_pause_file";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : 259px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_video_pause_file.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_video_pause_file.onclick=function (e) {
			if (me._popup_video_file.ggApiPlayer) {
				if (me._popup_video_file.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						me._popup_video_file.ggApiPlayer.pauseVideo();
					};
					if (me._popup_video_file.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._popup_video_file.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._popup_video_file.ggApiPlayerType == 'vimeo') {
					me._popup_video_file.ggApiPlayer.pause();
				}
			} else {
				player.pauseSound("popup_video_file");
			}
			me._ht_video_pause_file.style[domTransition]='none';
			me._ht_video_pause_file.style.visibility='hidden';
			me._ht_video_pause_file.ggVisible=false;
			me._ht_video_play_file.style[domTransition]='none';
			me._ht_video_play_file.style.visibility=(Number(me._ht_video_play_file.style.opacity)>0||!me._ht_video_play_file.style.opacity)?'inherit':'hidden';
			me._ht_video_play_file.ggVisible=true;
		}
		me._ht_video_pause_file.onmouseover=function (e) {
			me._ht_video_pause_file__img.style.visibility='hidden';
			me._ht_video_pause_file__imgo.style.visibility='inherit';
		}
		me._ht_video_pause_file.onmouseout=function (e) {
			me._ht_video_pause_file__img.style.visibility='inherit';
			me._ht_video_pause_file__imgo.style.visibility='hidden';
		}
		me._ht_video_pause_file.ggUpdatePosition=function (useTransition) {
		}
		me._video_popup_controls_file.appendChild(me._ht_video_pause_file);
		me.divSkin.appendChild(me._video_popup_controls_file);
		el=me._ir_a_planta=document.createElement('div');
		el.ggId="ir a planta";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0,sy:0 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 5px;';
		hs+='border-radius : 5px;';
		hs+='border : 1px solid #00c2c9;';
		hs+='bottom : 134px;';
		hs+='cursor : pointer;';
		hs+='height : 33px;';
		hs+='position : absolute;';
		hs+='right : -150px;';
		hs+='visibility : inherit;';
		hs+='width : 78px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._ir_a_planta.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._ir_a_planta.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('Interfaz') == true)) && 
				((player.getViewerSize().width < 900))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getVariableValue('Interfaz') == true)) && 
				((player.getViewerSize().width > 900))
			)
			{
				newLogicStatePosition = 1;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._ir_a_planta.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._ir_a_planta.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._ir_a_planta.style[domTransition]='right 1000ms ease 0ms, bottom 1000ms ease 0ms, ' + cssPrefix + 'transform 500ms ease 0ms';
				if (me._ir_a_planta.ggCurrentLogicStatePosition == 0) {
					me._ir_a_planta.style.right='15px';
					me._ir_a_planta.style.bottom='134px';
				}
				else if (me._ir_a_planta.ggCurrentLogicStatePosition == 1) {
					me._ir_a_planta.style.right='30px';
					me._ir_a_planta.style.bottom='134px';
				}
				else {
					me._ir_a_planta.style.right='-150px';
					me._ir_a_planta.style.bottom='134px';
				}
			}
		}
		me._ir_a_planta.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('planta') == false)) && 
				((player.getViewerSize().width < 900))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getVariableValue('planta') == false)) && 
				((player.getViewerSize().width > 900))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._ir_a_planta.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._ir_a_planta.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._ir_a_planta.style[domTransition]='right 1000ms ease 0ms, bottom 1000ms ease 0ms, ' + cssPrefix + 'transform 500ms ease 0ms';
				if (me._ir_a_planta.ggCurrentLogicStateScaling == 0) {
					me._ir_a_planta.ggParameter.sx = 1.3;
					me._ir_a_planta.ggParameter.sy = 1.3;
					me._ir_a_planta.style[domTransform]=parameterToTransform(me._ir_a_planta.ggParameter);
				}
				else if (me._ir_a_planta.ggCurrentLogicStateScaling == 1) {
					me._ir_a_planta.ggParameter.sx = 1.5;
					me._ir_a_planta.ggParameter.sy = 1.5;
					me._ir_a_planta.style[domTransform]=parameterToTransform(me._ir_a_planta.ggParameter);
				}
				else {
					me._ir_a_planta.ggParameter.sx = 0;
					me._ir_a_planta.ggParameter.sy = 0;
					me._ir_a_planta.style[domTransform]=parameterToTransform(me._ir_a_planta.ggParameter);
				}
			}
		}
		me._ir_a_planta.onclick=function (e) {
			player.setVariableValue('planta', true);
			player.openNext("{node3}","");
		}
		me._ir_a_planta.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_20=document.createElement('div');
		el.ggId="Rectangle 2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 5px;';
		hs+='border-radius : 5px;';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #00c2c9;';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 70px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_20.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_20.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseDown['rectangle_20'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._rectangle_20.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._rectangle_20.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._rectangle_20.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms';
				if (me._rectangle_20.ggCurrentLogicStateScaling == 0) {
					me._rectangle_20.ggParameter.sx = 0.8;
					me._rectangle_20.ggParameter.sy = 0.8;
					me._rectangle_20.style[domTransform]=parameterToTransform(me._rectangle_20.ggParameter);
				}
				else {
					me._rectangle_20.ggParameter.sx = 1;
					me._rectangle_20.ggParameter.sy = 1;
					me._rectangle_20.style[domTransform]=parameterToTransform(me._rectangle_20.ggParameter);
				}
			}
		}
		me._rectangle_20.onmouseout=function (e) {
			me.elementMouseDown['rectangle_20']=false;
			me._rectangle_20.logicBlock_scaling();
		}
		me._rectangle_20.onmousedown=function (e) {
			me.elementMouseDown['rectangle_20']=true;
			me._rectangle_20.logicBlock_scaling();
		}
		me._rectangle_20.onmouseup=function (e) {
			me.elementMouseDown['rectangle_20']=false;
			me._rectangle_20.logicBlock_scaling();
		}
		me._rectangle_20.ontouchend=function (e) {
			me.elementMouseDown['rectangle_20']=false;
			me._rectangle_20.logicBlock_scaling();
		}
		me._rectangle_20.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._text_40=document.createElement('div');
		els=me._text_40__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 4";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 15px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100%;';
		hs+='height: 15px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,113,117,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Arriba";
		el.appendChild(els);
		me._text_40.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_40.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._rectangle_20.appendChild(me._text_40);
		me._ir_a_planta.appendChild(me._rectangle_20);
		me.divSkin.appendChild(me._ir_a_planta);
		el=me._ir_a_frontal=document.createElement('div');
		el.ggId="ir a frontal";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0,sy:0 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 5px;';
		hs+='border-radius : 5px;';
		hs+='border : 1px solid #00c2c9;';
		hs+='bottom : 134px;';
		hs+='cursor : pointer;';
		hs+='height : 33px;';
		hs+='position : absolute;';
		hs+='right : -150px;';
		hs+='visibility : inherit;';
		hs+='width : 78px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._ir_a_frontal.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._ir_a_frontal.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('Interfaz') == true)) && 
				((player.getViewerSize().width < 900))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getVariableValue('Interfaz') == true)) && 
				((player.getViewerSize().width > 900))
			)
			{
				newLogicStatePosition = 1;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._ir_a_frontal.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._ir_a_frontal.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._ir_a_frontal.style[domTransition]='right 1000ms ease 0ms, bottom 1000ms ease 0ms, ' + cssPrefix + 'transform 500ms ease 0ms';
				if (me._ir_a_frontal.ggCurrentLogicStatePosition == 0) {
					me._ir_a_frontal.style.right='15px';
					me._ir_a_frontal.style.bottom='134px';
				}
				else if (me._ir_a_frontal.ggCurrentLogicStatePosition == 1) {
					me._ir_a_frontal.style.right='30px';
					me._ir_a_frontal.style.bottom='134px';
				}
				else {
					me._ir_a_frontal.style.right='-150px';
					me._ir_a_frontal.style.bottom='134px';
				}
			}
		}
		me._ir_a_frontal.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('planta') == true)) && 
				((player.getViewerSize().width < 900))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getVariableValue('planta') == true)) && 
				((player.getViewerSize().width > 900))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._ir_a_frontal.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._ir_a_frontal.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._ir_a_frontal.style[domTransition]='right 1000ms ease 0ms, bottom 1000ms ease 0ms, ' + cssPrefix + 'transform 500ms ease 0ms';
				if (me._ir_a_frontal.ggCurrentLogicStateScaling == 0) {
					me._ir_a_frontal.ggParameter.sx = 1.3;
					me._ir_a_frontal.ggParameter.sy = 1.3;
					me._ir_a_frontal.style[domTransform]=parameterToTransform(me._ir_a_frontal.ggParameter);
				}
				else if (me._ir_a_frontal.ggCurrentLogicStateScaling == 1) {
					me._ir_a_frontal.ggParameter.sx = 1.5;
					me._ir_a_frontal.ggParameter.sy = 1.5;
					me._ir_a_frontal.style[domTransform]=parameterToTransform(me._ir_a_frontal.ggParameter);
				}
				else {
					me._ir_a_frontal.ggParameter.sx = 0;
					me._ir_a_frontal.ggParameter.sy = 0;
					me._ir_a_frontal.style[domTransform]=parameterToTransform(me._ir_a_frontal.ggParameter);
				}
			}
		}
		me._ir_a_frontal.onclick=function (e) {
			player.setVariableValue('planta', false);
			player.openNext("{node2}","");
		}
		me._ir_a_frontal.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_2=document.createElement('div');
		el.ggId="Rectangle 2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 5px;';
		hs+='border-radius : 5px;';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #00c2c9;';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 70px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_2.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseDown['rectangle_2'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._rectangle_2.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._rectangle_2.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._rectangle_2.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms';
				if (me._rectangle_2.ggCurrentLogicStateScaling == 0) {
					me._rectangle_2.ggParameter.sx = 0.8;
					me._rectangle_2.ggParameter.sy = 0.8;
					me._rectangle_2.style[domTransform]=parameterToTransform(me._rectangle_2.ggParameter);
				}
				else {
					me._rectangle_2.ggParameter.sx = 1;
					me._rectangle_2.ggParameter.sy = 1;
					me._rectangle_2.style[domTransform]=parameterToTransform(me._rectangle_2.ggParameter);
				}
			}
		}
		me._rectangle_2.onmouseout=function (e) {
			me.elementMouseDown['rectangle_2']=false;
			me._rectangle_2.logicBlock_scaling();
		}
		me._rectangle_2.onmousedown=function (e) {
			me.elementMouseDown['rectangle_2']=true;
			me._rectangle_2.logicBlock_scaling();
		}
		me._rectangle_2.onmouseup=function (e) {
			me.elementMouseDown['rectangle_2']=false;
			me._rectangle_2.logicBlock_scaling();
		}
		me._rectangle_2.ontouchend=function (e) {
			me.elementMouseDown['rectangle_2']=false;
			me._rectangle_2.logicBlock_scaling();
		}
		me._rectangle_2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._text_4=document.createElement('div');
		els=me._text_4__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 4";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 15px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100%;';
		hs+='height: 15px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,113,117,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Volver";
		el.appendChild(els);
		me._text_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_4.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._rectangle_2.appendChild(me._text_4);
		me._ir_a_frontal.appendChild(me._rectangle_2);
		me.divSkin.appendChild(me._ir_a_frontal);
		me._popup_video_file.ggVideoSource = 'media/';
		me._popup_video_file.ggVideoNotLoaded = true;
		player.addListener('sizechanged', function() {
			me.updateSize(me.divSkin);
		});
		player.addListener('imagesready', function() {
			me._scrollarea_1.ggUpdatePosition();
			me._ticker.ggTimestamp=me.ggCurrentTime;
			me._ticker.ggTimeout=500;
			me._intro_interfaz.ggTimestamp=me.ggCurrentTime;
			me._intro_interfaz.ggTimeout=2000;
			me._timer_1.ggTimestamp=me.ggCurrentTime;
			me._timer_1.ggTimeout=1000;
		});
	};
	this.hotspotProxyClick=function(id, url) {
		if (id=='1') {
			me._blanco.onclick();
		}
		if (id=='1') {
			me._beige.onclick();
		}
		if (id=='1') {
			me._gris_oscuro.onclick();
		}
		if (id=='1') {
			me._gris_claro.onclick();
		}
		if (id=='1') {
			me._x8.onclick();
		}
		if (id=='1') {
			me._x10.onclick();
		}
		if (id=='1') {
			me._x22.onclick();
		}
		if (id=='1') {
			me._no2.onclick();
		}
		if (id=='1') {
			me.__2.onclick();
		}
		if (id=='1') {
			me.__4.onclick();
		}
		if (id=='1') {
			me._on0.onclick();
		}
		if (id=='1') {
			me._no1.onclick();
		}
		if (id=='1') {
			me._si1.onclick();
		}
		if (id=='1') {
			me._no0.onclick();
		}
		if (id=='1') {
			me._si0.onclick();
		}
		if (id=='1') {
			me._no.onclick();
		}
		if (id=='1') {
			me._si.onclick();
		}
		if (id=='1') {
			me._activo4.onclick();
		}
		if (id=='1') {
			me._inactivo4.onclick();
		}
		if (id=='1') {
			me._activo3.onclick();
		}
		if (id=='1') {
			me._inactivo3.onclick();
		}
		if (id=='1') {
			me._activo2.onclick();
		}
		if (id=='1') {
			me._inactivo2.onclick();
		}
		if (id=='1') {
			me._activo1.onclick();
		}
		if (id=='1') {
			me._inactivo1.onclick();
		}
		if (id=='1') {
			me._activo0.onclick();
		}
		if (id=='1') {
			me._inactivo0.onclick();
		}
		if (id=='1') {
			me._activo.onclick();
		}
		if (id=='1') {
			me._inactivo.onclick();
		}
		if (id=='1') {
			me._on_off.onclick();
		}
	}
	this.hotspotProxyDoubleClick=function(id, url) {
	}
	me.hotspotProxyOver=function(id, url) {
	}
	me.hotspotProxyOut=function(id, url) {
		if (id=='1') {
			me._blanco.onmouseout();
		}
		if (id=='1') {
			me._beige.onmouseout();
		}
		if (id=='1') {
			me._gris_oscuro.onmouseout();
		}
		if (id=='1') {
			me._gris_claro.onmouseout();
		}
		if (id=='1') {
			me._x8.onmouseout();
		}
		if (id=='1') {
			me._x10.onmouseout();
		}
		if (id=='1') {
			me._x22.onmouseout();
		}
		if (id=='1') {
			me._no2.onmouseout();
		}
		if (id=='1') {
			me.__2.onmouseout();
		}
		if (id=='1') {
			me.__4.onmouseout();
		}
		if (id=='1') {
			me._on0.onmouseout();
		}
		if (id=='1') {
			me._no1.onmouseout();
		}
		if (id=='1') {
			me._si1.onmouseout();
		}
		if (id=='1') {
			me._no0.onmouseout();
		}
		if (id=='1') {
			me._si0.onmouseout();
		}
		if (id=='1') {
			me._no.onmouseout();
		}
		if (id=='1') {
			me._si.onmouseout();
		}
		if (id=='1') {
			me._color.onmouseout();
		}
		if (id=='1') {
			me._hidros.onmouseout();
		}
		if (id=='1') {
			me._luces.onmouseout();
		}
		if (id=='1') {
			me._blower.onmouseout();
		}
		if (id=='1') {
			me._cascada.onmouseout();
		}
		if (id=='1') {
			me._cabeceros.onmouseout();
		}
		if (id=='1') {
			me._versiones.onmouseout();
		}
		if (id=='1') {
			me._on_off.onmouseout();
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_file_changenode = function(){
		if(hotspotTemplates['ht_video_file']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
				if (hotspotTemplates['ht_video_file'][i]._indicador && hotspotTemplates['ht_video_file'][i]._indicador.logicBlock_scaling) {
					hotspotTemplates['ht_video_file'][i]._indicador.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_file_mousedown = function(){
		if(hotspotTemplates['ht_video_file']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
				if (hotspotTemplates['ht_video_file'][i]._bolita2 && hotspotTemplates['ht_video_file'][i]._bolita2.logicBlock_scaling) {
					hotspotTemplates['ht_video_file'][i]._bolita2.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_file_varchanged_infohotspots = function(){
		if(hotspotTemplates['ht_video_file']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
				if (hotspotTemplates['ht_video_file'][i]._indicador && hotspotTemplates['ht_video_file'][i]._indicador.logicBlock_scaling) {
					hotspotTemplates['ht_video_file'][i]._indicador.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_variaciones_changenode = function(){
		if(hotspotTemplates['variaciones']) {
			var i;
			for(i = 0; i < hotspotTemplates['variaciones'].length; i++) {
				if (hotspotTemplates['variaciones'][i]._blower1 && hotspotTemplates['variaciones'][i]._blower1.logicBlock_alpha) {
					hotspotTemplates['variaciones'][i]._blower1.logicBlock_alpha();
				}
				if (hotspotTemplates['variaciones'][i]._cascada1 && hotspotTemplates['variaciones'][i]._cascada1.logicBlock_alpha) {
					hotspotTemplates['variaciones'][i]._cascada1.logicBlock_alpha();
				}
				if (hotspotTemplates['variaciones'][i]._agua && hotspotTemplates['variaciones'][i]._agua.logicBlock_alpha) {
					hotspotTemplates['variaciones'][i]._agua.logicBlock_alpha();
				}
				if (hotspotTemplates['variaciones'][i]._aguacascada && hotspotTemplates['variaciones'][i]._aguacascada.logicBlock_alpha) {
					hotspotTemplates['variaciones'][i]._aguacascada.logicBlock_alpha();
				}
				if (hotspotTemplates['variaciones'][i]._cabeceros1 && hotspotTemplates['variaciones'][i]._cabeceros1.logicBlock_alpha) {
					hotspotTemplates['variaciones'][i]._cabeceros1.logicBlock_alpha();
				}
				if (hotspotTemplates['variaciones'][i]._beige0 && hotspotTemplates['variaciones'][i]._beige0.logicBlock_alpha) {
					hotspotTemplates['variaciones'][i]._beige0.logicBlock_alpha();
				}
				if (hotspotTemplates['variaciones'][i]._blanco0 && hotspotTemplates['variaciones'][i]._blanco0.logicBlock_alpha) {
					hotspotTemplates['variaciones'][i]._blanco0.logicBlock_alpha();
				}
				if (hotspotTemplates['variaciones'][i]._negro && hotspotTemplates['variaciones'][i]._negro.logicBlock_alpha) {
					hotspotTemplates['variaciones'][i]._negro.logicBlock_alpha();
				}
				if (hotspotTemplates['variaciones'][i].__8 && hotspotTemplates['variaciones'][i].__8.logicBlock_alpha) {
					hotspotTemplates['variaciones'][i].__8.logicBlock_alpha();
				}
				if (hotspotTemplates['variaciones'][i].__ && hotspotTemplates['variaciones'][i].__.logicBlock_alpha) {
					hotspotTemplates['variaciones'][i].__.logicBlock_alpha();
				}
				if (hotspotTemplates['variaciones'][i].__6 && hotspotTemplates['variaciones'][i].__6.logicBlock_alpha) {
					hotspotTemplates['variaciones'][i].__6.logicBlock_alpha();
				}
				if (hotspotTemplates['variaciones'][i].__20 && hotspotTemplates['variaciones'][i].__20.logicBlock_alpha) {
					hotspotTemplates['variaciones'][i].__20.logicBlock_alpha();
				}
				if (hotspotTemplates['variaciones'][i].__40 && hotspotTemplates['variaciones'][i].__40.logicBlock_alpha) {
					hotspotTemplates['variaciones'][i].__40.logicBlock_alpha();
				}
				if (hotspotTemplates['variaciones'][i].__2on && hotspotTemplates['variaciones'][i].__2on.logicBlock_alpha) {
					hotspotTemplates['variaciones'][i].__2on.logicBlock_alpha();
				}
				if (hotspotTemplates['variaciones'][i].__4on && hotspotTemplates['variaciones'][i].__4on.logicBlock_alpha) {
					hotspotTemplates['variaciones'][i].__4on.logicBlock_alpha();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_variaciones_varchanged_blower = function(){
		if(hotspotTemplates['variaciones']) {
			var i;
			for(i = 0; i < hotspotTemplates['variaciones'].length; i++) {
				if (hotspotTemplates['variaciones'][i]._blower1 && hotspotTemplates['variaciones'][i]._blower1.logicBlock_alpha) {
					hotspotTemplates['variaciones'][i]._blower1.logicBlock_alpha();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_variaciones_varchanged_cascada = function(){
		if(hotspotTemplates['variaciones']) {
			var i;
			for(i = 0; i < hotspotTemplates['variaciones'].length; i++) {
				if (hotspotTemplates['variaciones'][i]._cascada1 && hotspotTemplates['variaciones'][i]._cascada1.logicBlock_alpha) {
					hotspotTemplates['variaciones'][i]._cascada1.logicBlock_alpha();
				}
				if (hotspotTemplates['variaciones'][i]._aguacascada && hotspotTemplates['variaciones'][i]._aguacascada.logicBlock_alpha) {
					hotspotTemplates['variaciones'][i]._aguacascada.logicBlock_alpha();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_variaciones_varchanged_Prendido = function(){
		if(hotspotTemplates['variaciones']) {
			var i;
			for(i = 0; i < hotspotTemplates['variaciones'].length; i++) {
				if (hotspotTemplates['variaciones'][i]._agua && hotspotTemplates['variaciones'][i]._agua.logicBlock_alpha) {
					hotspotTemplates['variaciones'][i]._agua.logicBlock_alpha();
				}
				if (hotspotTemplates['variaciones'][i]._aguacascada && hotspotTemplates['variaciones'][i]._aguacascada.logicBlock_alpha) {
					hotspotTemplates['variaciones'][i]._aguacascada.logicBlock_alpha();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_variaciones_varchanged_filtro = function(){
		if(hotspotTemplates['variaciones']) {
			var i;
			for(i = 0; i < hotspotTemplates['variaciones'].length; i++) {
				if (hotspotTemplates['variaciones'][i]._agua && hotspotTemplates['variaciones'][i]._agua.logicBlock_alpha) {
					hotspotTemplates['variaciones'][i]._agua.logicBlock_alpha();
				}
				if (hotspotTemplates['variaciones'][i]._cabeceros1 && hotspotTemplates['variaciones'][i]._cabeceros1.logicBlock_alpha) {
					hotspotTemplates['variaciones'][i]._cabeceros1.logicBlock_alpha();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_variaciones_varchanged_cabeceros = function(){
		if(hotspotTemplates['variaciones']) {
			var i;
			for(i = 0; i < hotspotTemplates['variaciones'].length; i++) {
				if (hotspotTemplates['variaciones'][i]._cabeceros1 && hotspotTemplates['variaciones'][i]._cabeceros1.logicBlock_alpha) {
					hotspotTemplates['variaciones'][i]._cabeceros1.logicBlock_alpha();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_variaciones_varchanged_color = function(){
		if(hotspotTemplates['variaciones']) {
			var i;
			for(i = 0; i < hotspotTemplates['variaciones'].length; i++) {
				if (hotspotTemplates['variaciones'][i]._beige0 && hotspotTemplates['variaciones'][i]._beige0.logicBlock_alpha) {
					hotspotTemplates['variaciones'][i]._beige0.logicBlock_alpha();
				}
				if (hotspotTemplates['variaciones'][i]._blanco0 && hotspotTemplates['variaciones'][i]._blanco0.logicBlock_alpha) {
					hotspotTemplates['variaciones'][i]._blanco0.logicBlock_alpha();
				}
				if (hotspotTemplates['variaciones'][i]._negro && hotspotTemplates['variaciones'][i]._negro.logicBlock_alpha) {
					hotspotTemplates['variaciones'][i]._negro.logicBlock_alpha();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_variaciones_varchanged_hidros = function(){
		if(hotspotTemplates['variaciones']) {
			var i;
			for(i = 0; i < hotspotTemplates['variaciones'].length; i++) {
				if (hotspotTemplates['variaciones'][i].__8 && hotspotTemplates['variaciones'][i].__8.logicBlock_alpha) {
					hotspotTemplates['variaciones'][i].__8.logicBlock_alpha();
				}
				if (hotspotTemplates['variaciones'][i].__ && hotspotTemplates['variaciones'][i].__.logicBlock_alpha) {
					hotspotTemplates['variaciones'][i].__.logicBlock_alpha();
				}
				if (hotspotTemplates['variaciones'][i].__6 && hotspotTemplates['variaciones'][i].__6.logicBlock_alpha) {
					hotspotTemplates['variaciones'][i].__6.logicBlock_alpha();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_variaciones_varchanged_luces = function(){
		if(hotspotTemplates['variaciones']) {
			var i;
			for(i = 0; i < hotspotTemplates['variaciones'].length; i++) {
				if (hotspotTemplates['variaciones'][i].__20 && hotspotTemplates['variaciones'][i].__20.logicBlock_alpha) {
					hotspotTemplates['variaciones'][i].__20.logicBlock_alpha();
				}
				if (hotspotTemplates['variaciones'][i].__40 && hotspotTemplates['variaciones'][i].__40.logicBlock_alpha) {
					hotspotTemplates['variaciones'][i].__40.logicBlock_alpha();
				}
				if (hotspotTemplates['variaciones'][i].__2on && hotspotTemplates['variaciones'][i].__2on.logicBlock_alpha) {
					hotspotTemplates['variaciones'][i].__2on.logicBlock_alpha();
				}
				if (hotspotTemplates['variaciones'][i].__4on && hotspotTemplates['variaciones'][i].__4on.logicBlock_alpha) {
					hotspotTemplates['variaciones'][i].__4on.logicBlock_alpha();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_variaciones_varchanged_luceson = function(){
		if(hotspotTemplates['variaciones']) {
			var i;
			for(i = 0; i < hotspotTemplates['variaciones'].length; i++) {
				if (hotspotTemplates['variaciones'][i].__20 && hotspotTemplates['variaciones'][i].__20.logicBlock_alpha) {
					hotspotTemplates['variaciones'][i].__20.logicBlock_alpha();
				}
				if (hotspotTemplates['variaciones'][i].__40 && hotspotTemplates['variaciones'][i].__40.logicBlock_alpha) {
					hotspotTemplates['variaciones'][i].__40.logicBlock_alpha();
				}
				if (hotspotTemplates['variaciones'][i].__2on && hotspotTemplates['variaciones'][i].__2on.logicBlock_alpha) {
					hotspotTemplates['variaciones'][i].__2on.logicBlock_alpha();
				}
				if (hotspotTemplates['variaciones'][i].__4on && hotspotTemplates['variaciones'][i].__4on.logicBlock_alpha) {
					hotspotTemplates['variaciones'][i].__4on.logicBlock_alpha();
				}
			}
		}
	}
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		me.ggCurrentTime=new Date().getTime();
		if (me._timer_mano.ggLastIsActive!=me._timer_mano.ggIsActive()) {
			me._timer_mano.ggLastIsActive=me._timer_mano.ggIsActive();
			if (me._timer_mano.ggLastIsActive) {
				me._timer_mano.style[domTransition]='none';
				me._timer_mano.style.opacity='0';
				me._timer_mano.style.visibility='hidden';
			} else {
			}
		}
		if (me._ticker.ggLastIsActive!=me._ticker.ggIsActive()) {
			me._ticker.ggLastIsActive=me._ticker.ggIsActive();
			if (me._ticker.ggLastIsActive) {
				player.setVariableValue('ticker', true);
			} else {
				player.setVariableValue('ticker', false);
			}
		}
		me._ticker.ggUpdateConditionTimer();
		if (me._intro_interfaz.ggLastIsActive!=me._intro_interfaz.ggIsActive()) {
			me._intro_interfaz.ggLastIsActive=me._intro_interfaz.ggIsActive();
			if (me._intro_interfaz.ggLastIsActive) {
			} else {
				player.setVariableValue('Interfaz', true);
			}
		}
		me._intro_interfaz.ggUpdateConditionTimer();
		if (me._timer_1.ggLastIsActive!=me._timer_1.ggIsActive()) {
			me._timer_1.ggLastIsActive=me._timer_1.ggIsActive();
			if (me._timer_1.ggLastIsActive) {
			} else {
				player.changeFovLog(-2,true);
			}
		}
		me._timer_1.ggUpdateConditionTimer();
		if (me._timer_versiones.ggLastIsActive!=me._timer_versiones.ggIsActive()) {
			me._timer_versiones.ggLastIsActive=me._timer_versiones.ggIsActive();
			if (me._timer_versiones.ggLastIsActive) {
				player.setVariableValue('versionesescalar', true);
			} else {
				player.setVariableValue('versionesescalar', false);
			}
		}
		me._timer_versiones.ggUpdateConditionTimer();
	};
	player.addListener('timer', me.skinTimerEvent);
	function SkinHotspotClass_ht_video_file(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_video_file=document.createElement('div');
		el.ggId="ht_video_file";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='z-index: 10;';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 303px;';
		hs+='position : absolute;';
		hs+='top : 330px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_video_file.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_video_file.onclick=function (e) {
			skin._popup_video_file.ggInitMedia(player.getBasePath()+""+me.hotspot.url);
			player.setVariableValue('vis_video_file', true);
			if (skin._popup_video_file.ggApiPlayer) {
				if (skin._popup_video_file.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						skin._popup_video_file.ggApiPlayer.playVideo();
					};
					if (skin._popup_video_file.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (skin._popup_video_file.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (skin._popup_video_file.ggApiPlayerType == 'vimeo') {
					skin._popup_video_file.ggApiPlayer.play();
				}
			} else {
				player.playSound("popup_video_file","1");
			}
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_video_file.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_video_file.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_video_file.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_video_file.ggUpdatePosition=function (useTransition) {
		}
		el=me._indicador=document.createElement('div');
		el.ggId="indicador";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0,sy:0 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: 10;';
		hs+='background : #00c2c9;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 10px;';
		hs+='cursor : default;';
		hs+='height : 64px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 2px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 100%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._indicador.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._indicador.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('infohotspots') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._indicador.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._indicador.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._indicador.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms';
				if (me._indicador.ggCurrentLogicStateScaling == 0) {
					me._indicador.ggParameter.sx = 1;
					me._indicador.ggParameter.sy = 1;
					me._indicador.style[domTransform]=parameterToTransform(me._indicador.ggParameter);
				}
				else {
					me._indicador.ggParameter.sx = 0;
					me._indicador.ggParameter.sy = 0;
					me._indicador.style[domTransform]=parameterToTransform(me._indicador.ggParameter);
				}
			}
		}
		me._indicador.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._bolita=document.createElement('div');
		el.ggId="bolita";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: 10;';
		hs+=cssPrefix + 'border-radius : 60px;';
		hs+='border-radius : 60px;';
		hs+='border : 2px solid #00c2c9;';
		hs+='bottom : 65px;';
		hs+='cursor : pointer;';
		hs+='height : 38px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._bolita.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._bolita.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._bolita2=document.createElement('div');
		el.ggId="bolita2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: 10;';
		hs+=cssPrefix + 'border-radius : 60px;';
		hs+='border-radius : 60px;';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #00c2c9;';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._bolita2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._bolita2.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseDown['bolita2'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._bolita2.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._bolita2.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._bolita2.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms';
				if (me._bolita2.ggCurrentLogicStateScaling == 0) {
					me._bolita2.ggParameter.sx = 0.8;
					me._bolita2.ggParameter.sy = 0.8;
					me._bolita2.style[domTransform]=parameterToTransform(me._bolita2.ggParameter);
				}
				else {
					me._bolita2.ggParameter.sx = 1;
					me._bolita2.ggParameter.sy = 1;
					me._bolita2.style[domTransform]=parameterToTransform(me._bolita2.ggParameter);
				}
			}
		}
		me._bolita2.onmouseout=function (e) {
			me.elementMouseDown['bolita2']=false;
			me._bolita2.logicBlock_scaling();
		}
		me._bolita2.onmousedown=function (e) {
			me.elementMouseDown['bolita2']=true;
			me._bolita2.logicBlock_scaling();
		}
		me._bolita2.onmouseup=function (e) {
			me.elementMouseDown['bolita2']=false;
			me._bolita2.logicBlock_scaling();
		}
		me._bolita2.ontouchend=function (e) {
			me.elementMouseDown['bolita2']=false;
			me._bolita2.logicBlock_scaling();
		}
		me._bolita2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me.__0=document.createElement('div');
		els=me.__0__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJz8+Cjxzdmcgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzk2LjgxOSAzOTYuODE5OyIgeT0iMHB4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjUxMnB4IiBpZD0iQ2FwYV8xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB2aWV3Qm94PSIwIDAgMzk2LjgxOSAzOTYuODE5IiB4bWw6c3BhY2U9InByZXNlcnZlIiBoZWlnaHQ9IjUxMnB4Ij4KIDxnPgogIDxnPgogICA8Zz4KICAgIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgY2xhc3M9ImFjdGl2ZS'+
			'1wYXRoIiBkPSJNMzUyLjEwMyw0NC42NzljLTU5LjIzNy01OS40MDEtMTU1LjQxMi01OS41MzUtMjE0LjgxMy0wLjI5OGMtNTcuMzE2LDU3LjE1Ny01OS43NDEsMTQ5LjIxOC01LjUxNSwyMDkuMzE0bC0xMS42LDExLjYgICAgYy05LjM3Mi05LjM3My0yNC41NjgtOS4zNzUtMzMuOTQxLTAuMDAzYy0wLjAwMSwwLjAwMS0wLjAwMiwwLjAwMi0wLjAwMywwLjAwM2wtNzkuMiw3OS4yICAgIGMtOS4zNzMsOS4zNzItOS4zNzUsMjQuNTY4LTAuMDAzLDMzLjk0MWMwLjAwMSwwLjAwMSwwLjAwMiwwLjAwMiwwLjAwMywwLjAwM2wxMS4zMTIsMTEuMzEyYzkuMzcyLDkuMzY5LDI0LjU2NCw5LjM2OSwzMy45'+
			'MzYsMCAgICBsNzkuMi03OS4yYzkuMzczLTkuMzcyLDkuMzc1LTI0LjU2OCwwLjAwMy0zMy45NDFjLTAuMDAxLTAuMDAxLTAuMDAyLTAuMDAyLTAuMDAzLTAuMDAzbDExLjYtMTEuNiAgICBjNjIuMjQsNTYuMjQ3LDE1OC4yOTIsNTEuMzg4LDIxNC41MzktMTAuODUxQzQxMS45NDgsMTk0LjAzNyw0MDkuNTIxLDEwMS44NTYsMzUyLjEwMyw0NC42Nzl6IE0xMjAuMTc1LDI5OS4yMzFsLTc5LjIsNzkuMiAgICBjLTMuMTI0LDMuMTIzLTguMTg4LDMuMTIzLTExLjMxMiwwbC0xMS4zMTItMTEuMzJjLTMuMTE4LTMuMTIzLTMuMTE4LTguMTgxLDAtMTEuMzA0bDc5LjItNzkuMmMzLjE2NC0zLjAyNSw4Lj'+
			'E0OC0zLjAyNSwxMS4zMTIsMCAgICBsMTEuMzEyLDExLjMyQzEyMy4yOTMsMjkxLjA1LDEyMy4yOTMsMjk2LjEwOCwxMjAuMTc1LDI5OS4yMzF6IE0zNDAuNzk5LDI0OC4zMjdjLTUzLjExMiw1My4xMS0xMzkuMjIzLDUzLjEwOS0xOTIuMzMzLTAuMDAzICAgIHMtNTMuMTA5LTEzOS4yMjMsMC4wMDMtMTkyLjMzM2M1My4xMTEtNTMuMTA5LDEzOS4yMTktNTMuMTA5LDE5Mi4zMywwQzM5My44MjQsMTA5LjEzOSwzOTMuODI0LDE5NS4xNzksMzQwLjc5OSwyNDguMzI3eiIgZmlsbD0iIzAwYzJjOSIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiLz4KICAgPC9n'+
			'PgogIDwvZz4KICA8Zz4KICAgPGc+CiAgICA8cGF0aCBmaWxsLW9wYWNpdHk9IjEiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZD0iTTMyOS40NzksNjcuMzAzTDMyOS40NzksNjcuMzAzbC0xMS4zMTIsMTEuMzEyYzQwLjU0NSw0MC42NDQsNDAuNTQ1LDEwNi40MzYsMCwxNDcuMDhsMTEuMzEyLDExLjMxMiAgICBDMzc2LjI3NSwxOTAuMTE3LDM3Ni4yNzUsMTE0LjE5MywzMjkuNDc5LDY3LjMwM3oiIGZpbGw9IiMwMGMyYzkiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIi8+CiAgIDwvZz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me.__0__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="+";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='z-index: 10;';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._bolita2.appendChild(me.__0);
		me._bolita.appendChild(me._bolita2);
		me._indicador.appendChild(me._bolita);
		me._ht_video_file.appendChild(me._indicador);
		me.__div = me._ht_video_file;
	};
	function SkinHotspotClass_variaciones(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._variaciones=document.createElement('div');
		el.ggId="variaciones";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='z-index: 0;';
		hs+='height : 0px;';
		hs+='left : 713px;';
		hs+='position : absolute;';
		hs+='top : 406px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._variaciones.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._variaciones.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._variaciones.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._variaciones.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._variaciones.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._variaciones.ggUpdatePosition=function (useTransition) {
		}
		el=me._colores=document.createElement('div');
		el.ggId="colores";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 0;';
		hs+='height : 62px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 58px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._colores.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._colores.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._beige0=document.createElement('div');
		els=me._beige0__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		els.setAttribute('style','position: absolute;-webkit-user-drag:none;pointer-events:none;;');
		els.onload=function() {me._beige0.ggUpdatePosition();}
		el.ggText=basePath + "assets/beige.png";
		els.setAttribute('src', el.ggText);
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		hs ='';
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="beige";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='z-index: 0;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._beige0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._beige0.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('color') == "beige"))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._beige0.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._beige0.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._beige0.style[domTransition]='opacity 0ms ease 0ms';
				if (me._beige0.ggCurrentLogicStateAlpha == 0) {
					me._beige0.style.visibility=me._beige0.ggVisible?'inherit':'hidden';
					me._beige0.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._beige0.style.opacity == 0.0) { me._beige0.style.visibility="hidden"; } }, 5);
					me._beige0.style.opacity=0;
				}
			}
		}
		me._beige0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			var parentWidth = me._beige0.clientWidth;
			var parentHeight = me._beige0.clientHeight;
			var img = me._beige0__img;
			var aspectRatioDiv = me._beige0.clientWidth / me._beige0.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			currentWidth = img.naturalWidth;
			currentHeight = img.naturalHeight;
			img.style.width = currentWidth + 'px';
			img.style.height = currentHeight + 'px';
			img.style.left='50%';
			img.style.marginLeft='-' + currentWidth/2 + 'px';
			img.style.top='50%';
			img.style.marginTop='-' + currentHeight/2 + 'px';
		}
		me._colores.appendChild(me._beige0);
		el=me._blanco0=document.createElement('div');
		els=me._blanco0__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		els.setAttribute('style','position: absolute;-webkit-user-drag:none;pointer-events:none;;');
		els.onload=function() {me._blanco0.ggUpdatePosition();}
		el.ggText=basePath + "assets/blanco.png";
		els.setAttribute('src', el.ggText);
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		hs ='';
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="blanco";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='z-index: 0;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._blanco0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._blanco0.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('color') == "blanco"))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._blanco0.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._blanco0.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._blanco0.style[domTransition]='opacity 0ms ease 0ms';
				if (me._blanco0.ggCurrentLogicStateAlpha == 0) {
					me._blanco0.style.visibility=me._blanco0.ggVisible?'inherit':'hidden';
					me._blanco0.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._blanco0.style.opacity == 0.0) { me._blanco0.style.visibility="hidden"; } }, 5);
					me._blanco0.style.opacity=0;
				}
			}
		}
		me._blanco0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			var parentWidth = me._blanco0.clientWidth;
			var parentHeight = me._blanco0.clientHeight;
			var img = me._blanco0__img;
			var aspectRatioDiv = me._blanco0.clientWidth / me._blanco0.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			currentWidth = img.naturalWidth;
			currentHeight = img.naturalHeight;
			img.style.width = currentWidth + 'px';
			img.style.height = currentHeight + 'px';
			img.style.left='50%';
			img.style.marginLeft='-' + currentWidth/2 + 'px';
			img.style.top='50%';
			img.style.marginTop='-' + currentHeight/2 + 'px';
		}
		me._colores.appendChild(me._blanco0);
		el=me._negro=document.createElement('div');
		els=me._negro__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		els.setAttribute('style','position: absolute;-webkit-user-drag:none;pointer-events:none;;');
		els.onload=function() {me._negro.ggUpdatePosition();}
		el.ggText=basePath + "assets/negro.png";
		els.setAttribute('src', el.ggText);
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		hs ='';
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="negro";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='z-index: 0;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._negro.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._negro.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('color') == "grisoscuro"))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._negro.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._negro.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._negro.style[domTransition]='opacity 0ms ease 0ms';
				if (me._negro.ggCurrentLogicStateAlpha == 0) {
					me._negro.style.visibility=me._negro.ggVisible?'inherit':'hidden';
					me._negro.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._negro.style.opacity == 0.0) { me._negro.style.visibility="hidden"; } }, 5);
					me._negro.style.opacity=0;
				}
			}
		}
		me._negro.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			var parentWidth = me._negro.clientWidth;
			var parentHeight = me._negro.clientHeight;
			var img = me._negro__img;
			var aspectRatioDiv = me._negro.clientWidth / me._negro.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			currentWidth = img.naturalWidth;
			currentHeight = img.naturalHeight;
			img.style.width = currentWidth + 'px';
			img.style.height = currentHeight + 'px';
			img.style.left='50%';
			img.style.marginLeft='-' + currentWidth/2 + 'px';
			img.style.top='50%';
			img.style.marginTop='-' + currentHeight/2 + 'px';
		}
		me._colores.appendChild(me._negro);
		me._variaciones.appendChild(me._colores);
		el=me._hidros1=document.createElement('div');
		el.ggId="hidros";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 0;';
		hs+='height : 62px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 58px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hidros1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hidros1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me.__8=document.createElement('div');
		els=me.__8__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		els.setAttribute('style','position: absolute;-webkit-user-drag:none;pointer-events:none;;');
		els.onload=function() {me.__8.ggUpdatePosition();}
		el.ggText=basePath + "assets/hidros8.png";
		els.setAttribute('src', el.ggText);
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		hs ='';
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="8";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='z-index: 0;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__8.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('hidros') == 22))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__8.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__8.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__8.style[domTransition]='opacity 500ms ease 0ms';
				if (me.__8.ggCurrentLogicStateAlpha == 0) {
					me.__8.style.visibility=me.__8.ggVisible?'inherit':'hidden';
					me.__8.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me.__8.style.opacity == 0.0) { me.__8.style.visibility="hidden"; } }, 505);
					me.__8.style.opacity=0;
				}
			}
		}
		me.__8.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			var parentWidth = me.__8.clientWidth;
			var parentHeight = me.__8.clientHeight;
			var img = me.__8__img;
			var aspectRatioDiv = me.__8.clientWidth / me.__8.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			currentWidth = img.naturalWidth;
			currentHeight = img.naturalHeight;
			img.style.width = currentWidth + 'px';
			img.style.height = currentHeight + 'px';
			img.style.left='50%';
			img.style.marginLeft='-' + currentWidth/2 + 'px';
			img.style.top='50%';
			img.style.marginTop='-' + currentHeight/2 + 'px';
		}
		me._hidros1.appendChild(me.__8);
		el=me.__=document.createElement('div');
		els=me.____img=document.createElement('img');
		els.className='ggskin ggskin_external';
		els.setAttribute('style','position: absolute;-webkit-user-drag:none;pointer-events:none;;');
		els.onload=function() {me.__.ggUpdatePosition();}
		el.ggText=basePath + "assets/hidros8.png";
		els.setAttribute('src', el.ggText);
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		hs ='';
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="-";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='z-index: 0;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('hidros') == 10))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__.style[domTransition]='opacity 500ms ease 0ms';
				if (me.__.ggCurrentLogicStateAlpha == 0) {
					me.__.style.visibility=me.__.ggVisible?'inherit':'hidden';
					me.__.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me.__.style.opacity == 0.0) { me.__.style.visibility="hidden"; } }, 505);
					me.__.style.opacity=0;
				}
			}
		}
		me.__.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			var parentWidth = me.__.clientWidth;
			var parentHeight = me.__.clientHeight;
			var img = me.____img;
			var aspectRatioDiv = me.__.clientWidth / me.__.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			currentWidth = img.naturalWidth;
			currentHeight = img.naturalHeight;
			img.style.width = currentWidth + 'px';
			img.style.height = currentHeight + 'px';
			img.style.left='50%';
			img.style.marginLeft='-' + currentWidth/2 + 'px';
			img.style.top='50%';
			img.style.marginTop='-' + currentHeight/2 + 'px';
		}
		me._hidros1.appendChild(me.__);
		el=me.__6=document.createElement('div');
		els=me.__6__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		els.setAttribute('style','position: absolute;-webkit-user-drag:none;pointer-events:none;;');
		els.onload=function() {me.__6.ggUpdatePosition();}
		el.ggText=basePath + "assets/hidros6.png";
		els.setAttribute('src', el.ggText);
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		hs ='';
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="6";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='z-index: 0;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__6.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('hidros') == 8))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__6.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__6.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__6.style[domTransition]='opacity 500ms ease 0ms';
				if (me.__6.ggCurrentLogicStateAlpha == 0) {
					me.__6.style.visibility=me.__6.ggVisible?'inherit':'hidden';
					me.__6.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me.__6.style.opacity == 0.0) { me.__6.style.visibility="hidden"; } }, 505);
					me.__6.style.opacity=0;
				}
			}
		}
		me.__6.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			var parentWidth = me.__6.clientWidth;
			var parentHeight = me.__6.clientHeight;
			var img = me.__6__img;
			var aspectRatioDiv = me.__6.clientWidth / me.__6.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			currentWidth = img.naturalWidth;
			currentHeight = img.naturalHeight;
			img.style.width = currentWidth + 'px';
			img.style.height = currentHeight + 'px';
			img.style.left='50%';
			img.style.marginLeft='-' + currentWidth/2 + 'px';
			img.style.top='50%';
			img.style.marginTop='-' + currentHeight/2 + 'px';
		}
		me._hidros1.appendChild(me.__6);
		me._variaciones.appendChild(me._hidros1);
		el=me._luces1=document.createElement('div');
		el.ggId="luces";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 0;';
		hs+='height : 62px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 58px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._luces1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._luces1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me.__20=document.createElement('div');
		els=me.__20__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		els.setAttribute('style','position: absolute;-webkit-user-drag:none;pointer-events:none;;');
		els.onload=function() {me.__20.ggUpdatePosition();}
		el.ggText=basePath + "assets/luces2.png";
		els.setAttribute('src', el.ggText);
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		hs ='';
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='z-index: 0;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__20.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__20.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('luces') == 2)) && 
				((player.getVariableValue('luceson') == false))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__20.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__20.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__20.style[domTransition]='opacity 500ms ease 0ms';
				if (me.__20.ggCurrentLogicStateAlpha == 0) {
					me.__20.style.visibility=me.__20.ggVisible?'inherit':'hidden';
					me.__20.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me.__20.style.opacity == 0.0) { me.__20.style.visibility="hidden"; } }, 505);
					me.__20.style.opacity=0;
				}
			}
		}
		me.__20.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			var parentWidth = me.__20.clientWidth;
			var parentHeight = me.__20.clientHeight;
			var img = me.__20__img;
			var aspectRatioDiv = me.__20.clientWidth / me.__20.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			currentWidth = img.naturalWidth;
			currentHeight = img.naturalHeight;
			img.style.width = currentWidth + 'px';
			img.style.height = currentHeight + 'px';
			img.style.left='50%';
			img.style.marginLeft='-' + currentWidth/2 + 'px';
			img.style.top='50%';
			img.style.marginTop='-' + currentHeight/2 + 'px';
		}
		me._luces1.appendChild(me.__20);
		el=me.__40=document.createElement('div');
		els=me.__40__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		els.setAttribute('style','position: absolute;-webkit-user-drag:none;pointer-events:none;;');
		els.onload=function() {me.__40.ggUpdatePosition();}
		el.ggText=basePath + "assets/luces4.png";
		els.setAttribute('src', el.ggText);
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		hs ='';
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="4";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='z-index: 0;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__40.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__40.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('luces') == 4)) && 
				((player.getVariableValue('luceson') == false))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__40.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__40.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__40.style[domTransition]='opacity 500ms ease 0ms';
				if (me.__40.ggCurrentLogicStateAlpha == 0) {
					me.__40.style.visibility=me.__40.ggVisible?'inherit':'hidden';
					me.__40.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me.__40.style.opacity == 0.0) { me.__40.style.visibility="hidden"; } }, 505);
					me.__40.style.opacity=0;
				}
			}
		}
		me.__40.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			var parentWidth = me.__40.clientWidth;
			var parentHeight = me.__40.clientHeight;
			var img = me.__40__img;
			var aspectRatioDiv = me.__40.clientWidth / me.__40.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			currentWidth = img.naturalWidth;
			currentHeight = img.naturalHeight;
			img.style.width = currentWidth + 'px';
			img.style.height = currentHeight + 'px';
			img.style.left='50%';
			img.style.marginLeft='-' + currentWidth/2 + 'px';
			img.style.top='50%';
			img.style.marginTop='-' + currentHeight/2 + 'px';
		}
		me._luces1.appendChild(me.__40);
		el=me.__2on=document.createElement('div');
		els=me.__2on__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		els.setAttribute('style','position: absolute;-webkit-user-drag:none;pointer-events:none;;');
		els.onload=function() {me.__2on.ggUpdatePosition();}
		el.ggText=basePath + "assets/luces2on.png";
		els.setAttribute('src', el.ggText);
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		hs ='';
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="2on";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='z-index: 0;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__2on.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__2on.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('luces') == 2)) && 
				((player.getVariableValue('luceson') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__2on.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__2on.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__2on.style[domTransition]='opacity 500ms ease 0ms';
				if (me.__2on.ggCurrentLogicStateAlpha == 0) {
					me.__2on.style.visibility=me.__2on.ggVisible?'inherit':'hidden';
					me.__2on.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me.__2on.style.opacity == 0.0) { me.__2on.style.visibility="hidden"; } }, 505);
					me.__2on.style.opacity=0;
				}
			}
		}
		me.__2on.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			var parentWidth = me.__2on.clientWidth;
			var parentHeight = me.__2on.clientHeight;
			var img = me.__2on__img;
			var aspectRatioDiv = me.__2on.clientWidth / me.__2on.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			currentWidth = img.naturalWidth;
			currentHeight = img.naturalHeight;
			img.style.width = currentWidth + 'px';
			img.style.height = currentHeight + 'px';
			img.style.left='50%';
			img.style.marginLeft='-' + currentWidth/2 + 'px';
			img.style.top='50%';
			img.style.marginTop='-' + currentHeight/2 + 'px';
		}
		me._luces1.appendChild(me.__2on);
		el=me.__4on=document.createElement('div');
		els=me.__4on__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		els.setAttribute('style','position: absolute;-webkit-user-drag:none;pointer-events:none;;');
		els.onload=function() {me.__4on.ggUpdatePosition();}
		el.ggText=basePath + "assets/luces4on.png";
		els.setAttribute('src', el.ggText);
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		hs ='';
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="4on";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='z-index: 0;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__4on.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__4on.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('luces') == 4)) && 
				((player.getVariableValue('luceson') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__4on.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__4on.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__4on.style[domTransition]='opacity 500ms ease 0ms';
				if (me.__4on.ggCurrentLogicStateAlpha == 0) {
					me.__4on.style.visibility=me.__4on.ggVisible?'inherit':'hidden';
					me.__4on.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me.__4on.style.opacity == 0.0) { me.__4on.style.visibility="hidden"; } }, 505);
					me.__4on.style.opacity=0;
				}
			}
		}
		me.__4on.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			var parentWidth = me.__4on.clientWidth;
			var parentHeight = me.__4on.clientHeight;
			var img = me.__4on__img;
			var aspectRatioDiv = me.__4on.clientWidth / me.__4on.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			currentWidth = img.naturalWidth;
			currentHeight = img.naturalHeight;
			img.style.width = currentWidth + 'px';
			img.style.height = currentHeight + 'px';
			img.style.left='50%';
			img.style.marginLeft='-' + currentWidth/2 + 'px';
			img.style.top='50%';
			img.style.marginTop='-' + currentHeight/2 + 'px';
		}
		me._luces1.appendChild(me.__4on);
		me._variaciones.appendChild(me._luces1);
		el=me._blower1=document.createElement('div');
		els=me._blower1__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		els.setAttribute('style','position: absolute;-webkit-user-drag:none;pointer-events:none;;');
		els.onload=function() {me._blower1.ggUpdatePosition();}
		el.ggText=basePath + "assets/blowers.png";
		els.setAttribute('src', el.ggText);
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		hs ='';
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="blower";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='z-index: 0;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._blower1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._blower1.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('blower') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._blower1.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._blower1.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._blower1.style[domTransition]='opacity 500ms ease 0ms';
				if (me._blower1.ggCurrentLogicStateAlpha == 0) {
					me._blower1.style.visibility=me._blower1.ggVisible?'inherit':'hidden';
					me._blower1.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._blower1.style.opacity == 0.0) { me._blower1.style.visibility="hidden"; } }, 505);
					me._blower1.style.opacity=0;
				}
			}
		}
		me._blower1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			var parentWidth = me._blower1.clientWidth;
			var parentHeight = me._blower1.clientHeight;
			var img = me._blower1__img;
			var aspectRatioDiv = me._blower1.clientWidth / me._blower1.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			currentWidth = img.naturalWidth;
			currentHeight = img.naturalHeight;
			img.style.width = currentWidth + 'px';
			img.style.height = currentHeight + 'px';
			img.style.left='50%';
			img.style.marginLeft='-' + currentWidth/2 + 'px';
			img.style.top='50%';
			img.style.marginTop='-' + currentHeight/2 + 'px';
		}
		me._variaciones.appendChild(me._blower1);
		el=me._cascada1=document.createElement('div');
		els=me._cascada1__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		els.setAttribute('style','position: absolute;-webkit-user-drag:none;pointer-events:none;;');
		els.onload=function() {me._cascada1.ggUpdatePosition();}
		el.ggText=basePath + "assets/cascada.png";
		els.setAttribute('src', el.ggText);
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		hs ='';
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="cascada";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='z-index: 0;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._cascada1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._cascada1.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('cascada') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._cascada1.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._cascada1.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._cascada1.style[domTransition]='opacity 500ms ease 0ms';
				if (me._cascada1.ggCurrentLogicStateAlpha == 0) {
					me._cascada1.style.visibility=me._cascada1.ggVisible?'inherit':'hidden';
					me._cascada1.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._cascada1.style.opacity == 0.0) { me._cascada1.style.visibility="hidden"; } }, 505);
					me._cascada1.style.opacity=0;
				}
			}
		}
		me._cascada1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			var parentWidth = me._cascada1.clientWidth;
			var parentHeight = me._cascada1.clientHeight;
			var img = me._cascada1__img;
			var aspectRatioDiv = me._cascada1.clientWidth / me._cascada1.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			currentWidth = img.naturalWidth;
			currentHeight = img.naturalHeight;
			img.style.width = currentWidth + 'px';
			img.style.height = currentHeight + 'px';
			img.style.left='50%';
			img.style.marginLeft='-' + currentWidth/2 + 'px';
			img.style.top='50%';
			img.style.marginTop='-' + currentHeight/2 + 'px';
		}
		me._variaciones.appendChild(me._cascada1);
		el=me._agua=document.createElement('div');
		els=me._agua__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		els.setAttribute('style','position: absolute;-webkit-user-drag:none;pointer-events:none;;');
		els.onload=function() {me._agua.ggUpdatePosition();}
		el.ggText=basePath + "assets/agua.png";
		els.setAttribute('src', el.ggText);
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		hs ='';
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="agua";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='z-index: 0;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._agua.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._agua.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('Prendido') == true)) && 
				((player.getVariableValue('filtro') == false))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._agua.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._agua.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._agua.style[domTransition]='opacity 500ms ease 0ms';
				if (me._agua.ggCurrentLogicStateAlpha == 0) {
					me._agua.style.visibility=me._agua.ggVisible?'inherit':'hidden';
					me._agua.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._agua.style.opacity == 0.0) { me._agua.style.visibility="hidden"; } }, 505);
					me._agua.style.opacity=0;
				}
			}
		}
		me._agua.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			var parentWidth = me._agua.clientWidth;
			var parentHeight = me._agua.clientHeight;
			var img = me._agua__img;
			var aspectRatioDiv = me._agua.clientWidth / me._agua.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			currentWidth = img.naturalWidth;
			currentHeight = img.naturalHeight;
			img.style.width = currentWidth + 'px';
			img.style.height = currentHeight + 'px';
			img.style.left='50%';
			img.style.marginLeft='-' + currentWidth/2 + 'px';
			img.style.top='50%';
			img.style.marginTop='-' + currentHeight/2 + 'px';
		}
		me._variaciones.appendChild(me._agua);
		el=me._aguacascada=document.createElement('div');
		els=me._aguacascada__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		els.setAttribute('style','position: absolute;-webkit-user-drag:none;pointer-events:none;;');
		els.onload=function() {me._aguacascada.ggUpdatePosition();}
		el.ggText=basePath + "assets/aguacascada.png";
		els.setAttribute('src', el.ggText);
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		hs ='';
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="aguacascada";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='z-index: 0;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._aguacascada.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._aguacascada.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('Prendido') == true)) && 
				((player.getVariableValue('cascada') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._aguacascada.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._aguacascada.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._aguacascada.style[domTransition]='opacity 500ms ease 0ms';
				if (me._aguacascada.ggCurrentLogicStateAlpha == 0) {
					me._aguacascada.style.visibility=me._aguacascada.ggVisible?'inherit':'hidden';
					me._aguacascada.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._aguacascada.style.opacity == 0.0) { me._aguacascada.style.visibility="hidden"; } }, 505);
					me._aguacascada.style.opacity=0;
				}
			}
		}
		me._aguacascada.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			var parentWidth = me._aguacascada.clientWidth;
			var parentHeight = me._aguacascada.clientHeight;
			var img = me._aguacascada__img;
			var aspectRatioDiv = me._aguacascada.clientWidth / me._aguacascada.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			currentWidth = img.naturalWidth;
			currentHeight = img.naturalHeight;
			img.style.width = currentWidth + 'px';
			img.style.height = currentHeight + 'px';
			img.style.left='50%';
			img.style.marginLeft='-' + currentWidth/2 + 'px';
			img.style.top='50%';
			img.style.marginTop='-' + currentHeight/2 + 'px';
		}
		me._variaciones.appendChild(me._aguacascada);
		el=me._cabeceros1=document.createElement('div');
		els=me._cabeceros1__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		els.setAttribute('style','position: absolute;-webkit-user-drag:none;pointer-events:none;;');
		els.onload=function() {me._cabeceros1.ggUpdatePosition();}
		el.ggText=basePath + "assets/cabeceros.png";
		els.setAttribute('src', el.ggText);
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		hs ='';
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="cabeceros";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='z-index: 0;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._cabeceros1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._cabeceros1.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('cabeceros') == true)) && 
				((player.getVariableValue('filtro') == false))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._cabeceros1.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._cabeceros1.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._cabeceros1.style[domTransition]='opacity 500ms ease 0ms';
				if (me._cabeceros1.ggCurrentLogicStateAlpha == 0) {
					me._cabeceros1.style.visibility=me._cabeceros1.ggVisible?'inherit':'hidden';
					me._cabeceros1.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._cabeceros1.style.opacity == 0.0) { me._cabeceros1.style.visibility="hidden"; } }, 505);
					me._cabeceros1.style.opacity=0;
				}
			}
		}
		me._cabeceros1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			var parentWidth = me._cabeceros1.clientWidth;
			var parentHeight = me._cabeceros1.clientHeight;
			var img = me._cabeceros1__img;
			var aspectRatioDiv = me._cabeceros1.clientWidth / me._cabeceros1.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			currentWidth = img.naturalWidth;
			currentHeight = img.naturalHeight;
			img.style.width = currentWidth + 'px';
			img.style.height = currentHeight + 'px';
			img.style.left='50%';
			img.style.marginLeft='-' + currentWidth/2 + 'px';
			img.style.top='50%';
			img.style.marginTop='-' + currentHeight/2 + 'px';
		}
		me._variaciones.appendChild(me._cabeceros1);
		me.ggUse3d=true;
		me.gg3dDistance=1593;
		me.__div = me._variaciones;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
		if (hotspot.skinid=='ht_video_file') {
			hotspot.skinid = 'ht_video_file';
			hsinst = new SkinHotspotClass_ht_video_file(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_video_file_changenode();;
			me.callChildLogicBlocksHotspot_ht_video_file_mousedown();;
			me.callChildLogicBlocksHotspot_ht_video_file_varchanged_infohotspots();;
		} else
		{
			hotspot.skinid = 'variaciones';
			hsinst = new SkinHotspotClass_variaciones(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_variaciones_changenode();;
			me.callChildLogicBlocksHotspot_variaciones_varchanged_blower();;
			me.callChildLogicBlocksHotspot_variaciones_varchanged_cascada();;
			me.callChildLogicBlocksHotspot_variaciones_varchanged_Prendido();;
			me.callChildLogicBlocksHotspot_variaciones_varchanged_filtro();;
			me.callChildLogicBlocksHotspot_variaciones_varchanged_cabeceros();;
			me.callChildLogicBlocksHotspot_variaciones_varchanged_color();;
			me.callChildLogicBlocksHotspot_variaciones_varchanged_hidros();;
			me.callChildLogicBlocksHotspot_variaciones_varchanged_luces();;
			me.callChildLogicBlocksHotspot_variaciones_varchanged_luceson();;
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		if(hotspotTemplates['ht_video_file']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
				hotspotTemplates['ht_video_file'][i] = null;
			}
		}
		if(hotspotTemplates['variaciones']) {
			var i;
			for(i = 0; i < hotspotTemplates['variaciones'].length; i++) {
				hotspotTemplates['variaciones'][i] = null;
			}
		}
		hotspotTemplates = [];
	}
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px;}'));
	document.head.appendChild(style);
	me._responsive_configurador.logicBlock_size();
	me._svg_7.logicBlock_visible();
	me._hotspotson.logicBlock_position();
	me._hotspotson.logicBlock_scaling();
	me._hotspotsoff.logicBlock_position();
	me._hotspotsoff.logicBlock_scaling();
	me._information_horiz.logicBlock_scaling();
	me._information_horiz.logicBlock_visible();
	me._information_vert.logicBlock_scaling();
	me._information_vert.logicBlock_visible();
	me._ir_a_planta.logicBlock_position();
	me._ir_a_planta.logicBlock_scaling();
	me._ir_a_frontal.logicBlock_position();
	me._ir_a_frontal.logicBlock_scaling();
	me._text_3.logicBlock_visible();
	me._parte_superior.logicBlock_position();
	me._responsive_configurador.logicBlock_position();
	me._configurador.logicBlock_position();
	me._color0.logicBlock_scaling();
	me._rectangle_318.logicBlock_bordercolor();
	me._rectangle_316.logicBlock_bordercolor();
	me._rectangle_314.logicBlock_bordercolor();
	me._rectangle_312.logicBlock_bordercolor();
	me._hidros0.logicBlock_scaling();
	me._text_114.logicBlock_textcolor();
	me._rectangle_311.logicBlock_bordercolor();
	me._text_113.logicBlock_textcolor();
	me._rectangle_310.logicBlock_bordercolor();
	me._text_112.logicBlock_textcolor();
	me._rectangle_39.logicBlock_bordercolor();
	me._luces0.logicBlock_scaling();
	me._rectangle_38.logicBlock_bordercolor();
	me._svg_52.logicBlock_alpha();
	me._text_111.logicBlock_textcolor();
	me._rectangle_37.logicBlock_bordercolor();
	me._text_110.logicBlock_textcolor();
	me._rectangle_36.logicBlock_bordercolor();
	me._rectangle_35.logicBlock_bordercolor();
	me._off0.logicBlock_visible();
	me._on1.logicBlock_visible();
	me._blower0.logicBlock_scaling();
	me._rectangle_34.logicBlock_bordercolor();
	me._svg_51.logicBlock_alpha();
	me._rectangle_33.logicBlock_bordercolor();
	me._svg_31.logicBlock_alpha();
	me._cabeceros0.logicBlock_scaling();
	me._rectangle_32.logicBlock_bordercolor();
	me._svg_50.logicBlock_alpha();
	me._rectangle_31.logicBlock_bordercolor();
	me._svg_30.logicBlock_alpha();
	me._cascada0.logicBlock_scaling();
	me._rectangle_30.logicBlock_bordercolor();
	me._svg_5.logicBlock_alpha();
	me._rectangle_3.logicBlock_bordercolor();
	me._svg_3.logicBlock_alpha();
	me._versiones0.logicBlock_scaling();
	me._basic.logicBlock_bordercolor();
	me._text_19.logicBlock_textcolor();
	me._medio.logicBlock_bordercolor();
	me._text_18.logicBlock_textcolor();
	me._full.logicBlock_bordercolor();
	me._text_17.logicBlock_textcolor();
	me._color.logicBlock_scaling();
	me._activo4.logicBlock_visible();
	me._inactivo4.logicBlock_visible();
	me._hidros.logicBlock_scaling();
	me._activo3.logicBlock_visible();
	me._inactivo3.logicBlock_visible();
	me._luces.logicBlock_scaling();
	me._activo2.logicBlock_visible();
	me._inactivo2.logicBlock_visible();
	me._blower.logicBlock_scaling();
	me._activo1.logicBlock_visible();
	me._inactivo1.logicBlock_visible();
	me._cascada.logicBlock_scaling();
	me._cabeceros.logicBlock_scaling();
	me._activo0.logicBlock_visible();
	me._inactivo0.logicBlock_visible();
	me._activo.logicBlock_visible();
	me._inactivo.logicBlock_visible();
	me._svg_7.logicBlock_alpha();
	me._off.logicBlock_visible();
	me._on.logicBlock_visible();
	me._cta.logicBlock_position();
	me._hotspotson.logicBlock_angle();
	me._hotspotsoff.logicBlock_angle();
	me._ht_image.logicBlock_scaling();
	me._information_horiz.logicBlock_alpha();
	me._container_text0.logicBlock_size();
	me._information_vert.logicBlock_alpha();
	me._container_text.logicBlock_size();
	me._svg_4.logicBlock_angle();
	me._video_screentint_file.logicBlock_visible();
	me._video_popup_file.logicBlock_visible();
	me._popup_video_file.logicBlock_visible();
	me._video_popup_controls_file.logicBlock_visible();
	player.addListener('sizechanged', function(args) { me._responsive_configurador.logicBlock_size();me._svg_7.logicBlock_visible();me._hotspotson.logicBlock_position();me._hotspotson.logicBlock_scaling();me._hotspotsoff.logicBlock_position();me._hotspotsoff.logicBlock_scaling();me._information_horiz.logicBlock_scaling();me._information_horiz.logicBlock_visible();me._information_vert.logicBlock_scaling();me._information_vert.logicBlock_visible();me._ir_a_planta.logicBlock_position();me._ir_a_planta.logicBlock_scaling();me._ir_a_frontal.logicBlock_position();me._ir_a_frontal.logicBlock_scaling(); });
	player.addListener('imagesready', function(args) { me._text_3.logicBlock_visible(); });
	player.addListener('changenode', function(args) { me._parte_superior.logicBlock_position();me._responsive_configurador.logicBlock_position();me._configurador.logicBlock_position();me._color0.logicBlock_scaling();me._rectangle_318.logicBlock_bordercolor();me._rectangle_316.logicBlock_bordercolor();me._rectangle_314.logicBlock_bordercolor();me._rectangle_312.logicBlock_bordercolor();me._hidros0.logicBlock_scaling();me._text_114.logicBlock_textcolor();me._rectangle_311.logicBlock_bordercolor();me._text_113.logicBlock_textcolor();me._rectangle_310.logicBlock_bordercolor();me._text_112.logicBlock_textcolor();me._rectangle_39.logicBlock_bordercolor();me._luces0.logicBlock_scaling();me._rectangle_38.logicBlock_bordercolor();me._svg_52.logicBlock_alpha();me._text_111.logicBlock_textcolor();me._rectangle_37.logicBlock_bordercolor();me._text_110.logicBlock_textcolor();me._rectangle_36.logicBlock_bordercolor();me._rectangle_35.logicBlock_bordercolor();me._off0.logicBlock_visible();me._on1.logicBlock_visible();me._blower0.logicBlock_scaling();me._rectangle_34.logicBlock_bordercolor();me._svg_51.logicBlock_alpha();me._rectangle_33.logicBlock_bordercolor();me._svg_31.logicBlock_alpha();me._cabeceros0.logicBlock_scaling();me._rectangle_32.logicBlock_bordercolor();me._svg_50.logicBlock_alpha();me._rectangle_31.logicBlock_bordercolor();me._svg_30.logicBlock_alpha();me._cascada0.logicBlock_scaling();me._rectangle_30.logicBlock_bordercolor();me._svg_5.logicBlock_alpha();me._rectangle_3.logicBlock_bordercolor();me._svg_3.logicBlock_alpha();me._versiones0.logicBlock_scaling();me._basic.logicBlock_bordercolor();me._text_19.logicBlock_textcolor();me._medio.logicBlock_bordercolor();me._text_18.logicBlock_textcolor();me._full.logicBlock_bordercolor();me._text_17.logicBlock_textcolor();me._color.logicBlock_scaling();me._activo4.logicBlock_visible();me._inactivo4.logicBlock_visible();me._hidros.logicBlock_scaling();me._activo3.logicBlock_visible();me._inactivo3.logicBlock_visible();me._luces.logicBlock_scaling();me._activo2.logicBlock_visible();me._inactivo2.logicBlock_visible();me._blower.logicBlock_scaling();me._activo1.logicBlock_visible();me._inactivo1.logicBlock_visible();me._cascada.logicBlock_scaling();me._cabeceros.logicBlock_scaling();me._activo0.logicBlock_visible();me._inactivo0.logicBlock_visible();me._activo.logicBlock_visible();me._inactivo.logicBlock_visible();me._svg_7.logicBlock_alpha();me._off.logicBlock_visible();me._on.logicBlock_visible();me._cta.logicBlock_position();me._hotspotson.logicBlock_position();me._hotspotson.logicBlock_scaling();me._hotspotson.logicBlock_angle();me._hotspotsoff.logicBlock_position();me._hotspotsoff.logicBlock_scaling();me._hotspotsoff.logicBlock_angle();me._ht_image.logicBlock_scaling();me._information_horiz.logicBlock_alpha();me._container_text0.logicBlock_size();me._information_vert.logicBlock_alpha();me._container_text.logicBlock_size();me._svg_4.logicBlock_angle();me._video_screentint_file.logicBlock_visible();me._video_popup_file.logicBlock_visible();me._popup_video_file.logicBlock_visible();me._text_3.logicBlock_visible();me._video_popup_controls_file.logicBlock_visible();me._ir_a_planta.logicBlock_position();me._ir_a_planta.logicBlock_scaling();me._ir_a_frontal.logicBlock_position();me._ir_a_frontal.logicBlock_scaling(); });
	player.addListener('varchanged_Interfaz', function(args) { me._parte_superior.logicBlock_position();me._responsive_configurador.logicBlock_position();me._hotspotson.logicBlock_position();me._hotspotsoff.logicBlock_position();me._ir_a_planta.logicBlock_position();me._ir_a_frontal.logicBlock_position(); });
	player.addListener('varchanged_infohotspots', function(args) { me._hotspotson.logicBlock_scaling();me._hotspotson.logicBlock_angle();me._hotspotsoff.logicBlock_scaling();me._hotspotsoff.logicBlock_angle(); });
	player.addListener('varchanged_info_w_picture', function(args) { me._ht_image.logicBlock_scaling();me._information_horiz.logicBlock_alpha();me._container_text0.logicBlock_size();me._information_vert.logicBlock_alpha();me._container_text.logicBlock_size(); });
	player.addListener('varchanged_vis_video_file', function(args) { me._video_screentint_file.logicBlock_visible();me._video_popup_file.logicBlock_visible();me._popup_video_file.logicBlock_visible();me._video_popup_controls_file.logicBlock_visible(); });
	player.addListener('varchanged_planta', function(args) { me._ir_a_planta.logicBlock_scaling();me._ir_a_frontal.logicBlock_scaling(); });
	player.addListener('varchanged_blower', function(args) { me._rectangle_34.logicBlock_bordercolor();me._svg_51.logicBlock_alpha();me._rectangle_33.logicBlock_bordercolor();me._svg_31.logicBlock_alpha();me._basic.logicBlock_bordercolor();me._text_19.logicBlock_textcolor();me._medio.logicBlock_bordercolor();me._text_18.logicBlock_textcolor();me._full.logicBlock_bordercolor();me._text_17.logicBlock_textcolor(); });
	player.addListener('varchanged_cascada', function(args) { me._rectangle_30.logicBlock_bordercolor();me._svg_5.logicBlock_alpha();me._rectangle_3.logicBlock_bordercolor();me._svg_3.logicBlock_alpha();me._basic.logicBlock_bordercolor();me._text_19.logicBlock_textcolor();me._medio.logicBlock_bordercolor();me._text_18.logicBlock_textcolor();me._full.logicBlock_bordercolor();me._text_17.logicBlock_textcolor(); });
	player.addListener('varchanged_Prendido', function(args) { me._off.logicBlock_visible();me._on.logicBlock_visible(); });
	player.addListener('varchanged_cabeceros', function(args) { me._rectangle_32.logicBlock_bordercolor();me._svg_50.logicBlock_alpha();me._rectangle_31.logicBlock_bordercolor();me._svg_30.logicBlock_alpha();me._basic.logicBlock_bordercolor();me._text_19.logicBlock_textcolor();me._medio.logicBlock_bordercolor();me._text_18.logicBlock_textcolor();me._full.logicBlock_bordercolor();me._text_17.logicBlock_textcolor(); });
	player.addListener('varchanged_configurador', function(args) { me._configurador.logicBlock_position();me._color0.logicBlock_scaling();me._hidros0.logicBlock_scaling();me._luces0.logicBlock_scaling();me._blower0.logicBlock_scaling();me._cabeceros0.logicBlock_scaling();me._cascada0.logicBlock_scaling();me._versiones0.logicBlock_scaling();me._activo4.logicBlock_visible();me._inactivo4.logicBlock_visible();me._activo3.logicBlock_visible();me._inactivo3.logicBlock_visible();me._activo2.logicBlock_visible();me._inactivo2.logicBlock_visible();me._activo1.logicBlock_visible();me._inactivo1.logicBlock_visible();me._activo0.logicBlock_visible();me._inactivo0.logicBlock_visible();me._activo.logicBlock_visible();me._inactivo.logicBlock_visible();me._cta.logicBlock_position(); });
	player.addListener('varchanged_ticker', function(args) { me._svg_7.logicBlock_alpha();me._svg_4.logicBlock_angle(); });
	player.addListener('varchanged_color', function(args) { me._rectangle_318.logicBlock_bordercolor();me._rectangle_316.logicBlock_bordercolor();me._rectangle_314.logicBlock_bordercolor();me._rectangle_312.logicBlock_bordercolor(); });
	player.addListener('varchanged_hidros', function(args) { me._text_114.logicBlock_textcolor();me._rectangle_311.logicBlock_bordercolor();me._text_113.logicBlock_textcolor();me._rectangle_310.logicBlock_bordercolor();me._text_112.logicBlock_textcolor();me._rectangle_39.logicBlock_bordercolor();me._basic.logicBlock_bordercolor();me._text_19.logicBlock_textcolor();me._medio.logicBlock_bordercolor();me._text_18.logicBlock_textcolor();me._full.logicBlock_bordercolor();me._text_17.logicBlock_textcolor(); });
	player.addListener('varchanged_luces', function(args) { me._rectangle_38.logicBlock_bordercolor();me._svg_52.logicBlock_alpha();me._text_111.logicBlock_textcolor();me._rectangle_37.logicBlock_bordercolor();me._text_110.logicBlock_textcolor();me._rectangle_36.logicBlock_bordercolor();me._rectangle_35.logicBlock_bordercolor();me._basic.logicBlock_bordercolor();me._text_19.logicBlock_textcolor();me._medio.logicBlock_bordercolor();me._text_18.logicBlock_textcolor();me._full.logicBlock_bordercolor();me._text_17.logicBlock_textcolor(); });
	player.addListener('varchanged_luceson', function(args) { me._off0.logicBlock_visible();me._on1.logicBlock_visible(); });
	player.addListener('varchanged_versionesescalar', function(args) { me._color.logicBlock_scaling();me._hidros.logicBlock_scaling();me._luces.logicBlock_scaling();me._blower.logicBlock_scaling();me._cascada.logicBlock_scaling();me._cabeceros.logicBlock_scaling(); });
	player.addListener('changenode', function(args) { me.callChildLogicBlocksHotspot_ht_video_file_changenode();me.callChildLogicBlocksHotspot_variaciones_changenode(); });
	player.addListener('mousedown', function(args) { me.callChildLogicBlocksHotspot_ht_video_file_mousedown(); });
	player.addListener('varchanged_infohotspots', function(args) { me.callChildLogicBlocksHotspot_ht_video_file_varchanged_infohotspots(); });
	player.addListener('varchanged_blower', function(args) { me.callChildLogicBlocksHotspot_variaciones_varchanged_blower(); });
	player.addListener('varchanged_cascada', function(args) { me.callChildLogicBlocksHotspot_variaciones_varchanged_cascada(); });
	player.addListener('varchanged_Prendido', function(args) { me.callChildLogicBlocksHotspot_variaciones_varchanged_Prendido(); });
	player.addListener('varchanged_filtro', function(args) { me.callChildLogicBlocksHotspot_variaciones_varchanged_filtro(); });
	player.addListener('varchanged_cabeceros', function(args) { me.callChildLogicBlocksHotspot_variaciones_varchanged_cabeceros(); });
	player.addListener('varchanged_color', function(args) { me.callChildLogicBlocksHotspot_variaciones_varchanged_color(); });
	player.addListener('varchanged_hidros', function(args) { me.callChildLogicBlocksHotspot_variaciones_varchanged_hidros(); });
	player.addListener('varchanged_luces', function(args) { me.callChildLogicBlocksHotspot_variaciones_varchanged_luces(); });
	player.addListener('varchanged_luceson', function(args) { me.callChildLogicBlocksHotspot_variaciones_varchanged_luceson(); });
	player.addListener('hotspotsremoved', function(args) { me.removeSkinHotspots(); });
	me.skinTimerEvent();
};