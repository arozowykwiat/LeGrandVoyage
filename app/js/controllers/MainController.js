(function(){
var app = angular.module("grandVoyageApp",['ngSanitize','ngRoute','deviceTypeProvider']);
var poeme=[
	{
		idPoeme:1,
		idStrophe:1,
		titre:"Ce que tu écris… ⎠",
		titreGr:"⎝ Ό,τι γράφεις...",
		strophe:"<p>… sera lu dans un futur qui peut-être<br>n’existera pas ; il glisse sur l’écume<br/>de glaciers qui fondent. Ce que tu écris<br/>appartient au passé qui a toujours paru,<br/>depuis le temps du serpent, innocent.</p>",
		stropheGr:"<p>… θα διαβαστεί σ’ ένα μέλλον που ίσως<br>δεν υπάρξει ποτέ. Γλιστρά στον αφρό<br/>παγετώνων που λιώνουν· ό,τι γράφεις<br/>ανήκει σ’ ένα παρελθόν που έμοιαζε<br/>πάντα, απ’ τον καιρό του φιδιού, αθώο.</p>"
	},
	{
		idPoeme:1,
		idStrophe:2,
		strophe:"<p>Impuissante main sur des touches sans son,<br>regard vide sur l’écran, nostalgie<br/>du piano qui émeut la corde. Non, j’insiste,<br/>le clavier électrique, c’est différent :<br/>cette vérité, au moins, reconnais-la.</strong></p>",
		stropheGr:"<p>Άδειο χέρι σε πλήκτρα δίχως ήχο,<br>βλέμμα κενό στην οθόνη νοσταλγεί<br/>το πιάνο, που συγκινεί τη χορδή.<br/>Όχι, το ηλεκτρικό κλαβιέ διαφέρει:<br/>μία τουλάχιστον αλήθεια ας δεχτείς.</strong></p>"
	},
	{
		idPoeme:1,
		idStrophe:3,
		strophe:"<p>Qu’elle arrive vite, l’heure où bat<br/>sans distinction un rythme pour un autre,<br/>une phrase pour une autre ; des doigts<br/>sans cals tracent une musique comme<br/>un souvenir étranger, et la phrase fuit</p>",
		stropheGr:"<p>Πώς έφτασε έτσι ραγδαία η ώρα,<br/>ένας ρυθμός αντ’ άλλου αδιακρίτως<br/>να χτυπά, μια φράση αντ’ άλλης· δάχτυλα<br/>δίχως κάλους να γράφουν μουσική σαν<br/>ξένη ανάμνηση κι η φράση να φεύγει</p>"
	},	
	{
		idPoeme:1,
		idStrophe:4,
		stropheGr:"<p>τις έννοιες σ’ έναν άναρθρο καιρό<br/>συνωνύμων. Έφτασ’ έτσι ραγδαία<br/>του δικτάτορα η ώρα στην ψυχή<br/>καθενός: δεν κυβερνά με τη βία,<br/>συγχέει εγωισμό κι αυτογνωσία,/p>",
		strophe:"<p>le sens dans une ère inarticulée<br/>de synonymes. Elle arrive vite,<br/>l’heure du dictateur dans l’âme de chacun :<br/>lui ne gouverne pas par la violence,<br/>il confond égoïsme et connaissance</p>"		
	},
	{
		idPoeme:1,
		idStrophe:5,
		stropheGr:"<p>εξωραΐζει την αλαζονεία,<br/>πίνει πετρέλαιο αντί για νερό.<br/>Ό,τι γράφεις την ώρα που θάρρεψε<br/>πως γνωρίζει αρκετά και σκοτώνει<br/>το δάσκαλο, την ώρα που αγνοεί</p>",
		strophe:"<p>de soi, il magnifie l’arrogance<br/>et boit du pétrole à la place de l’eau.<br/>Ce que tu écris à l’heure qui croit<br/>en savoir assez pour tuer le maître,<br/>à l’heure qui élude l’ascèse du besoin,</p>"
	},	
	{
		idPoeme:1,
		idStrophe:6,
		strophe:"<p>neutralise l’âme, évacue la passion,<br/>ce que tu écris appartient<br/>à un âge sans lendemain.</p>",		
		stropheGr:"<p>της ανάγκης την άσκηση, αδρανεί<br/>την ψυχή κι αποβάλλει το πάθος,<br/>ανήκει σ’ έναν καιρό δίχως αύριο.</p>",
	},	
	{
		idPoeme:1,
		idStrophe:7,
		strophe:"<p>Mais le temps donne à sentir à l’homme<br/>ce qui advient autre part, autre fois.</p>",
		stropheGr:"<p>Μα ο χρόνος επιτρέπει στον άνθρωπο<br/>να νιώθει τι συμβαίνει άλλοτε κι αλλού.</p>"	
	},	
	{
		idPoeme:2,
		idStrophe:1,
		titre:"Le bateau ⎠",
		titreGr:"⎝ Το καράβι",		
		partie:"I",
		strophe:"<p>Comment mouillera-t-il, ce bateau,<br/>attaché qu’il est sur la grève ? Où ira-t-il<br/>maintenant que les vents sont paralysés ?<br/>Regarde le gros temps qui approche ;<br/>la nuit tombe et la rampe est trempée.</p>",
		stropheGr:"<p>Πώς θα σαλπάρει τούτο το καράβι,<br/>καθώς το δέσαν έτσι στο γιαλό; Πού<br/>θα τραβήξει σαν έχουν οι ανέμοι<br/>παραλύσει; Bαρύς καιρός σιμώνει<br/>και σαν νυχτώνει, βρεμένη η κουπαστή.</p>"	
	},
	{
		idPoeme:2,
		idStrophe:2,
		strophe:"<p>Ces voiles que personne ne rapièce<br/>sont par la tempête battues, déchirées.<br/>Mille fois je te l’ai dit, capitaine,<br/>prends des mesures, retrousse tes manches.<br/>Il est à toi, ce vaisseau, il n’obéit</p>",
		stropheGr:"<p>Mα το πανί κανείς δεν το μπαλώνει<br/>κι ας τώχει άγρια δείρει ο χαλασμός.<br/>Xίλιες φορές σου τώπα, καπετάνιε,<br/>μέτρα να λάβεις, να ανασκουμπωθείς.<br/>Δικό σου είναι το σκαρί που μόνο</p>"
	},
	{
		idPoeme:2,
		idStrophe:3,
		strophe:"<p>qu’à tes ordres. Si tu viens d’embarquer<br/>une charge lourde, à long cours, rappelle-toi<br/>qu’il n’écoute que toi, ce bateau.<br/>Lors d’une mission secrète il a seul<br/>pris la mer, sans marin, sans commandant,</p>",
		stropheGr:"<p>σύ μπορείς να κουμαντάρεις. Kι ας είχες<br/>μπάρκο μακρινό σαλπάρει και βαρύ,<br/>άλλον δεν ακούει τούτο το σκαρί.<br/>Του παραγγείλαν μυστική αποστολή<br/>και κίνησε μονάχο του να πάει.</p>"
	},
	{
		idPoeme:2,
		idStrophe:4,
		strophe:"<p>au coucher des Chevreaux dans le ciel ;<br/>nombreux sont ceux qui ont péri ainsi.<br/>Il s’en est allé seul et seul il est revenu.<br/>Va, capitaine, débarder dans un port<br/>fréquenté, expédie ta précieuse charge</p>",
		stropheGr:"<p>Aρμένιζε δίχως ούτ’ ένα ναύτη<br/>κι οι Έριφοι σμίγανε στον ουρανό.<br/>Τόσοι έχασαν έτσι τη ζωή τους<br/>μα ετούτο πήγε κι ήρθε μοναχό.<br/>Kοίταξε, καπετάνιε, σε λιμάνι κοσμικό</p>"
	},
	{
		idPoeme:2,
		idStrophe:5,
		strophe:"<p>par caravane lointaine. Et viens ici :<br/>au rivage désert qui hante ton esprit.<br/>C’est toi qu’attendent mousses et gabiers,<br/>toi qu’habitent les chemins du vent ;<br/>les cétacés t’observent. Il est magique,</p>",
		stropheGr:"<p>να ξεφορτώσεις, στείλε το ακριβό σου μπάρκο<br/>με καραβάνι μακρινό. Mα σύ κόπιασε δώ,<br/>σ’ έρμο γιαλό πούχει το πνεύμα σου στοιχειώσει.<br/>Eσένα περιμένουν μούτσοι και λοστρόμοι,<br/>εσένα κατοικούν και του ανέμου οι δρόμοι</p>"
	},
	{
		idPoeme:2,
		idStrophe:6,
		strophe:"<p>ce bateau, il a fait le tour du monde ;<br/>il sait où le coucher embrasse le levant,<br/>où le revers du jour dans les ténèbres<br/>se perd. Il le connaît, le trésor caché.<br/>Des sirènes le gardent et se sont juré</p>",
		stropheGr:"<p>και τα θαλάσσια κήτη σε κοιτούν. Eίναι<br/>καράβι μαγικό, έχει γυρίσει όλη τη γη,<br/>εκεί που συναντά η Δύση την Ανατολή<br/>και του φωτός ανατροπή χάνεται στα σκότη.<br/>Αυτό γνωρίζει τον κρυμμένο θησαυρό.</p>"
	},
	
	{
		idPoeme:2,
		idStrophe:7,
		strophe:"<p>de te faire perdre la tête. Le fantôme<br/>en mer te suivra. Et ce vaisseau<br/>imprévisible, léger, t’expédiera sans croix.<br/>Ton corps en lambeaux dans les vagues<br/>tanguera sans psaumes et sans glas.</p>",
		stropheGr:"<p>Γοργόνες τον φυλάνε κι έταξαν σκοπό<br/>να σου το πάρουν το μυαλό. Στη θάλασσα<br/>το φάντασμα θα βλέπεις. Kαι τούτο το λαφρύ,<br/>απρόσμενο σκαρί, δίχως σταυρό σε στέλνει.<br/>Δε θ’ ακουστούν για σένα ψαλμωδίες,</p>"
	},	
	{
		idPoeme:2,
		idStrophe:8,
		strophe:"<p>Regagne, capitaine, je t’en supplie,<br/>le rivage humide ; viens exaucer le voeu<br/>avant qu’il ne scelle les mers à jamais.</p>",
		stropheGr:"<p>ούτε καμπάνες θ’ αντηχούν, κουρέλια<br/>lμες στα κύματα το σώμα σου θα παραδέρνει.<br/>Γύρισε καπετάνιε στον υγρό γιαλό,<br/>το τάμα πλήρωσε, να σε χαρώ, προτού<br/>τα πέλαγα αξεδιάλυτα σφραγίσει.</p>"
	
	},
	{
		idPoeme:2,
		idStrophe:9,
		strophe:"<p>Le trésor gémit en secret et le temps<br/>s’apprête à tourner avant que la nuit<br/>ne tombe éternelle.</p>",
		stropheGr:"<p>Bογγά κρυφά ο θησαυρός<br/>κι είναι στο γύρισμα ο καιρός<br/>προτού αιώνια νυχτώσει.</p>"
	},
	{
		idPoeme:2,
		idStrophe:10,
		partie:"II",
		strophe:"<p>J’aime bien les figures de la lune courroucée<br/>qui fume des nuages. J’aime les farfadets<br/>qui glissent sur les rayons furibonds du soleil.</p>",
		stropheGr:"<p>Μ’ αρέσουν οι φιγούρες του θυμωμένου φεγγαριού<br/>καθώς τα σύννεφα φουμάρει. Τα ξωτικά μ’ αρέσουν,<br/>καθώς γλιστρούν επάνω σε οργισμένες ηλιαχτίδες.</p>"
	},
	{
		idPoeme:2,
		idStrophe:11,
		strophe:"<p>Mais quand la rose mortelle pique jusqu’au sang,<br/>gare à qui n’a pas compris la parole du dieu<br/>par la naissance et par la fin des choses.</p>",
		stropheGr:"<p>Μα όταν ρόδου αγκάθι θανατερό ματώσει,<br/>αλίμονο σ’ όποιον το λόγο του θεού δε νιώσει<br/>από τη γέννηση κι από το τέλος των πραγμάτων.</p>"
	},
	{
		idPoeme:2,
		idStrophe:12,
		strophe:"<p>J’aime bien les monstres qui froncent le sourcil<br/>et la faux qui s’abat en luisant sur le champ doré :<br/>sa lame dure épure le fruit trouble des esprits.</p>",
		stropheGr:"<p>Μ’ αρέσουνε τα σουφρωμένα φρύδια των τεράτων,<br/>τα δρέπανα που αστραφτοκοπούν θερίζοντας<br/>χρυσαφένιο αγρό: σκληρό λεπίδι καθαρίζει</p>"	
	},
	{
		idPoeme:2,
		idStrophe:13,
		strophe:"<p>Dans ces lieux déserts, les âmes respirent à peine<br/>l’herbe desséchée ; réapparaissent alors les visions<br/>de lumière, riches et blanches, virginales,</p>",
		stropheGr:"<p>το σκοτισμένο καρπό των πνευμάτων. Στις ερημιές<br/ολόξερα χορτάρια θ’ απομείνουν να ανασάνουν<br/>οι ψυχές· σαν οπτασία φωτός ξαναπροβάλλουν</p>"	
	},
	{
		idPoeme:2,
		idStrophe:14,
		strophe:"<p>messes oriflammes d’encens parfumées.<br/>Ne pleure pas ce que tu as perdu, ne regrette pas<br/>ce que tu as laissé, tu obtiendras ce qui a manqué ;</p>",
		stropheGr:"<p>πλούσιες και λευκές, παρθενικές, εξαπτέρυγες<br/>μυρωμένες λειτουργίες. Ό,τι έχασες μην κλάψεις,<br/>ό,τι άφησες μη λυπηθείς και ό,τι έλειψε</p>"
	},
	{
		idPoeme:2,
		idStrophe:15,
		strophe:"<p>mais quand amère encore, au moment d’éclore,<br/>la jeune pousse est coupée, accepte la mutation<br/>de l’âme par la matière revisitée.</p>",
		stropheGr:"<p>θα λάβεις, μόνο μην αρνηθείς πικρό όταν κοπεί<br/>στην άνθηση τ’ ολόφρεσκο βλαστάρι, την αλλαγή,<br/>καθώς μεταμορφώνει από την ύλη την ψυχή.</p>"	
	},
	{
		idPoeme:2,
		idStrophe:16,
		strophe:"<p>Va avec la vague, va avec le vent rejoindre<br/>le lieu de ton départ : ce n’est pas un retour,<br/>c’est une communion, transparence entre l’être</p>",
		stropheGr:"<p>Φύγε με τον άνεμο, φύγε με το κύμα, κι αν πας<br/>lκατακεί που ήρθες, δεν είναι γυρισμός· οι μορφές<br/>είναι που κοινωνούν. Kαι σύ, διάφανη μεμβράνη</p>"	
	},
	{
		idPoeme:2,
		idStrophe:17,
		strophe:"<p>et les dieux. Détrompe l’illusion. Les anges<br/>sont tes fidèles alliés. Ces féroces guerriers<br/>frappent d’instinct sans pitié les membres fluets.</p>",
		stropheGr:"<p>ανάμεσα στο είναι και στους αθάνατους θεούς.<br/>Mη γελαστείς από τις όψεις. Έχεις αγγέλους<br/>σύμμαχους πιστούς. Eίναι σκληροί πολεμιστάδες,</p>"
	},
	{
		idPoeme:2,
		idStrophe:18,
		strophe:"<p>Laisse les implacables tueurs, instruments du destin,<br/>exécuteurs du temps, tisser le filet prévu par la loi ;<br>l’univers est ainsi accompli. Quand les ancres se lèvent</p>",
		stropheGr:"<p>αλύπητοι φονιάδες, με ένστικτο που νιώθει<br/>τους ευαίσθητους αρμούς. Άφησε να κεντήσουνε<br>το δίχτυ, καθώς από το νόμο έχει οριστεί.</p>"
	},
	{
		idPoeme:2,
		idStrophe:19,
		strophe:"<p>en grondant, qu’elle pleure, la famille, sur le quai ;<br/>ces yeux mouillés où se glace le sel et se fige<br/>sont par les apparences vite consolés.</p>",
		stropheGr:"<p>Eίν’ όργανα της Tύχης, εκτελεστές του χρόνου και<br/>της γης. Όταν σηκώνονται οι άγκυρες βογγώντας,<br/>άσε να κλάψουν στο λιμάνι οι συγγενείς, τα μάτια</p>"
	},	
	{
		idPoeme:2,
		idStrophe:20,
		strophe:"<p>Va avec le vent et le tonnerre toucher les coraux<br/>écarlates, les nacres qui pleurent leur charogne<br/>et qui puent, va toucher douce, humide, soyeuse,</p>",
		stropheGr:"<p>κείνα που βουρκώνουν στην αλμύρα και παγώνουν<br/>εύκολα ξεχνιούνται με τις εικόνες τις πλαστές.<br/>Φύγε με τον άνεμο και με τις βροντές· κοράλλια</p>"
	},
		{
		idPoeme:2,
		idStrophe:21,
		strophe:"<p>la perle noire du fond secret.</p>",
		stropheGr:"<p>πορφυρά, σεντέφια που βρωμούν και ψοφίμι ακόμα<br/>νοσταλγούν να ’γγίξεις, στιλπνό και απαλό, υγρό,<br/>μαύρο μαργαριτάρι του μυστικού βυθού.</p>"		
	},	
		{
		idPoeme:2,
		idStrophe:22,
		partie:"III",
		strophe:"<p>Je me souviens de toi dans le port :<br/>tu contemplais notre avenir<br/>sur une mer salée.</p>",
		stropheGr:"<p>Στο λιμάνι θυμάμαι ν’ αγναντεύεις<br/>το μέλλον μας σε θάλασσα αλμυρή.</p>"
	},
		{
		idPoeme:2,
		idStrophe:23,
		strophe:"<p>Mais quand tu m’abandonnais dans l’oeil des vents,<br/>tu l’entendais, mon cri, dans les Strophades<br/>où seules les saintes icônes peuvent<br/>d’un bord à l’autre traverser.<br/>Où résonnera-t-elle maintenant, la voix de l’amour ?</p>",
		stropheGr:"<p>Αλλ’ όταν μ’ εγκατέλιπες στο μάτι<br/>των ανέμων, άκουγες την κραυγή μου<br/>στα Στροφάδια, που άγιες μόνον εικόνες<br/>από γιαλό σ’ άλλο γιαλό διαβαίνουν.<br/>Τώρα πού θα βρεις του έρωτα φωνή;</p>"
	},	
	{
		idPoeme:2,
		idStrophe:24,
		strophe:"<p>Les poissons sont bien plus éloquents<br/>que la passion reniée.</p>",
		stropheGr:"<p>Τα ψάρια μού μιλάνε πιο καλά<br/>απ’ την αγάπη πούχεις αρνηθεί.</p>"

	},
	{
		idPoeme:3,
		idStrophe:1,
		titre:"Dense et profond… ⎠",
		titreGr:"⎝ Βαθύς και πυκνός..."
	},
	{
		idPoeme:4,
		idStrophe:1,
		titre:"Appareillage ⎠",
		titreGr:"⎝ Απόπλους",
		strophe:"<p>Reste maintenant dans ta médiocrité,<br/>sans étincelle dans ton froid hivernal.<br/>Ton étreinte était douce, mais en moi<br/>elle n’a pas laissé de trace.<br/></p>",
		stropheGr:"<p>Σ’ αφήνω πια στη μετριότητά σου,<br/>τη χειμωνιά σου άλλο δεν πυροδοτώ.<br/>Γλυκό ήτανε τ’ άγγιγμά σου, όμως<br/>στο χώμα μου δεν άφησε καρπό.</p>"

	},
	{
		idPoeme:4,
		idStrophe:2,
		strophe:"<p>Adieu, que tes jours soient tranquilles<br/>et si le bonheur te blesse,<br/>vis la promesse d’un moment<br/>d’enivrante plénitude.</p>",
		stropheGr:"<p>Αντίο, νάν’ οι μέρες σου ήσυχες,<br/>κι αφού η ευτυχία σε πονεί,<br/>ζήσε με την υπόσχεση πως θάρθει<br/>πληρότητας μεθυστική στιγμή.</p>"

	},
	{
		idPoeme:4,
		idStrophe:3,
		strophe:"<p>Tu n’étais pas fait pour le goût salé<br/>qui brûle l’âme immature.<br/>Comment t’abreuver à l’eau cristalline<br/>de source sauvage ?</p>",
		stropheGr:"<p>Δεν ήτανε για σένα η αλμυρή<br/>γεύση που τσούζει την άωρη ψυχή,<br/>πώς ν’ αγαπήσεις το κρυστάλλινο<br/>νερό από την άγρια την πηγή;</p>"
	},
	{
		idPoeme:4,
		idStrophe:4,
		strophe:"<p>Je m’en vais, moi, vers les instants écarlates<br/>de l’abîme obscur.<br/></p>",
		stropheGr:"<p>Πηγαίνω για τις άλυκες στιγμές<br/>που συναντούμε στο σκοτεινό βυθό.</p>"

	},
	{
		idPoeme:5,
		idStrophe:1,
		titre:"J’ai la nostalgie… ⎠",
		titreGr:"⎝ Νοστάλγησα…",
		strophe:"<p>… du dernier reflet, oblique,<br/>sur la neige violette qui brille.</p>",
		stropheGr:"<p>… την τελευταία αναλαμπή, πλάγια,<br/>στο μενεξεδί, αυτόφωτο χιόνι.</p>"

	},
	{
		idPoeme:5,
		idStrophe:2,
		strophe:"<p>J’ai la nostalgie des espoirs forts<br/>et du temps qui ne regrette<br/>rien.</p>",
		stropheGr:"<p>Nοστάλγησα τη δύναμη της ελπίδας<br/>και τον καιρό που για τίποτε δεν<br/>μετανιώνει.</p>"

	},
	{
		idPoeme:6,
		idStrophe:1,
		titre:"Acherusia ⎠",
		titreGr:"⎝ Αχερουσία",
		strophe:"<p>Pourquoi pensent-ils autant à nous, les morts,<br/>Et pourquoi pensons-nous tant aux morts ?<br/>Nous comptons les jours en prêtant l’oreille<br>à la fin qui approche.</p>",
		stropheGr:"<p>Πώς και μας μελετάνε τόσο οι νεκροί<br/>και βγήκαν να λιαστούν πάνω στο χιόνι;<br/>Πώς έτσι μελετάμε τόσο τους νεκρούς;<br/>Mετράμε μέρες κι αφουγκραζόμαστε<br/>το τέλος που σιμώνει.</p>"

	},
	{
		idPoeme:6,
		idStrophe:2,
		strophe:"<p>Pourquoi réclament-ils toujours plus, les morts ?<br/>Ils engendrent de nouveaux délais<br/>sur ce qui semblait à jamais reporté :<br/>serait-ce la peur qui enfante<br/>chacun de nos désirs ?</p>",
		stropheGr:"<p>Πώς όλο κάτι ακόμη μας γυρεύουν<br/>οι νεκροί; Kάτι πούχε παντοτινά<br/>αναβληθεί και πάλι προσμονή γεννά:<br/>μην είν’ ο φόβος, που κάθε μας λαχτάρα<br/>εγκυμονεί;</p>"
	},
	{
		idPoeme:6,
		idStrophe:3,
		strophe:"<p>Qu’il est difficile de franchir,<br>la ligne imperceptible et ténue<br/>qui nous sépare des voix des vivants,<br/>et comme elles l’appellent de leurs voeux,<br/>le poids des morts qui les tire…</p>",
		stropheGr:"<p>Δύσκολα κανείς διαβαίνει τη λεπτή,<br/>αδιόρατη γραμμή που μας χωρίζει<br/>απ’ τις φωνές των ζωντανών και πώς ποθούν<br/>το βάρος των νεκρών που τους ξεσέρνει…<br/>Aπό τη μια στην άλλην</p>"
	},
	{
		idPoeme:6,
		idStrophe:4,
		strophe:"<p>D’une rive à l’autre, à contre-courant,<br/>ils échouent dans le fleuve du Léthé ;<br/>vol des papillons violets, ivresse,<br/>chant des rossignols. Qu’elle est ténue<br/>la ligne quand s’évente<br><br/>la renaissance des peines dissimulées.</p>",
		stropheGr:"<p>όχθη ποταμός λήθης κόντρα ρέμα·<br/>χοροπηδούν μαβιές φαρφάλες, μέθη,<br/>κελάηδισμα των αηδονιών. Τι λεπτή<br/>είν’ η γραμμή σαν ξεθυμαίνει ανάσταση<br/>κρυφών καημών.</p>"

	},
	{
		idPoeme:7,
		idStrophe:1,
		titre:"Aspalathe ⎠",
		titreGr:"⎝ Ασπάλαθος",
		strophe:"<p>Prépare-toi à voler bas dans le brouillard ;<br/>là où méditent les âmes, où elles tâtent les traces,<br/>se figurent les scènes de la vie, calculent les rouages<br/>de l’infini. Ne demande pas…</p>",
		stropheGr:"<p>Eτοιμάσου για πτήσεις χαμηλές μες στην ομίχλη·<br/>εκεί όπου στοχάζονται οι ψυχές· όπου τα ίχνη<br/>ψηλαφούν, αναθυμούνται τις σκηνές του βίου και<br/>προσμετρούν τα κίνητρα του απείρου. Μη ρωτήσεις…<br/></p>"

	},
	{
		idPoeme:7,
		idStrophe:2,
		strophe:"<p>… si en sortant des nues elles conservent l’énergie,<br/>si elles interviennent dans les plans du destin, compensent<br/>peines de l’existence, erreurs de songes et d’actions.<br/>Passe doucement, les feux éteints, au ralenti,</p>",
		stropheGr:"<p>… αν διατηρούν ενέργεια καθώς βγαίνουν απ’ τα νέφη,<br/>αν παρεμβαίνουν στα σχέδια του πεπρωμένου. Αν<br/>συμψηφίζουν άλγη της ζωής, σφάλματα πράξεων<br/>κι ονείρων. Να περάσεις σιγά, με τα φώτα σβηστά,</p>"
	},
	{
		idPoeme:7,
		idStrophe:3,
		strophe:"<p>ne trouble pas leur réflexion ; la moindre fissure<br/>menace leur ouvrage réparateur. Garde à l’esprit<br/>le relief des monuments et des monts.<br/>Mais n’hésite pas de passer, qu’elles te sentent.</p>",
		stropheGr:"<p>ραλαντί. Μ’ ανάγλυφο στο νου το χάρτη ορέων,<br/>μνημείων, μην ταράξεις το διαλογισμό των ψυχών:<br/>μια ανεπαίσθητη ρωγμή απειλεί το έργο τους<br/>το διορθωτικό. Να περάσεις όμως από εκεί,</p>"

	},
	{
		idPoeme:7,
		idStrophe:4,
		strophe:"<p>Ton vol balise leurs ténèbres. N’aie pas peur ;<br/>tout ce qui est blanc n’est pas sommet.<br/>Ce sont peut-être des carrières, des salins.<br/>Et au-dessus de la côte dentelée de Split,</p>",
		stropheGr:"<p>να σε νιώθουν. Τα ερέβη τους η δική σου πτήση<br/>σηματοδοτεί. Και μη φοβηθείς· κάθε τι λευκό<br/>δεν είναι κορυφή. Eίναι ίσως λατομεία, αλυκές.</br/>Kαι πάνω από την κεντημένη την ακτή του Σπλιτ,</p>"

	},
	{
		idPoeme:7,
		idStrophe:5,
		strophe:"<p>où un cétacé géant barre une mer fermée,<br/>son ventre grand ouvert expose les monstres<br/>qu’il a avalés, et le sang noir pollue la côte,<br/>n’aie pas peur ; tiens bien le timon dans la brume ;</p>",
		stropheGr:"<p>όπου γιγάντιο κήτος φράζει θάλασσα κλειστή<br/>κι η ορθάνοιχτη κοιλιά του προβάλλει τα τέρατα<br/>που έχει καταπιεί και σκούρο αίμα μολύνει<br/>την ακτή, μη φοβηθείς· τιμόνι γερά να κρατάς,</p>"

	},
	{
		idPoeme:7,
		idStrophe:6,
		strophe:"<p>fixe la lumière d’un regard intérieur ;<br/>et prononce à cet instant précis ta malédiction :<br/>que soient engloutis dans leur propre salive<br/>les usurpateurs de gloires étrangères ;</p>",
		stropheGr:"<p>στην αχλύ· εστίασε το βλέμμα νοερά στο φως<br/>και τη στιγμή εκείνη ακριβώς, να καταραστείς:<br/>μέσα στο ίδιο τους το σάλιο να καταποντιστούν<br/>όσοι δολίως ξένη δόξα αποκτούν· φολίδες</p>"

	},
		{
		idPoeme:7,
		idStrophe:7,
		strophe:"<p>que des squames gravent la peau de qui a nui<br/>sans raison ; que ceux qui ont lésé soient punis.<br/>Mais épargne les innocents. Concentre-toi :<br/>parfois l’instant dure et, le temps de traverser,</p>",
		stropheGr:"<p>να φυτρώσουνε σκληρές στο δέρμα όσων βλάψαν<br/>αναιτίως· κι όσοι αδίκησαν, να τιμωρηθούν.<br/>Να εξαιρέσεις όμως τους αθώους. Συγκεντρώσου:<br/>κάποτε μια στιγμή διαρκεί κι ωσότου να διαβείς</p>"

	},
	{
		idPoeme:7,
		idStrophe:8,
		strophe:"<p>les clones de l’infamie se multiplient.<br/>Plein pot vers le soleil, alors, mémoire<br/>de nourrisson, peau de serpent, génie de papillon :<br/>ton circuit des mers unit les continents.</p>",
		stropheGr:"<p>πολλαπλασιάζονται της ατιμίας οι κλώνοι.<br/>Έπειτα πάρε ύψος και πάνω από τα νέφη,<br/>μηχανές φουλ στον ήλιο, με μνήμη νηπίου, με νου<br/>πεταλούδας, με δέρμα φιδιού, κάνε το γύρο<br/>του ωκεανού, τις στεριές να ενώσεις.</p>"

	},
	{
		idPoeme:8,
		idStrophe:1,
		titre:"Il y a de la sérénité… ⎠",
		titreGr:"⎝ Υπάρχει γαλήνη...",
		strophe:"<p>… dans ces nues<br/>quand elles s’ouvrent brusquement au soleil aveuglant<br/>qui va se coucher</p>",
		stropheGr:"<p>… σ’ αυτά τα νέφη<br/>καθώς ανοίγουν ξαφνικά στον ήλιο,<br/>τον εκτυφλωτικό, που πάει να δύσει</p>"

	},
	{
		idPoeme:8,
		idStrophe:2,
		strophe:"<p>et puis lourdes s’amoncellent de nouveau<br/>en s’approchant grises, menaçantes,<br/>avec le vent ?</p>",
		stropheGr:"<p>κι ύστερα πάλι σωριάζονται βαριά,<br/>γίνονται γκρίζα και απειλητικά,<br/>καθώς με τον άνεμο πλησιάζουν;</p>"

	},
	{
		idPoeme:8,
		idStrophe:3,
		strophe:"<p>Il y a de la sérénité dans cette mer<br/>qui rit quand elle t’emporte et te perd,<br/>qui te touche en pleurant ? Vraiment ?</p>",
		stropheGr:"<p>Yπάρχει γαλήνη σ’ αυτή τη θάλασσα,<br/>που όταν γελά σε παίρνει να χάνεσαι<br/>και κλαίει όταν σ’ ακουμπά; Yπάρχει;</p>"

	},
	{
		idPoeme:8,
		idStrophe:4,
		strophe:"<p>Et pourquoi vouloir la sérénité<br/>quand soudain les nues s’embrasent<br/>et commence le coucher du soleil,</p>",
		stropheGr:"<p>Kαι γιατί να θέλεις τη γαλήνη,<br/>σαν άξαφνα τα σύννεφα φλέγονται<br/>και δραματική, σπαρακτική δύση</p>"

	},
		{
		idPoeme:8,
		idStrophe:5,
		strophe:"<p>dramatique, déchirant ? Le silence<br/>succède à l’épuisement. L’épuisement<br/>vient toujours après le combat,</p>",
		stropheGr:"<p>του ήλιου αρχινά; Σιγή ακολουθεί<br/>την εξάντληση. Και η εξάντληση<br/>έρχεται πάντα ύστερα από τη μάχη,</p>"

	},
		{
		idPoeme:8,
		idStrophe:6,
		strophe:"<p>rassemblant des corps démembrés,<br/>des trésors pillés, essuyant<br/>le sang sur le pont.</p>",
		stropheGr:"<p>μαζεύοντας διαμελισμένα κορμιά,<br/>συλλημένους θησαυρούς, σφογγίζοντας<br/>τα αίματα πάνω στο κατάστρωμα.</p>"

	},
		{
		idPoeme:8,
		idStrophe:7,
		strophe:"<p>Le capitaine est alors général.<br/>Il juge les traîtres et impose le silence.</p>",
		stropheGr:"<p>Ο καπετάνιος τότε είναι στρατηγός.<br/>Κρίνει τους προδότες κι επιβάλλει σιωπή.<br/>Γι’ αυτό φοβάμαι τη γαλήνη: είναι</p>"

	},
		{
		idPoeme:8,
		idStrophe:8,
		strophe:"<p>Voilà pourquoi j’ai peur de la sérénité :<br/>c’est l’heure du châtiment.</p>",
		stropheGr:"<p>ώρα τιμωρίας.</p>"

	},
		{
		idPoeme:9,
		idStrophe:1,
		titre:"Barcarolle ⎠",
		titreGr:"⎝ Βαρκαρόλα",

	},
		{
		idPoeme:10,
		idStrophe:1,
		titre:"Les migrateurs ⎠",
		titreGr:"⎝ Τ’ αποδημητικά",
		strophe:"<p>Les revoici, les oiseaux migrateurs qui chantent.<br/>Qu’ont-ils encore inventé pour affoler les branches<br/>et se faire entendre jusqu’à l’autre côté du boulevard<br/>sans répit ?</p>",
		stropheGr:"<p>Να πάλι τραγουδούν τ’ αποδημητικά πουλιά.<br/>Ποιος ξέρει τι σκαρώνουν και τρελλαίνουν τα κλαδιά·<br/>κι ακούγονται ως την άλλη πλευρά της λεωφόρου<br/>ασταμάτητα.</p>"

	},
	{
		idPoeme:10,
		idStrophe:2,
		strophe:"<p>Le revoilà, inquiet, le crépuscule de l’automne.<br/>Certains frappent le poing sur le fer, d’autres mènent<br/>un rude combat contre l’usure, se tourmentent<br/>et attendent.</p>",
		stropheGr:"<p>Να πάλι, ανήσυχο δειλινό φθινοπώρου.<br/>Κάποιοι πάνω στο σίδερο χτυπάνε τη γροθιά,<br/>κάποιοι παλεύουνε σκληρά με τη φθορά, ανησυχούν<br/>και περιμένουν.</p>"

	}
	,
	{
		idPoeme:10,
		idStrophe:3,
		strophe:"<p>Ils sont intransigeants, les migrateurs. Et nul ne sait<br/>ce qu’ils trament. Aujourd’hui, la lumière peine<br/>à toucher les galets. S’élève la nostalgie<br/>du sable tiède.</p>",
		stropheGr:"<p>Πάντα είν’ έτσι απόλυτα τ’ αποδημητικά.<br/>Kανείς δεν ξέρει τι σκαρώνουν. Δύσκολα τώρα<br/>το φως πάνω στα βότσαλα ακουμπά. Νοσταλγία<br/>χτίζεται της χλιαρής της άμμου.Tα λιοπύρια</p>"

	}
	,
	{
		idPoeme:10,
		idStrophe:4,
		strophe:"<p>Les fortes chaleurs ont facilement glissé<br/>sur les corps en sueur ; et j’ai de nouveau déposé doucement<br/>un voeu oublié déjà, un voeu sur les galets du sable.</p>",
		stropheGr:"<p>ξετυλίχτηκαν γοργά στα ιδρωμένα τα κορμιά<br/>κι άφησα πάλι την ευχή στα σιγαλά,<br/>λησμονημένη κιόλας,<br/>ευχή πάνω στα βότσαλα της άμμου.</p>"

	}
	,
	{
		idPoeme:11,
		idStrophe:1,
		titre:"Retour ⎠",
		titreGr:"⎝ Επιστροφή",
		strophe:"<p>Là où l’homme<br/>n’est qu’une ombre<br/>et la lune une lumière,<br/>quand la forteresse se perd<br/>dans le brouillard des eaux,<br/>reconvertis le serpent en or<br/>jusqu’à ce que le bateau rallie<br/>la géométrie de notre destin.</p>",
		stropheGr:"<p>Eκεί όπου ο άνθρωπος<br/>και το φεγγάρι ένα φως,<br/>όταν το φρούριο χάνεται<br/>στων υδάτων την ομίχλη,<br/>κάνε πάλι το φίδι χρυσάφι,<br/>ώσπου να δέσει το καράβι<br/>στη γεωμετρία της μοίρας μας.</p>"

	}
	,
	{
		idPoeme:11,
		idStrophe:2,
		strophe:"<p>À l’azimut des statues<br/>et des anges emmenez-moi,<br/>créatures de saintes volontés.<br/>Le premier astre qui rit<br/>sur le clocher rose mesure<br/>le temps sur les mers<br/>et par l’ombre le poisson est pris.<br/>Là où l’homme</p>",
		stropheGr:"<p>Στο αζιμούθιο των αγαλμάτων<br/>και των αγγέλων με οδηγείτε,<br/>πλάσματα βουλήσεων Aγίων.<br/>Tο πρώτο αστέρι που γελά<br/>στο ρόδινο καμπαναριό μετρά<br/>το χρόνο πάνω στα πέλαγα<br/>και πιάνετ’ από τη σκιά το ψάρι.<br/>Eκεί όπου ο άνθρωπος</p>"

	}
	,
	{
		idPoeme:11,
		idStrophe:3,
		strophe:"<p>n’est qu’ombre sur le rocher<br/>et la lune lumière qui scintille,<br/>là où nage le poisson<br/>et la mer étend un coucher<br/>de velours dans le brouillard de l’hiver,<br/>fais ton miracle, saint patron,<br/>amarre à la forteresse doucement<br/>le bateau éprouvé.</p>",
		stropheGr:"<p>είναι μοναχά σκιά στο βράχο και<br/>το φεγγάρι, φως που τρεμοπαίζει,<br/>εκεί που κολυμπά το ψάρι<br/>κι η θάλασσα απλώνει δειλινό<br/>βελούδο στη χειμωνιάτικη ομίχλη,<br/>Άγιε μου κάνε το θαύμα σου,<br/>στο φρούριο ν’ αράξει σιγαλά<br/>το πολύπαθο καράβι.</p>"

	}
	];
var explication=[
	{
		idExplication:1,
		explication:"<p>La poésie occupe une place centrale dans la vie et l’oeuvre de l’écrivaine et universitaire grecque Maria Tsoutsoura, née à Athènes en 1959. Mais si elle pratique le vers au quotidien, elle ne publie sa poésie qu’avec parcimonie.</p>"
	},
	{
		idExplication:2,
		explication:"<p>Le Grand Voyage (2015), dont le présent ouvrage constitue la première édition,est son second recueil, journal de bord d’une quête intellectuelle et artistique, intime et sociale dans un demi-siècle grec trouble et ambigu. Le lyrisme dramatique à l’oeuvre dans son premier recueil, Les 4 saisons (2000), qui traite « des dilemmes du corps et des passions de l’esprit », laisse place ici à une méditation sur l’être face au temps, qui adopte parfois des tonalités élégiaques.</p>"
	},
	{
		idExplication:3,
		explication:"<p>L’architecture du recueil rappelle la composition musicale ; chaque pièce constitue un poème autonome, mais l'ensemble est structuré par des motifs dont la signification et l’effet varient d’un poème à l’autre.</p>"
	},
	{
		idExplication:4,
		explication:"<p>Les Strophades mentionnées dans « Le bateau » sont un archipel de deux îlots au sud de Zante : l’un abrite un monastère gardé par un ermite ; l’autre, l’inhabité Harpie, est le lieu évoqué par Homère et Virgile, Dante et Rabelais, où la mythologie situe les divinités mi-femmes mi-oiseaux de la vengeance divine. Connues pour la beauté de leur parc naturel, passage des oiseaux migrateurs, elles sont à la fois prisées par les yachts en villégiature et les amateurs de plongée et redoutées par les navigateurs.</p>"
	},
	{
		idExplication:5,
		explication:"<p>Le poème fait en outre référence aux légendes qui relient l’histoire de leurs icônes aux mers grecques : conservée aujourd’hui à Zante, la Panagia Thalassomaque (Notre-Dame qui lutte contre la mer) aurait gagné les Strophades depuis Constantinople en naviguant seule sur les flots pour fuir l’iconomachie ; la Panagia Pantochara (Notre-Dame Liesse de l’univers) aurait été dérobée et vendue à Patmos, île de l’Apocalypse.</p>"
	}	
	];
var photo=[
	{
		idPhoto:1,
		file:"acropole.jpg",
		key:"athenes"
	},
	{
		idPhoto:2,
		file:"josef-maria-eder-serpent.jpg",
		key:"serpent"
	},
	{
		idPhoto:3,
		file:"matthias-muller-upright-piano.jpg",
		key:"piano"
	},
	{
		idPhoto:4,
		file:"turner.jpg",
		key:"turner"
	},
	{
		idPhoto:5,
		file:"paul-k-cetace.jpg",
		key:"cétacé"
	},
	{
		idPhoto:6,
		file:"o-sullivan-desert.jpg",
		key:"désert"
	},
	{
		idPhoto:7,
		file:"bdavies-waves.jpg",
		key:"vague"
	},
	{
		idPhoto:8,
		file:"whisthler-barque.jpg",
		key:"barque"
	},
	{
		idPhoto:9,
		file:"john-thomson-port.jpg",
		key:"port"
	},
	{
		idPhoto:10,
		file:"harpy-Aldrovandi.jpg",
		key:"harpie"
	},
	{
		idPhoto:11,
		file:"pierre-paul-albert-bernard-etreinte.jpg",
		key:"étreinte"
	},
	{
		idPhoto:12,
		file:"pierre-paul-albert-bernard-mort.jpg",
		key:"crâne"
	},
	{
		idPhoto:13,
		file:"constable-clouds.jpg",
		key:"nuage"
	},
	{
		idPhoto:14,
		file:"migrateurs.gif",
		key:"migrateurs"
	}
	];
var video=[
	{
		idVideo:1,
		file:"maria_pourquoi",
	},
	{
		idVideo:2,
		file:"maria_sens",
	},
	{
		idVideo:3,
		file:"stephane_architecture",
	},
	{
		idVideo:4,
		file:"stephane_livre",
	},
	{
		idVideo:5,
		file:"retour",
	},
	{
		idVideo:6,
		file:"migrateurs",
	}					
];
var audio=[
	{
		idAudio:1,
		file:"dense",
	},
	{
		idAudio:2,
		file:"nostalgie",
	},
	{
		idAudio:3,
		file:"barcarolles",
	}
];	
app.filter('filterStrophe', function () {  
    return function(inputs,filterValues) {
      var output = [];
      angular.forEach(inputs, function (input) {
        if (filterValues.indexOf(input.idStrophe) !== -1)
            output.push(input);
       });
       return output;
   };
});

app.directive("grandTitre",function(){
	return{
		restrict:"EA",
		template:"<header></header>"
	}
});


var MainController = function(){
	this.poesie=poeme;
	this.photo=photo;
	this.video=video;
	this.explication=explication;
	this.audio=audio;
}

app.config(['$routeProvider','deviceTypeProvider',
   function($routeProvider,deviceTypeProvider) {
     	var deviceTypeProvider = deviceTypeProvider.$get(),
         deviceType = deviceTypeProvider.getDeviceType();
    	 /*Route to Desktop view*/
    	 $routeProvider
    	.when('/',{
            templateUrl:   'view/'+deviceType+'/profileTemplate.html',
            controller: 'MainController',
            styleType:deviceType
        })
    	.when("/credits", {
    		templateUrl:   'view/'+deviceType+'/credits.html',
            controller: 'MainController',
            styleType:deviceType
    })
    	.when("/mentions", {
        	templateUrl:   'view/'+deviceType+'/mentions.html',
            controller: 'MainController',
            styleType:deviceType
    });
  }]);


app.controller("MainController",[MainController]);
}());