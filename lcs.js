timeMeasure = (startFunctionTime) => (Date.now() - startFunctionTime);


// longest common subsuquence
lcs_brute_force = (str1, str2) => {
    for(let i=str1.length-1; i>0; i--) {

        for (let j=0; j <= str1.length - i; j++) {
        	let tmp_str = str1.substr(j, i);
        	
            if (str2.includes(tmp_str)) {
                return {i, str: tmp_str};
            }
            
        }
    }

}

let start = Date.now(), 
dna1 = `gggacgcagtgtgacttagtgatctcggacgggattttttttgatgtgtcgtgtggcgtt
ggcgtgagtatctggatagttcagactgagcattatcgtatcacgttttagtcatcagca
cgactaaaaacgggaatctgaatccagaaacgagacagctcacgtgctatttactagctg
ctatttgtgggataggataactagtgagtattgactcaaggagtatattgcttggcatat
gcagtacgcgatgcgactcttactggttacgcgggagcgccataggaggtctgaaagtaa
ctagaatatctaagaacaacggaagtagtaccgaaataagaacccatagacgctgttatt
cagtataacgacctgcaaccggatcgtgctctgtgtccaaactagattcctctgcacggt
aactacggtaagctcaacgttattataggctgggccttgttcgtcttctagcagtttggc
ctgtccacacggcattataatggataggttataaggacagagaaaggcacaggctggtcc
cgacgatgctagtagtgatattctttggtaattctttttggaatttagcgtgcgggttgt
gttcgcgtcggcgttgaaggcacgcacaacgcgggcatagcataagacctaactctcgca
gtgggaggatccgaagcacggagaaaggcgttagcctgtgcatgttgtacctcatcttgt
cgactccgtctaaccactattgagccgacgtgctgacgtgacaagttttcgaacggaaga
cttgctctctcatgtagaacttaaccgggtaactcgcaacgtgcatggtatggtttcgta
cgaaccaacgcctcatccgagtagcgcggaatatgtactaaaacgtctcctgcgttaaat
catcgtacccggatgcactgcgtaatcctccttaacggtttccagaaggatgcacgataa
catattggaacggcggagccgcagttgccagaattatcggcattacggtcaaaaaccagt
ttagccttgattctgcccattattcaaggaccctttttattgtagccagcaccaatggta
tcccccgggactgtacaatgcgacataaccgcaccgccgtatgtctactgttataggact
ccaggagctgcgaagactcaagcagccgtctagaggtttacttcaaatcctcccacgaaa
agctcgtatttatgattcaagtgcaaatttttggatgggacgagttcactgagaggatgt
gcatgtacgggccttgcaaatccccgagcccaaaatagccagttatataaaccgtaacgc
cgtaacatcacgcaccttgcactgttagcacagggttataaggtttagccccccgtgtca
acgcaacgcagcagacaaactattccatatcacaatgttatcacaatctttgcgctggag
gacgtcacgcaagaatgatctcttgtcctgtgccttaaacaagcgcctgtcactggtcat
cgtcaaatatatcatcggactaaggggaacaccagaaacacggaggcgcctccttgtggg
gttcagcgtgcgactgttctactgtaatcgctaaacaacatggctagaacaatagcctcc
aatcaaccttgtgctattttgcattggacagcaccctaaaaatcgcttctagcgagcacg
taggaagcggtcgccttctgcttatgacaaattgagatcgtaggggtaagaagagattaa
gtgttgcttcgacacattcgggcggaaccacgcgttgcgatctgccaggcctagttctct
cagcatcccaatgacaaggccaacgtatgctgtaggtactagaccccttacaggtaccaa
ctgaattttgccggccacaatgtcgcgtagtatcgtctccgtccatattaaacttaaaca
ggacgtgacttctgtctagagttagtcgcccaatacttattgagccaggacatcaagaat
gtcctgatgttaatctgatattacctagtagcacaaagtaatcggtgggtcggaatatcg
ccgtgacttgttagatttgccataggttttcgtgctacgttggattcatattccagttta
cataagcgaaacgtgatttgggctggtaaccgtactcggcactggtttacattgacggtc
ccctcgctatgggcatcttatatatatcgcaggtggcaagctcttgttgctcaaaaacct
attgaaattcaaaacacaagcccacggcgggtcacctgcaaaactgtatcggggcagcga
ggtcgatgcgagtggtgccaggttgcgcgatttcgcacaaggtatgttttactcgactct
ggggttacggattaggccaaccgaccgaataaccacctgtgcagagtgtgtcgtagctgt
tcatcatattcggtccacctgctatgcaccgttcccgtgtcatgatatgacacccacgcc
ccacacaagaaagactcgataacgttaacggggtgagattgtctctgatgtaacgagttt
ggtactttataatgtgtgacttatgttcgtgccaaacgtagggctccacatctcgacctt
gcgttggcttgatcaaaatctctttttcgctgtttgagtgatcctcctacgatccgcgta
ggcatcgtggactcaggtctgtcaaccttattcttggatctctaaagtacttggttgtac
aagtcctataatgtcgcgcttcaggatctaaatgattggggtgcgaattattttccccgt
atcttccttagtatgcggtatactttgaagtcctagcagcgcgctgccgacgggtggggt
gtgtcttcgttcatcaagtctgttccgccgcaccaacatcacttaccatggccttttagc
tgagtgtgatgcggggaccgtcgacggcaagcaccaggcaatctgcattttaaagaactc
ggaacctctttggacagccgcgagccccctagcaggtattttatcttcccgccgttggag
acacgaagttagtaggtaatgtttaccaggcacctaagtattgggcaaatgcgtgaaagt
ataggtattacctgtccacgcaacgctgttttgtatggaatgatcatgccttggtacggt
atatctacgtgtgcaattaaatcggggcggtcgagcctatatttaacgttacccttagac
aggattaatgtgaaccttcgtcggctccgcatctagatcgtattattagtgaagagcttt
caagtgaagcccttccgcgtatacgaaatggattataaaacggcgtatcgatagagcctc
gctatataccacagggtgggtatgagcggaatccagcccttgaaagtggagcccgtcgcg
gagccgaatccgagcgagcatttacacggcgagggtctcccgtcccgtaccgactaatct
gttttcagggaagctattgtatgtccgttgaataccgaggatgccggagatccggtgggc
ttagcgactccgtggttcaccgacgtttggcgaattgtctagcatgctgcagcgcttgtg
aaaggagtgcacttacgatacgagtgtgaaaagtcacattgagagggtagattgctacca
ggtaaagaggttcacaaagagggcacagaaaattaattgagaatcccttctgcaggtaac
gcggatcctagtgggggatatagaacagcataagtttatcttctagcttacaaagtggct
tcagtctatagttctgtacaaaatactctagcgccgcatagcgagcaggtcctgacaggg
tagatggatccaattacatagtcgcactcggcaacctaacaaaggacagacagggtgttt
ggtaaccagcggctgtatggataaccctgggcgtcaacctgatcctgtcgcttgggaggg
tggtagacttactgtttgagcgtctctggcccactatctgcaggatgatatgttgtatag
tcctcccgtggaccacgaacctatatttagtcgtagtcaccttaatagtatcccttaaaa
ttgcttggtaattcgaaggcgctgctccctcacggcgggtataaaaagtggacggatcct
ccaacggcccgcgagacctaatgcgtttagtcttagctgtacgagcaggctctcactcag
ctaaaacttggcccatcgtacggatccggaaatccattctcctgccttgatacatccacc
gcactgtacgcgccggaatcagagacgcatgtatcagaagtgcctgattgtgtcgcaccg
ggcttatcgctgtagggtcattaaggatcgcttgtagtggtcaatcgaaacgtagtaata
actcaatttgaatcacttataaccatgtccctcatgttttaatatctccctccctatcga
tatcagtttgcacttccgggtccgattttcttacattagttggcatacgctcgacaggcg
ccgagtaaaaatcgcacggacgtagccgataccctgtctggaaaccacactattaaatct
tgatatacaagcaagggcctcgctactaagcacgtttaacaggttcgaacctcccctgcg
gtatcttgcggaacgcagctagacagactacctagttaaaatcggaagtgaacacacggt
tcgctggtaggagaagagcaacattacctctacagccctgtatctacgaagctgttcata
agagacaagtgaggtatgtacgttgtgtggtcaatttcatgtcattacgaaaactcggcc
tcgatagcacgctgattgacgtctttgatgttaatgaatgtgtacgaccatagcgtctct
gcgctagctcagctcaagtaagcccctgatgggacagaaatgtaccgagtgccagcaaaa
ccaggcagctcccccaaggtcttgcctatggtaagagtccactaaacgccgttgggggcg
ttccacacgtctactgcgtgtcagcgtgccgacttctcctgggtgaataccggattttac
aggatggacgaacccggctacatggctggacagccactgctttacagattattgtaagcg
ttatactggattggtccggggaccgtctatgagcagactgctgttgcccttcgtttcagc
caataagatgcctaatccatcttctgtgaccagtgcaccgcaacgctatttaacgtattt
agcccttccgcggtctgggggggtgacggtctgagctggacagctaagcgaggagcactc
cgggtgccaccacgcgaggagagcatacagagagttaccgatattctcatagaattacgg
cgccagaccatcgccagcgtatttcacgattactggcctaacgtatttgccaaatcccgc
ttaagccgacggaccaagggaattttccgcgagtcgaaccgggacatgagctacgtggtg
taacgcaaggctgatggttctcagaacggccaagacgccgatactttaaaacctcaaagg
ttattatagtggaactattcaagcgaatacaatatgtccccatacgacgtggaacattcg
ctcatagccaacccaggtcgcttgcttttaaagtgcctaccggtccgagcgacactaagc
tgcatggatcgatggccaactgatcaaatacggattgaggtgctatgcccttttcagcag
ttgacacgtcaatcttcctccatagaggtcgagcggtgaactgttaagcaatcgagagtc
acaagttttcatcatatatatatggcggctgcttaagtgggggggacctcttgtgtagtg
cggtggctgcccattgaaagagtccgctacaggaagattgtccgattagggtaggaggac
gggagtgagtaaaattttagggtccgtctagcgaccaacaactctgggggcctccttgcc
gcagtgtgagtgaggaggcgtctcactgtgaggagtttacggattctaatacacctgatg
accgcaccacgccggatctgcgcttacgaccaactcagccaaggccgtctcagcacacac
gcttcccactactgggttacatgagcgctatatcccacgtactgccccctccgagaagcg
ttcaccatttacgagtaagaacgtcttcccttacgtacgtgtcagtgcgaacttacgcga
tatccccagacgctgcaaggccacagtcaggatgatagaatcatatacgagacaacctgg
cctccgcccacggatcgccgaggaggaaaagagatatctcacaagttcctacgctcagtc
taccaatcagtataggatccacggcttcagaagactggctcgttgaacggtacggtaaca
gtggcaggggcattgacccgtcgcgaagatatatactcattacaccgtggtacggaagat
ttggtctgatgccggtgcggggcccccgtctgactaatatcggtgcgcttccatgtaatc
cgtgaaactgttcgctgtatacatcaaccgcgtacctaaattgatgttttcttgagctac
ctgccgcttcaatctcgctgttacgatctcgtggagtacggtctccctgtatgacccaac
gatcttttttagtgccaaggagggcccgtgtgtggtcactcttgactaagaagtctgcgc
gatatccagtttctatggagatgctgataccgtacgatctctgtcgaaacaaatcagtta
attaaagaggaactcaatctcaagctccagcgtcatcattttcctcgcagtctggtgagt
tccggcgtagaaggagatatagaagccaggcggtcattcatattggcgccggccacagtt
aaagcaattcttacttttgcatcctctacgcacattgactctcccggcctaatgtatcgg
ggaacaattgaggcgatttggcgtcaattaatgaatcattgggtaagtgacacgatcaac
gaacgtttagtggatcacgcatatctggttgcgtctggcgtccctggcggcttctatatg
tataagtatggtcacttggctatggacatagcgccagccgacgctctaaaaatggacacg
tgaagaaaggcgcgtctcgtcccgtgtaactggcccaacatttcttcctggccgcacagg
agcttcgatggattctcctttgggtgggatcctgtggagcccaccactccagccgtggca
ccatctatccggaggcgatcgctctctaggtacaatgcagtctaaacgcgattatgtcgc
accctaaccgaggtggttccgcgggattagtgtaataaccatggaccgaggctccagtac
accttccgtctccgcgccggaatagggtacccattgggggcgtatcaatacacctggctg
ggtatccatgagtcatcagtatgacaatcaccaagaggacgaagagttcttatatgttaa
actgggaatccgtgccgacgctagcaccaaaataaaaagcttgtgcttacatgggtcggc
agctgctattggttacggctagcgctgtacatatttgctaacgtacacgggtccgatacg
tcgtgctttctagtcacgatttacgacggaatctgagtagagaggcacgcgcaacaagga
cataggtcgcccttgtacttacgctagggaagacccacgtataactgattcactagtcat
catcaaaaataacgtcgggctctatcaaagtacatccagtgctgaatatctaaggaccca
gatgcccacttctctcaacaacgagcgttagtttgtaacccaggttccatctctgagcat
tgaatgctcgaagaaaggtcaggcaggattagttgcgtttagctgaaagggaagtagacc
aggggtggggtatggtcagcgatcctgattattccatgatagttgtagtaatgtgaaata
cggttcacattgtagactcgactgaatatatcatcccggtacattgaatggctgacggga
gcccggatgttttaggtgccggtcagctcagtatttgccgagcacatagtgggtataact
tgatatacgctctaacgcctagagttttgctatactaacgtcctcaagtgacgtgtataa
gcatagctttctgcatactcccggtctcagaatgtcaggtcgggctcatttaacgaaagc
ggagtaatacggaggcaaccgtagtatgacctgggccacgaatcggtcttttacttagtt
attctgtatgtacaaagtatcagccctgccaccaatcataggccaggccctgccgctcgt
ttacgttcaccagccgtttgcatcttaatcagcagaaggggctgagtcattttagcggta
aatcccagcgatcgtataagtacaccggtggtgtttccatcgagaccaatttgctagctc
gtttgggttctctcagcactggtgacttggagtacccatagtacaccggcagacagcgcc
gtgtaaagtgggattagtcacgtaggtcattgcgggaaggtgcactttgcaagcaactgt
aatctgagtcgtctggaggtacactcaaatctcatcaaaatatagcgcggagtcgcgcaa
gggtacacacgcaattcccgccacacgaaaatactgtagactcattacagctgttcaatc
aaacgggttgagaaagtgctggtgtatccggactttaggtatgcaacgacttccgatgac
atgatagggcagcgcttggcgtaatccgcaaaggttttcacttaaattgctccaattgac
gagacacgattgtggtcctggaactcgtctcctgtgggaatcctgcttccaggagcgcga
tcatcacactccacgcgaacacaaggacatcttgccccacccctgctaacggctgagcag
agaacattgctcgaagaccgccgtataaatctacagtgatgatgtcttacagcgaagtac
aacgcctcggtgtggtatcaagagcgggaccttcccccgagtcaaggacgtgtgtgggtc
tttcctcagagcatgaccaatcgctagctccttcaaatacttacggcctgcttcaacctt
gccggcccacaaagtgcatccaatatgcaagctggcggagtatcggttatcagacccagc
tcgcgtagtagagagttctaggaaccgacatgaacgggctactgtggtgtgcttactggg
tcgaagtatgatgtgtttcgaatatcaagaaggggatgcgggtcgtaagactgtgaggct
gtgtcaacgaccatagaattggcgattataggtgctagagagcaagttacaaggtcaacc
acgagctatgcgcgcggtacgtaaaaaaccatctcccacaccacgttgtcagatttcccc
gtgttgtcgaatgaggtataccttggctacctcactttagttcgattagcaagatacaga
agtctggattggacgtgttcgtcagggcactgattaaattgtcattgggcgcaaacgtcg
ctgaggaatgtacacggatttcacgaactggacttattaaaataatgtacagacatggct
ctctgcctgcgccatcgtataaaaatcgtttgcctaaaaggatgctccgtatgtgcttgg
ggatgtcaccgttcaccccgtctcgccagaaacggaaaggaaagcctcgaatacgcgtaa
tgaagctgagcctagccactgcaatcagtatactctgtatctcgtaaactcaattccgtt
gccaaccccgcaacttctgagtatcagtaccatgaacgacggcgtatgaatttgacggaa
gctaacaggttggacgagatgttaagtatccattcgtcggatcgtgggggcgcttcgtta
ctgtccgggggttgtcctcctaactcgaccagtcctcacgcatgatggggatggagggag
agggtccttcttctacgaggaaggtcccgacagtggaaaactataatgcgttcgccacag
cagacaaggatacagccccaaggtttagatgtcaccgcttgttagctaacgatctattag
gcgttttccactgagcttgatcactcaatcgcctcaccca`,

