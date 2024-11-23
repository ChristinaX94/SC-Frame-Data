var Raphael = {
	"A-MOVES": {
		"STANDARD": [{"Attack":"A","Level":"H","DMG":"12","IMP":14,"GRD":-10,"HIT":5,"CH":5,"SC":null,"Notes":"G Cancel"},
                     {"Attack":"AA ","Level":"H H","DMG":"12, 17","IMP":14,"GRD":-11,"HIT":4,"CH":4,"SC":null,"Notes":"NCC:-"},
                     {"Attack":"A2A","Level":"H L","DMG":"12, 12","IMP":14,"GRD":-16,"HIT":-1,"CH":-1,"SC":null,"Notes":"NCC:-,FC:-"},
                     {"Attack":"A,B","Level":"H H","DMG":"12, 19","IMP":14,"GRD":-4,"HIT":4,"CH":4,"SC":null,"Notes":"NCC:-,Delayable"},
                     {"Attack":"A[B]","Level":"H H","DMG":"12, 19","IMP":14,"GRD":-4,"HIT":4,"CH":4,"SC":null,"Notes":"Prep IV"},
                     {"Attack":"a6","Level":"H","DMG":"25","IMP":19,"GRD":-10,"HIT":3,"CH":3,"SC":null,"Notes":"~8WR:-"},
                     {"Attack":"[a]6","Level":"H","DMG":"25","IMP":19,"GRD":-10,"HIT":3,"CH":3,"SC":null,"Notes":"Prep II"}],
		"DIRECTIONALS": [{"Attack":"6A","Level":"H","DMG":"16","IMP":15,"GRD":-6,"HIT":5,"CH":"KND","SC":null,"Notes":""},
                         {"Attack":"3A","Level":"M","DMG":"30","IMP":14,"GRD":-10,"HIT":5,"CH":5,"SC":null,"Notes":"TC:-"},
                         {"Attack":"3A (tip range)","Level":"M","DMG":"20","IMP":14,"GRD":-14,"HIT":1,"CH":1,"SC":null,"Notes":"TC:-"},
                         {"Attack":"2A","Level":"sM","DMG":"15","IMP":14,"GRD":-13,"HIT":3,"CH":3,"SC":null,"Notes":"TC:-,FC:-"},
                         {"Attack":"1A","Level":"L","DMG":"22","IMP":27,"GRD":-17,"HIT":6,"CH":"KND","SC":null,"Notes":"TJ:-,FC:-"},
                         {"Attack":"4A","Level":"H","DMG":"26","IMP":17,"GRD":-13,"HIT":4,"CH":6,"SC":null,"Notes":"OBTH:-,Spin Stun on CH"},
                         {"Attack":"7A","Level":"H","DMG":"20","IMP":26,"GRD":-11,"HIT":5,"CH":5,"SC":null,"Notes":"OBTH:-"},
                         {"Attack":"8A","Level":"H","DMG":"25","IMP":26,"GRD":-11,"HIT":5,"CH":5,"SC":null,"Notes":"OBTH:-"}],
		"8WAYRUN": [{"Attack":"66A","Level":"H","DMG":"22","IMP":32,"GRD":-4,"HIT":6,"CH":6,"SC":null,"Notes":""},
                    {"Attack":"66A (tip range)","Level":"H","DMG":"22","IMP":18,"GRD":-7,"HIT":5,"CH":5,"SC":null,"Notes":""},
                    {"Attack":"66AA","Level":"H H","DMG":"22, 25","IMP":18,"GRD":-11,"HIT":5,"CH":5,"SC":null,"Notes":"NCC:-"},
                    {"Attack":"66AAB","Level":"H H M","DMG":"22, 25, 25","IMP":18,"GRD":-6,"HIT":9,"CH":9,"SC":null,"Notes":"3rd hit KND on CH"},
                    {"Attack":"66AA[B]","Level":"H H M","DMG":"22, 25, 25","IMP":18,"GRD":-6,"HIT":9,"CH":9,"SC":null,"Notes":"3rd hit KND on CH,Prep II"},
                    {"Attack":"33A","Level":"H","DMG":"20","IMP":21,"GRD":-11,"HIT":1,"CH":1,"SC":null,"Notes":""},
                    {"Attack":"33[A]~B+K","Level":"H","DMG":"20","IMP":21,"GRD":-7,"HIT":5,"CH":5,"SC":null,"Notes":"SC1"},
                    {"Attack":"33AA","Level":"H H","DMG":"20, 18","IMP":21,"GRD":-11,"HIT":4,"CH":4,"SC":null,"Notes":"NCC:-"},
                    {"Attack":"33AB","Level":"H L","DMG":"20, 19","IMP":21,"GRD":-13,"HIT":5,"CH":5,"SC":null,"Notes":"NCC:-"},
                    {"Attack":"33A[B]","Level":"H L","DMG":"20, 19","IMP":21,"GRD":-13,"HIT":5,"CH":5,"SC":null,"Notes":"NCC:-,Prep II"},
                    {"Attack":"22A","Level":"M","DMG":"32","IMP":27,"GRD":-10,"HIT":6,"CH":6,"SC":null,"Notes":""},
                    {"Attack":"22AA","Level":"M L","DMG":"32, 19","IMP":27,"GRD":-15,"HIT":7,"CH":7,"SC":null,"Notes":"NCC:-,FC:-"},
                    {"Attack":"22AB","Level":"M M","DMG":"32, 28","IMP":27,"GRD":-9,"HIT":7,"CH":7,"SC":null,"Notes":"NCC:-,OCB:-"},
                    {"Attack":"22A[B]","Level":"M M","DMG":"32, 28","IMP":27,"GRD":-9,"HIT":7,"CH":7,"SC":null,"Notes":"NCC:-,OCB:-"},
                    {"Attack":"11A","Level":"L","DMG":"20","IMP":19,"GRD":-17,"HIT":4,"CH":4,"SC":null,"Notes":"FC:-"},
                    {"Attack":"44A","Level":"H","DMG":"20","IMP":21,"GRD":-10,"HIT":3,"CH":"KND","SC":null,"Notes":"TS:-"},
                    {"Attack":"44aB","Level":"M","DMG":"85","IMP":67,"GRD":"UB","HIT":"KND","CH":"KND","SC":null,"Notes":"UB:-,TC:-,G Cancel"}],
		"WR/WL/FC/BT": [{"Attack":"WR A","Level":"H","DMG":"22","IMP":17,"GRD":-1,"HIT":6,"CH":6,"SC":null,"Notes":""},
                        {"Attack":"WL A","Level":"L","DMG":"24","IMP":42,"GRD":-15,"HIT":6,"CH":6,"SC":null,"Notes":"TJ:-"},
                        {"Attack":"FC A","Level":"sM","DMG":"15","IMP":12,"GRD":-13,"HIT":1,"CH":1,"SC":null,"Notes":"FC:-,TC:-"},
                        {"Attack":"FC 3A","Level":"H","DMG":"23","IMP":18,"GRD":-12,"HIT":4,"CH":4,"SC":null,"Notes":"FC:-"},
                        {"Attack":"FC 3AA","Level":"H H","DMG":"23, 28","IMP":18,"GRD":-8,"HIT":3,"CH":3,"SC":null,"Notes":"FC:-,2nd hit KND on CH"},
                        {"Attack":"FC 3AA~A+B+K","Level":"H H","DMG":"23, 28","IMP":18,"GRD":-4,"HIT":7,"CH":7,"SC":null,"Notes":"SC1,2nd hit KND on CH"},
                        {"Attack":"FC 3AAB","Level":"H H L","DMG":"23, 28, 19","IMP":18,"GRD":-10,"HIT":4,"CH":4,"SC":null,"Notes":"FC:-"},
                        {"Attack":"FC 3AA[B]","Level":"H H L","DMG":"23, 28, 19","IMP":18,"GRD":-10,"HIT":4,"CH":4,"SC":null,"Notes":"Prep II"},
                        {"Attack":"lBT A","Level":"H","DMG":"18","IMP":10,"GRD":-6,"HIT":7,"CH":7,"SC":null,"Notes":""},
                        {"Attack":"rBT A","Level":"H","DMG":"18","IMP":10,"GRD":-4,"HIT":7,"CH":7,"SC":null,"Notes":""},
                        {"Attack":"lBT 2A","Level":"L","DMG":"15","IMP":11,"GRD":-7,"HIT":4,"CH":4,"SC":null,"Notes":"TC:-,FC:-"},
                        {"Attack":"rBT 2A","Level":"L","DMG":"15","IMP":11,"GRD":-6,"HIT":4,"CH":4,"SC":null,"Notes":"TC:-,FC:-"}]
	},
	"B-MOVES": {
		"STANDARD": [{"Attack":"B","Level":"M","DMG":"15","IMP":16,"GRD":-10,"HIT":"3","CH":"3","SC":null,"Notes":"G Cancel"},
                     {"Attack":"BB","Level":"M M","DMG":"15, 20","IMP":16,"GRD":-11,"HIT":"2","CH":"2","SC":null,"Notes":"NC:-"}],
		"DIRECTIONALS": [{"Attack":"6B","Level":"H","DMG":"15","IMP":13,"GRD":1,"HIT":"9","CH":"9","SC":null,"Notes":""},
                         {"Attack":"6[B]","Level":"H","DMG":"15","IMP":13,"GRD":1,"HIT":"9","CH":"9","SC":null,"Notes":"Prep IV"},
                         {"Attack":"6BB","Level":"H H","DMG":"15, 16","IMP":13,"GRD":-5,"HIT":"7","CH":"-1","SC":null,"Notes":"NC:-"},
                         {"Attack":"6B[B]","Level":"H H","DMG":"15, 16","IMP":13,"GRD":-5,"HIT":"7","CH":"-1","SC":null,"Notes":"NC:-,Prep II"},
                         {"Attack":"6BB~A+B+K","Level":"H H","DMG":"15, 16","IMP":13,"GRD":-9,"HIT":"3","CH":"-5","SC":null,"Notes":"NC:-,SC1"},
                         {"Attack":"6BBB","Level":"H H M","DMG":"15, 16, 22","IMP":13,"GRD":-8,"HIT":"-2","CH":"-2","SC":null,"Notes":"NCC:-"},
                         {"Attack":"6BB[B]","Level":"M","DMG":"42","IMP":13,"GRD":-8,"HIT":"-2","CH":"-2","SC":null,"Notes":"NCC:-,Prep III"},
                         {"Attack":"3B","Level":"M","DMG":"28","IMP":18,"GRD":-9,"HIT":"LNC","CH":"LNC","SC":null,"Notes":""},
                         {"Attack":"3B (tip range)","Level":"M","DMG":"22","IMP":18,"GRD":-6,"HIT":"2","CH":"LNC","SC":null,"Notes":""},
                         {"Attack":"2B","Level":"M","DMG":"20","IMP":18,"GRD":-9,"HIT":"1","CH":"1","SC":null,"Notes":""},
                         {"Attack":"1B","Level":"L","DMG":"18","IMP":17,"GRD":-16,"HIT":"3","CH":"3","SC":null,"Notes":""},
                         {"Attack":"1B,B","Level":"L L","DMG":"18, 20","IMP":17,"GRD":-18,"HIT":"6","CH":"6","SC":null,"Notes":"NCC:-,Delayable"},
                         {"Attack":"4B","Level":"H","DMG":"27","IMP":19,"GRD":-4,"HIT":"7","CH":"7","SC":null,"Notes":""},
                         {"Attack":"4BB","Level":"H M","DMG":"27, 30","IMP":19,"GRD":-7,"HIT":"5","CH":"5","SC":null,"Notes":"NCC:-,Second hit launches on CH"},
                         {"Attack":"4B[B]","Level":"H M","DMG":"27, 36","IMP":19,"GRD":35,"HIT":"LNC","CH":"LNC","SC":null,"Notes":"GB:-"},
                         {"Attack":"7B","Level":"M","DMG":"24","IMP":28,"GRD":-17,"HIT":"KND","CH":"KND","SC":null,"Notes":"TJ:-,OCB:-"},
                         {"Attack":"8B","Level":"M","DMG":"29","IMP":28,"GRD":-17,"HIT":"KND","CH":"KND","SC":null,"Notes":"TJ:-,OCB:-"}],
		"8WAYRUN": [{"Attack":"66B","Level":"M","DMG":"35","IMP":16,"GRD":-7,"HIT":"6","CH":"6","SC":null,"Notes":""},
                    {"Attack":"66[B]","Level":"M","DMG":"35","IMP":16,"GRD":-7,"HIT":"6","CH":"6","SC":null,"Notes":"Prep III"},
                    {"Attack":"33B","Level":"M","DMG":"32","IMP":18,"GRD":-13,"HIT":"6","CH":"KND","SC":null,"Notes":""},
                    {"Attack":"33[B]","Level":"M","DMG":"32","IMP":18,"GRD":-13,"HIT":"6","CH":"KND","SC":null,"Notes":"Prep IV"},
                    {"Attack":"22B","Level":"L","DMG":"29","IMP":27,"GRD":-22,"HIT":"1","CH":"KND","SC":null,"Notes":"TS:-"},
                    {"Attack":"11B","Level":"M","DMG":"24","IMP":19,"GRD":-10,"HIT":"1","CH":"1","SC":null,"Notes":""},
                    {"Attack":"11BA","Level":"M H","DMG":"24, 20","IMP":19,"GRD":-7,"HIT":"6","CH":"6","SC":null,"Notes":"NCC:-"},
                    {"Attack":"11BAB","Level":"M H M","DMG":"24, 20, 32","IMP":19,"GRD":-11,"HIT":"4","CH":"4","SC":null,"Notes":"3rd hit KND on CH"},
                    {"Attack":"44B","Level":"M","DMG":"33","IMP":25,"GRD":-8,"HIT":"KND","CH":"KND","SC":null,"Notes":""}],
		"WR/WL/FC/BT": [{"Attack":"WR B","Level":"M","DMG":"23","IMP":14,"GRD":-7,"HIT":"6","CH":"6","SC":null,"Notes":""},
                        {"Attack":"WL B","Level":"M","DMG":"29","IMP":40,"GRD":-14,"HIT":"LNC","CH":"LNC","SC":null,"Notes":"TJ:-"},
                        {"Attack":"FC 2B","Level":"M","DMG":"18","IMP":14,"GRD":-11,"HIT":"2","CH":"2","SC":null,"Notes":"FC:-"},
                        {"Attack":"FC 1B","Level":"M","DMG":"17","IMP":14,"GRD":-11,"HIT":"4","CH":"4","SC":null,"Notes":"FC:-"},
                        {"Attack":"FC 3B","Level":"L","DMG":"25","IMP":23,"GRD":-13,"HIT":"7","CH":"7","SC":null,"Notes":""},
                        {"Attack":"FC 3[B]","Level":"L","DMG":"25","IMP":23,"GRD":-13,"HIT":"7","CH":"7","SC":null,"Notes":"Prep II"},
                        {"Attack":"BT B","Level":"M","DMG":"27","IMP":13,"GRD":-6,"HIT":"5","CH":"5","SC":null,"Notes":""},
                        {"Attack":"BT 2B","Level":"M","DMG":"26","IMP":14,"GRD":-7,"HIT":"4","CH":"4","SC":null,"Notes":"FC:-"}]
	},
	"K-MOVES": {
		"STANDARD": [{"Attack":"K","Level":"H","DMG":19,"IMP":13,"GRD":-7,"HIT":4,"CH":"4","SC":null,"Notes":"G Cancel"}],
		"DIRECTIONALS": [{"Attack":"6K","Level":"H","DMG":21,"IMP":13,"GRD":-7,"HIT":4,"CH":"4","SC":null,"Notes":""},
                         {"Attack":"3K","Level":"M","DMG":20,"IMP":16,"GRD":-8,"HIT":5,"CH":"5","SC":null,"Notes":""},
                         {"Attack":"2K","Level":"L","DMG":16,"IMP":15,"GRD":-11,"HIT":5,"CH":"5","SC":null,"Notes":"TC:-"},
                         {"Attack":"1K","Level":"L","DMG":25,"IMP":22,"GRD":-18,"HIT":4,"CH":"KND","SC":null,"Notes":"TJ:-"},
                         {"Attack":"4K","Level":"H","DMG":17,"IMP":17,"GRD":-14,"HIT":-4,"CH":"KND","SC":null,"Notes":"TC:-"},
                         {"Attack":"7K","Level":"M","DMG":20,"IMP":24,"GRD":-12,"HIT":3,"CH":"3","SC":null,"Notes":"OCB:-"},
                         {"Attack":"8K","Level":"M","DMG":25,"IMP":24,"GRD":-12,"HIT":3,"CH":"3","SC":null,"Notes":"OCB:-"}],
		"8WAYRUN": [{"Attack":"66K","Level":"M","DMG":28,"IMP":20,"GRD":-9,"HIT":3,"CH":"KND","SC":null,"Notes":"TJ:-"},
                    {"Attack":"22K","Level":"H","DMG":24,"IMP":18,"GRD":-7,"HIT":3,"CH":"KND","SC":null,"Notes":"iBT:-"},
                    {"Attack":"44K","Level":"M","DMG":20,"IMP":19,"GRD":-5,"HIT":8,"CH":"8","SC":null,"Notes":""},
                    {"Attack":"44K~214","Level":"M","DMG":20,"IMP":19,"GRD":-5,"HIT":8,"CH":"8","SC":null,"Notes":"RS"}],
		"WR/WL/FC/BT": [{"Attack":"WR K","Level":"M","DMG":20,"IMP":14,"GRD":-6,"HIT":6,"CH":"6","SC":null,"Notes":""},
                        {"Attack":"WL K","Level":"M","DMG":23,"IMP":36,"GRD":-10,"HIT":5,"CH":"5","SC":null,"Notes":""},
                        {"Attack":"FC K","Level":"L","DMG":12,"IMP":14,"GRD":-12,"HIT":4,"CH":"4","SC":null,"Notes":""},
                        {"Attack":"BT K","Level":"H","DMG":15,"IMP":11,"GRD":-7,"HIT":3,"CH":"3","SC":null,"Notes":""},
                        {"Attack":"BT 2K","Level":"L","DMG":10,"IMP":12,"GRD":-6,"HIT":4,"CH":"4","SC":null,"Notes":""}]
	},
	"SIMULTANEOUS PRESS": {
		"STANDARD": [{"Attack":"A+B","Level":"M M","DMG":"16, 34","IMP":18,"GRD":-15,"HIT":"3","CH":"LNC","SC":null,"Notes":"NCC:-,TJ:-"},
                     {"Attack":"[A+B]","Level":"M M","DMG":"16, 34","IMP":33,"GRD":-7,"HIT":"LNC","CH":"LNC","SC":null,"Notes":"TC:-,TJ:-"},
                     {"Attack":"A+BA","Level":"M M L","DMG":"15, 26, 23","IMP":21,"GRD":-7,"HIT":"4","CH":"4","SC":null,"Notes":"TJ:-,TC:-"}],
		"DIRECTIONALS": [{"Attack":"3A+B","Level":"L","DMG":"40","IMP":29,"GRD":-15,"HIT":"KND","CH":"KND","SC":null,"Notes":""},
                         {"Attack":"4A+B","Level":"M M","DMG":"19, 25","IMP":19,"GRD":-14,"HIT":"KND","CH":"KND","SC":null,"Notes":"NCC:-,TJ:-,Forces crouch on guard"},
                         {"Attack":"9A+B","Level":"H M","DMG":"15, 22","IMP":19,"GRD":-9,"HIT":"5","CH":"5","SC":null,"Notes":"NC:-AGI,:aGI High-Mid Horizontal moves and throws. GI frames = 13th-17th"},
                         {"Attack":"9[A+B]","Level":"H M","DMG":"45","IMP":19,"GRD":-9,"HIT":"5","CH":"5","SC":null,"Notes":"NC:-,AGI:aGI High-Mid Horizontal moves and throws. GI frames = 13th-17th,Prep II"}],
		"8WAYRUN": [{"Attack":"66A+B","Level":"M","DMG":"30","IMP":23,"GRD":-11,"HIT":"LNC","CH":"LNC","SC":null,"Notes":"G Cancel"}],
		"WR/WL/FC/BT": [{"Attack":" WR A+B","Level":"H","DMG":"32","IMP":21,"GRD":-5,"HIT":"7","CH":"STUN","SC":null,"Notes":""},
                        {"Attack":"WR A+B (tip range)","Level":"H","DMG":"26","IMP":21,"GRD":-4,"HIT":"5","CH":"STUN","SC":null,"Notes":""},
                        {"Attack":"WR [A+B]","Level":"H","DMG":"32","IMP":21,"GRD":-5,"HIT":"7","CH":"7","SC":null,"Notes":"Prep III"}]
	},

"SPECIAL STANCES": {
	"Advance Step (236)": {
    		"STANDARD": [{"Attack":"AS A","Level":"M","DMG":"21","IMP":29,"GRD":-15,"HIT":"-10","CH":"-10","SC":null,"Notes":"TJ:-,Forces BT on hit"},
                        {"Attack":"AS AB","Level":"M M","DMG":"21, 25","IMP":29,"GRD":-20,"HIT":"KND","CH":"KND","SC":null,"Notes":"NCC:-,TJ:-"},
                        {"Attack":"AS A[B]","Level":"M M","DMG":"21, 30","IMP":29,"GRD":24,"HIT":"KND","CH":"KND","SC":null,"Notes":"GB:-,TJ:-"},
                        {"Attack":"AS B","Level":"M","DMG":"54","IMP":20,"GRD":-11,"HIT":"KND","CH":"KND","SC":"-,GB,UB:-, 27, UB","Notes":"Forces crouch on GRD"},
                        {"Attack":"AS K","Level":"M","DMG":"20","IMP":15,"GRD":-10,"HIT":"3","CH":"3","SC":null,"Notes":""},
                        {"Attack":"AS A+B","Level":"M","DMG":"45","IMP":23,"GRD":-10,"HIT":"LNC","CH":"LNC","SC":"GB,-,-:25, -, -","Notes":"TJ:-"}]
    	},

    "Retreat Step (214)": {
                "STANDARD": [{"Attack":"RS A","Level":"L","DMG":27,"IMP":null,"GRD":-15,"HIT":"-1","CH":"4","SC":null,"Notes":""},
                            {"Attack":"RS B","Level":"M","DMG":35,"IMP":null,"GRD":-6,"HIT":"5","CH":"KND","SC":null,"Notes":""},
                            {"Attack":"RS [B]","Level":"M","DMG":40,"IMP":null,"GRD":-11,"HIT":"KND","CH":"KND","SC":"GB,-,-:25, -, -","Notes":"AGI:High-Mid vertical moves and throws. GI frames = 8th-13th"},
                            {"Attack":"RS K","Level":"M","DMG":24,"IMP":null,"GRD":null,"HIT":null,"CH":null,"SC":null,"Notes":""}]

    },
    "Auto Evades": {
        		"STANDARD": [{"Attack":"B+K","Level":null,"DMG":0,"IMP":null,"GRD":null,"HIT":null,"CH":null,"SC":null,"Notes":"Auto evades High-Mid moves. Auto-Evade frames = 1st-19th"},
                            {"Attack":"A+K","Level":null,"DMG":0,"IMP":null,"GRD":null,"HIT":null,"CH":null,"SC":null,"Notes":"Auto evades Mid-Low moves. Auto-Evade frames = 1st-26th"},
                            {"Attack":"236","Level":"M","DMG":25,"IMP":null,"GRD":null,"HIT":null,"CH":"KND","SC":null,"Notes":"TC:-,Auto-Evade frames = 4th-23rd"}]
        	},

    "Envelopment Sway (horizontal auto-evade)": {
                "STANDARD": [{"Attack":"ES A","Level":"M","DMG":20,"IMP":22,"GRD":-7,"HIT":3,"CH":"KND","SC":null,"Notes":""},
                            {"Attack":"ES B","Level":"M","DMG":25,"IMP":15,"GRD":-8,"HIT":-1,"CH":"KND","SC":null,"Notes":""},
                            {"Attack":"ES [B]","Level":"M","DMG":25,"IMP":15,"GRD":-8,"HIT":-1,"CH":"KND","SC":null,"Notes":"Prep III"},
                            {"Attack":"ES K","Level":"M","DMG":19,"IMP":16,"GRD":-5,"HIT":3,"CH":"3","SC":null,"Notes":""}]

    },
    "Envelopment Traverse (vertical auto-evade)": {
                "STANDARD": [{"Attack":"ET A","Level":"M M","DMG":"18, 20","IMP":14,"GRD":-1,"HIT":6,"CH":"KND","SC":null,"Notes":"NC:-"},
                            {"Attack":"ET [A]","Level":"M M","DMG":"18","IMP":14,"GRD":-8,"HIT":3,"CH":"3","SC":null,"Notes":"Prep III"},
                            {"Attack":"ET B","Level":"M","DMG":"25","IMP":15,"GRD":-7,"HIT":3,"CH":"KND","SC":null,"Notes":""},
                            {"Attack":"ET [B]","Level":"M","DMG":"25","IMP":15,"GRD":-7,"HIT":3,"CH":"KND","SC":null,"Notes":"Prep III"},
                            {"Attack":"ET K","Level":"M","DMG":"19","IMP":13,"GRD":-7,"HIT":3,"CH":"3","SC":null,"Notes":""}]
            },

    "Envelopment Hop (low auto-evade)": {
                "STANDARD": [{"Attack":"EH A","Level":"M","DMG":"23","IMP":null,"GRD":-7,"HIT":3,"CH":"KND","SC":null,"Notes":"TJ:-"},
                            {"Attack":"EH A B","Level":"M M","DMG":"23, 23","IMP":null,"GRD":-3,"HIT":5,"CH":"KND","SC":null,"Notes":"TJ:-"},
                            {"Attack":"EH A[B]","Level":"M M","DMG":"25","IMP":null,"GRD":-3,"HIT":5,"CH":"KND","SC":null,"Notes":"TJ:-"},
                            {"Attack":"EH B","Level":"M","DMG":"25","IMP":"15","GRD":-4,"HIT":4,"CH":"KND","SC":null,"Notes":""},
                            {"Attack":"EH [B]","Level":"M","DMG":"25","IMP":"13","GRD":-4,"HIT":4,"CH":"KND","SC":null,"Notes":"Prep III"}]

    },
    "Quick Parade (1A+B)": {
                "STANDARD": [{"Attack":"1A+B","Level":null,"DMG":0,"IMP":34,"GRD":null,"HIT":null,"CH":null,"SC":null,"Notes":"AGI:High-Mid horizontal moves. GI frames = 8th-15th"},
                            {"Attack":"QP B","Level":"M M M M M M M","DMG":"4, 4, 4, 4, 4, 4, 4","IMP":22,"GRD":-6,"HIT":2,"CH":"2","SC":null,"Notes":""},
                            {"Attack":"QP B:B","Level":"M M M M M M M M","DMG":"4, 4, 4, 4, 4, 4, 4, 28","IMP":22,"GRD":-3,"HIT":5,"CH":"KND","SC":null,"Notes":""},
                            {"Attack":"QP B:[B]","Level":"M M M M M M M M","DMG":"4, 4, 4, 4, 4, 4, 4, 28","IMP":22,"GRD":-3,"HIT":5,"CH":"KND","SC":null,"Notes":"Prep III"}]
            },

    "Preparation I": {
                "STANDARD": [{"Attack":"PR1 A","Level":"L","DMG":"27","IMP":10,"GRD":-18,"HIT":"-3","CH":"3","SC":null,"Notes":""},
                            {"Attack":"PR1 6A","Level":"M","DMG":"19","IMP":19,"GRD":-8,"HIT":"3","CH":"3","SC":null,"Notes":"OBTC:-"},
                            {"Attack":"PR1 6AB","Level":"M M","DMG":"19, 28","IMP":19,"GRD":-10,"HIT":"6","CH":"6","SC":null,"Notes":"NCC:-,OBT:-,2nd hit KND on CH"},
                            {"Attack":"PR1 B","Level":"H","DMG":"35","IMP":20,"GRD":-6,"HIT":"5","CH":"KND","SC":null,"Notes":""},
                            {"Attack":"PR1 [B]","Level":"M","DMG":"40","IMP":33,"GRD":-11,"HIT":"KND","CH":"KND","SC":"GB,-,-:25, -, -","Notes":""},
                            {"Attack":"PR1 2B","Level":"L","DMG":"20","IMP":23,"GRD":-16,"HIT":"1","CH":"1","SC":null,"Notes":""}]

    },
    "Preparation II": {
        		"STANDARD": [{"Attack":"PR2 6A","Level":"M","DMG":"19","IMP":19,"GRD":-8,"HIT":"3","CH":"3","SC":null,"Notes":"OBTC:-"},
                            {"Attack":"PR2 6AB","Level":"M M","DMG":"19, 28","IMP":19,"GRD":-10,"HIT":"6","CH":"6","SC":null,"Notes":"NCC:-,2nd hit KND on CH"},
                            {"Attack":"PR2 4A","Level":"H","DMG":"22","IMP":21,"GRD":-17,"HIT":"1","CH":"KND","SC":null,"Notes":"TS:-"},
                            {"Attack":"PR2 B","Level":"H","DMG":"35","IMP":20,"GRD":-6,"HIT":"5","CH":"KND","SC":null,"Notes":""},
                            {"Attack":"PR2 [B]","Level":"M","DMG":"40","IMP":33,"GRD":-11,"HIT":"KND","CH":"KND","SC":"GB,-,-:25, -, -","Notes":""},
                            {"Attack":"PR2 K","Level":"M","DMG":"20","IMP":15,"GRD":-10,"HIT":"3","CH":"3","SC":null,"Notes":""}]
        	},

    "Preparation III": {
                "STANDARD": [{"Attack":"PR3 6A","Level":"H","DMG":25,"IMP":18,"GRD":-10,"HIT":"3","CH":"3","SC":null,"Notes":"~8WR:-"},
                            {"Attack":"PR3 6A","Level":"H","DMG":25,"IMP":18,"GRD":-10,"HIT":"3","CH":"3","SC":null,"Notes":"~8WR:-, Prep II"},
                            {"Attack":"PR3 B","Level":"M","DMG":54,"IMP":15,"GRD":-11,"HIT":"KND","CH":"KND","SC":"-,GB,UB:-, 27, UB","Notes":"OCB:-"},
                            {"Attack":"PR3 K","Level":"H","DMG":20,"IMP":19,"GRD":-5,"HIT":"8","CH":"8","SC":null,"Notes":""},
                            {"Attack":"PR3 K~214","Level":"H","DMG":20,"IMP":19,"GRD":-5,"HIT":"8","CH":"8","SC":null,"Notes":"RS"}]

    },
    "Preparation IV": {
                    "STANDARD": [{"Attack":"PR4 6A","Level":"M","DMG":18,"IMP":14,"GRD":-7,"HIT":3,"CH":"3","SC":null,"Notes":""},
                                {"Attack":"PR4 B","Level":"H","DMG":30,"IMP":12,"GRD":-7,"HIT":6,"CH":"KND","SC":null,"Notes":""},
                                {"Attack":"PR4 [B]","Level":"H","DMG":30,"IMP":12,"GRD":-7,"HIT":6,"CH":"KND","SC":null,"Notes":"Prep II"},
                                {"Attack":"PR4 K","Level":"M","DMG":28,"IMP":24,"GRD":-9,"HIT":3,"CH":"KND","SC":null,"Notes":"TJ:-"}]

     }
     },



	"THROWS": {
		"STANDARD": [{"Attack":"A+G","Level":"H","DMG":50,"IMP":16,"GRD":null,"HIT":null,"CH":null,"SC":null,"Notes":"A Break"},
                    {"Attack":"B+G","Level":"H","DMG":60,"IMP":16,"GRD":null,"HIT":null,"CH":null,"SC":null,"Notes":"B Break,RO"},
                    {"Attack":"Left A+G_B+G","Level":"H","DMG":55,"IMP":16,"GRD":null,"HIT":null,"CH":null,"SC":null,"Notes":"A_B Break"},
                    {"Attack":"Right A+G_B+G","Level":"H","DMG":55,"IMP":16,"GRD":null,"HIT":null,"CH":null,"SC":null,"Notes":"A_B Break,RO"},
                    {"Attack":"Back A+G_B+G","Level":"H","DMG":60,"IMP":16,"GRD":null,"HIT":null,"CH":null,"SC":null,"Notes":"A_B Break (Asta and Voldo only)"}]
	}
};