dna2 = `ttattccgcaaactcatcttcttaattctattgcctcggaagggtcacaatcgcttatac
tggatggggaccgaaacgctaattcggcgccgagtgtgttaccggttattccactctgtg
tggtgcgtattatagacactggccagatgtagtgccaagaaggatctgtgcggtcgcagg
ctataggggacgcggagtcggtgcgaagtgtatagccggctcagcttaccaccgttaagt
aaagtaagttgccccctctgaaaactcgtctcacggaggggcccatactttgggagctaa
atagttaaggtcgggcgactcaagcgcggaagtcgggtaagcgactggtaatacgctccg
gtcaccctgtaaaccgtgttgtaccaagcacgacgtcggtggtctagctattcacccgga
taggcgatacggactacactcggttcggcctatcaagagcgtaaatggttcaagctagtt
ggcccactccatatcaactccaataaattaggttgtttcaaacacgcttaccaaatcctg
ttcaggcgaatccattctgtgtcgcatgacttccgccgggtgttgtccatagttcattga
aaggtgagtgagttgacgtgagatgactaaggcgtgctcatgtaattatattatacttct
cgcacaatttccatacccctattagatggcataacccggtgtcttttcatacgaatctga
ctggacatcaggcgataggggggcggaccggggtatatggagaggctctttcgagcaacc
cgcagtgggatcttgtaaagtgtcgtcatcgctcgcttcccaaagttttatggtacaacc
agcctaattcgctatcgaatcacactgcacagccactgtggcaatacgtgactagggcgt
ggacacctccctgcacttcaagcgtagagcccgcttggctgaaccccctacgggtcggat
acgaacatgggaagaccgtgcattgttatatgagcatcgttacgaatgtagcaagaatgc
gtagatgtgccggggcaactaacataccagccaggaattatcgactaggagatagcaatt
tttgcggcggcatcacgcttaagccattgactttaaagcattcccttgtaatctatagaa
ctgtgctcagcataggcgggagttaccgtcggtggacgtgcaaggaattgctatgaagca
gtgtggcccccccaatggcacatcttcctctacgtcgaggttccatcgcgatgaaagtct
gatcgacgtcaaggtcagatacgatcgctagaactctagtcccggtcaccgctacgcttt
gacctaaaatgttttctcgaactcaagggtcacggatactacctcgtttgagtaagtagt
gttgcggtacagctcttagcggtcctaggtgggatttctgccaagcgcatggcctccgaa
actgccaggcaatcacattacacatgatcagcctgtactcgatggctacgctcccgatcc
aaaccctagagaaatgggggcaggtctccgggtgtctgaacggttaagccgcttccccta
cgtaaaacgacacgatggggggcatgaataactagccaatgacaaggaaataacccccgg
aggttgaccccataaatgtgtacccgcgttcccagcctaaggtactccagcccaacacgt
tctttcatgcgggtattaccagatacgtatgggttcgtgatcacggaaccaagaaaccag
gcatgaaatgtcgacctacgagaaccaggcttgtatttggcattcgccgcaataattaga
gttcgctgaagggaccagtaatgtctcgcatgcgttaaaatttgtgccaagttagaaacc
aagtcttcaggcgatagcaggaaccatgctccgtgtcttgcgcacctaacggtataccgc
aataagatagcgggctaccaacgagtgattaaagtagaaggacataggaggggccctcaa
cgcatgcgtcgttaccttcgccgccataaggtaggctttagtcacttggtagctaatttt
aatcctgccaaccgagtgctaacccataggtatgatttgagaggacttacgactgacagc
agtcaatcgaccatctagaggcatgtacatgcttagattcgtaccttacccttgtgaaga
acacttacagtcgccccaaggttgcatacaatcgcgttaaggaatacaccttgtaacagt
aagaatctataaatggatactcgtaagttattttttatgtatcacacagtaggaccattc
acagtaaccaccgttgtttcccaccaagaagtagactattcggggacgtctagctaacgc
ttcccggcaggatcttgcactaactagagtttttgttttgtgacgcttgcccgggaaact
gacctctttgcttgggtttgaagtcctggaagccgcattaatagacgtcggcgatcggac
ggttcattaatttatctaatacacggcgcaagctgagcacggcctcgtcttttatagatt
ttcaagttcttatatacactgtccggtaaaactttattctatcgtacctagattgtctga
ccgacgcagtcactcctgtggcccgtcgatcggagctgcttaccctatgtgcgtcaggga
acaaccggccgagggtttccttgtctacggagcagtggctatgtgtttgccgactaggtt
taccttaagttcatgaccaaagcaggtaagcgaatctgccgagtgtgtggcagatggtta
ggtatccaggacgatacggagcattcgaattacttatcactctgccataaatgcgccgtt
ttggttccgacgtgaatcgtcaatgccaatgtcgcgccggatcaatgtaggatcacccta
ccgatcatatcaacgacgtagacgccaaccgcagcaactgaaagacgccaccaaggcagg
cgcgccggtttgaagggattctagcgactaggacggtacgagtaataagcgcggagaaga
cgggaagctgtggttttgacgccgactcagcatgcttcatcgagtacaatgtggacgccc
cgaggcacttgactactcagggattaatgctcgcttggaggaaattcgtgaagggcacta
gcaaacctaggttccttgtaaacatgacgggttagggcgaataaggggacacaccttatt
aggccggacagcctaacgtcggctatacttgatttcctcctgcgtgtccatgaatcagca
atgtttggccaagaccgccgctcaaggggattgctccaaaacgccagggagtgtaaggct
gaggttccactggcagtcttgcgcaccgtttctatcacatgcatactgcaggatgagaga
ataaaaacccgcagcgcaaccaggggctagtggtgataacctaaatgtatttgcatcttg
aacaatttataggaggtgcaatagaaactgccttgcagcagccactaactcagcgccaga
cagagaggcagatgctgatgctgttgcttaggctccttttgccgaatgtatcccccgatg
catagctgtatctgacctgtggtgagttcctcggaggtcaactggtcgatgccctaacgg
aaattgagaggcgcttcgtactttccttagcacgaccaaattactcttcaaagcacacgc
agtgaacataggtctgtaatatatggatcactagtgtgcaatccgcgtacctacctaacc
ttatcaaaccttttgtgaactatttgataggcatcataggcagtacaaaggtaccgcgtt
ctgtgtccatgagcaaccaaagcaatctctttagctacgtaacctccctcgtaagattgg
tgaccattgtaatggagctctccgcattactcccgtcggaccaaaagtgagtcgccaata
cgttacctttcattgaggacggcgtagctatttctaattggatctctgcgaaggtggagc
gtctggagcagggctcccaactcttagcctgtggtcgagctagaagagattttggacccg
cgactttctgaatgtgggggtcagatgagatgtaggccatggaacgtaaaatcatgaacc
gtgtcgagtgcacacacgcaattttctaacggcctccacctagagtgactggcatgatgc
cgaattctgtgtgactggtcactatgatgaaacgtaagcgcgttccgaagactgcgtgtc
taaaaggaactcgggctgagttagggtagcaattaaggctatacgagcgcacctgtccca
cctggtcatatcgcgggtggctgatttgggccctcccacgaaatcgtgtctaagacgtcc
gctcaattgtctagctctcacactttaataccagacagcaggacagatccctctgtggct
ctggcacaagtggagctcacataacgctacgatacgcgccggattgtctcttccatggtt
tgctcctgaacagccgacatctcgtactgatacatcgctaacggaccaagtattccgcac
ctgtgttcaaggatcccatcactattgaaagcgataaatgaccgctctggaatgcgtgct
gtgtctgaaaattggtaaacttaaaggtaaagcaagtagtgcttttcgactcgagtcgat
tcgctcaaagtatgccaagcacgcactcactggattcctagcacgtagttgctatgctcc
tttcgtcgggcgcaccaccgactccattgagaggccggcctcgcctaccgggaagagctc
gcttctgcgtaggacgtaaaaagatttcatttgtacccgagacaccggactactacgtcc
aatcgcagttgtgccgaatcccttatacgacgttatcatatgatgtccagaggggaagca
ataatccctttacaattatgttccccgtctagtccggtggtatcggaaacaagcccatga
ttcccgtcccgagtagggacacaggaagcagacctatagagcgctttcgtacggtacaga
gctgctgccgtccacaagaggcgccttatagccagctccccagaagaacctatgcggggg
agaggaaaccagaatacattcgagttttacaccccgcgacgcgattgaaaacgctgagtg
aatacaccaatccctgtgcgcgccatcttttcaaagaacttttaccccttcgagctcagc
cacaagagggtgtattggtttcagattagccgacgacccgaagtccgagtcccggatctc
gcggggggcgaaaagctcgttacaagtagcgtgataactacgtaatccattatgacatta
aatctacgccctccgcgacaggctatgcaggccccgttagcggactatcaggtacagact
ttgtgtgcggcaatgtaagcgtcgaaaacaattaaggttcgtagccaccctatattggcg
gtggccttgggtatagccaatgatttgcttaaacagcgaactcagagccacaatgctatc
tcgttgtaggctccgaaacccgggcactagtgttatcactcaaaatgctgtgcgaagtgt
tggcgttctataatagtgtgcacttgggaccggaatcctaggggcaacatagagattctc
ttttaggagcgcacccaagggagcaacgatttggggagccaatctgtaattgccgttccg
ccagagtaacaccgcatgcgacattctctgctgatcgtgtactgggctcgattgcgcgcg
attttgtatcgcggaacagcttcaccaggaaattaagttctagactcggcgggccacgca
tgactagaaaatctagcccctagacttcttatagctctatttccagttagaaccctcccg
gtctgaaacaccaagtctagtcagacagtgcgataggatctctataattctgatattcgt
attctcttgtctttccaagaccttcgatcttcagcaactctctacggcataataacttat
gcgatatcctgtgttccttgaatatttgagacattatcacgcagtgcggtccgtcacgaa
aaactttgtccatgcggagttgaagagtttacccgtacatggtacatgaattactgacat
gtaggcgcgaggcgcgagcgttctaacttgaataaactcaaacctgacttatccgtgtgt
ataacgtcaaatctatcgaaggaggcaacaaggtgtcaagggccaactatctcgtcaccg
tcgccgacctggaacagatttacgcacgcagatgcataacgtccttacgagattacaaag
ctggtaagtcgtcaatgttgtcttgatattggggccccactcgcacagcggtctagtacg
gactttgggtcagtataaggcgcgtagccggagggctatgggtacgtcttgccagcaagc
ggctccacccgatagattagaaaccgaagtctgtgctgaaagcccacgcggaaaatcctt
ataatggcgagttttttcaatccatgacggattaagctgtttccgcgtcttaatgcattg
ccattgtttggcggcaacgccaaacatccccgggtgtaccatcacggtcctttgtcacaa
ggctcattactgaggatacgcgatattcccacaggcattgtgactcgtccggatgccttg
aacttctctggaccggtacaaattgtgcgtgatcctatttcctgagcagtatggggcttt
caccggggccttgaattcatctagccaccactttcaaagtttagacatgataacgtggaa
gcgctatccgggagctgtaaaagcgcaagaagccttcggtcgagtttgcccggactgcag
taaccctgggggagatgggcggtgcgatgatcctagaagttcgctcgaggcatttatgta
agtattcgacgccaccagagaaagccaatgtcaaaacttcgtacaagtgcgtataatccg
gacataagcctatatatcttagttcggaacacctatggtgaccggatcatcaggaccgta
ccgattgcccaaagtatggagacttgcgcttggactgcctgaactcggatccccgctctg
tgaatgaagcctcccagcgggtcaatggtcggactgtgcttatccttcaaatgtgtacgc
ttgaatgttatccggcataagggactcatcacgaccctacataatcagtctttttccgtg
ttggccccgaactcccgagaagggatggcgtcgataaacaccaatgtagtttcgtctctg
tggccgcgtgcaacaggtccaacattggtatagtaaggggttgaaaaatggctaataatg
cctagaattactaccgaagtctaagtaccaggcacgttcccgtagttgtccctatcatgt
tggctctagtgttcaaacccaatcaccgtgtggcgtgcacaagataaatgatcttcctta
aatttgccacgtgacgccgcgtgtatatcaggaacccctcgatcccttgacgtggacttt
acgtacgtgaacgcatcgggccaacgttaagggtgtaaatagggataaggtttaactttc
tccgtgcggaagaagttacgcgttctgtctgagttagatccaaataccgggaggcgagat
aagaagaccccgaagaaatacatcctcccaagatggggtggcggaggtcctatccgttgc
tcgtatgtgccaataacgttcgggcgagatcctcatcagattcaggctggcgtcgtcttt
gctaggctggcagaggcctgtccttgctagtcatcgaccccgtacgttaaagctttagtt
ttatctgacacggaacatgttctaggattgtgagcccgcgaatctattacctttattcag
tgttacaacggatcaccgcgatagcccagtgtgtgttaaaagtgtcatgactgacttcga
agagaggctagtgaccatctgataggcttagtttcgcggctcgcccctgagccagagcat
aaccgcgtagcgtactacatggaggaactcgtataagataatctggtaagtcagcgtatt
aaccgcggtaattgggcgagctcggggcgagcgcgagacagttgcggaggttactttctg
cccattgcatagattaggtgccggaaaatttaaatccgcaagattacgtctcgtggactt
tagttgcttcgttgctatttttcagatgtctgtaatcttccacacatggagatcgtcccg
tttggtttacaccagagttgccataaggtgaacccgtggctgttgaatgaaggaagttct
ggagcgagtctttcgatggcgttgctcacattaacaggaagactaatagcacctagcatg
gatggtttcccccaccaccaatttcatgcccactgtgttagccgactaatcttccataac
acgcccttcctagaccgacctgcagtggtcggttattgtaaagcccatgtactccatctg
agagaaccagagatcgaaacagctatccgaattgaaatcaacggtcataacgacatttcc
gctcaaagtactcgttcgtgctcaaaaagccgtgaattgcctttcctctcgggaccttta
gcggatgatgggggcgtttaacaatgcgcttaccggcagttgctaactgatcgacaactg
actaagcttcacaacgtgtgcttaggcgttaaggtcagtattacggagagtagaactcgc
cactactcgggaattggactacccgcaacctctcctgagagcgcgctggcggctagggtg
tgtcgtctcgagtcagtcttccgctgtcctggcggtcgctcttgccaccgcatttcatcc
ccccaccgggaagcaatactccccttctctcttttggtttttgtaatgggaggacgggtt
ccgctaattttaaccccaagggttgtgtctatgcagcacgtacccctcctgattgtaagg
aaaattgagtgcggcgtaccgcgctcccgcactaaaattgctatagcggaatggaggggt
atcagtctaaaacaacagcttcgctgttgagtatgacggttcagaacgtattaacttacc
tgctggactgatcgcccatcctgccctctcaaatataacggccagtaacgtatgacttta
tgggcgcataccttgcgactgttgagttctgttacgtaggaatatcaaatcccaaacgtg
tggctcccgcttcatgaaccccggcccaaaggattgtgtggcaaccacagctgggtacgg
gtcgttccgaagttggcgcgcgtctgttaaatacactacacgcggtactcctcgatcttc
atagcaagaccgcacgggcattgccactaatcccactgctataacgaggtatgtacggtc
tggcgatgcgctttccgaaggtatgtctaggatggacacctggagagacgcttaacgcga
tctggaatacatgattcaaccttatgatgtactctgttatgcggcctctaagggcctatt
gggattcagctgaagtgatcgagccatgtcagatggtattatcacatgggcaaatcgcgg
ttggttaaggtctgcttgcacggaccggtccgacagtaattggacgtctttcatgcgagc
ggtctccactccacataccgggatatcgtaataaaagtgtcacgaccgataaaggttgag
tcgcgtagcactaaaatcaaccaaacattaggtctagatcgtcgcctgagctgagtccca
ggcaggcaattgcctccggatgtcggaattcgtatcgacagcctccccttgttatatccg
gtctcgggatcctctagggatggaccctacaatcgattatgcaagtcccgacacactatt
gccggccgatttcaggatgtaggacggtggagtcaagtctaacttttgaccctgtaattc
tagtttgagcgtgaattcgagcgccgagcaccatgctacgcacttcatgacacttaaata
aaaagaccttcttcgtgttcgtagctgtggtttccgctgaccgccgatatgccgttgtcg
tcaccctgccgagttacgatgatgtgcctaataatttgat`;
console.log(lcs_brute_force(dna1, dna2));
console.log(`lcs bruteforse max to min: ${timeMeasure(start)} miliseconds`)
