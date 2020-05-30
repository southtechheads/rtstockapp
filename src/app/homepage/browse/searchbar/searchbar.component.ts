import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  stockName;
  myControl = new FormControl();
  symbols;

  constructor( private router: Router) {
    this.loadSymbols();
   }

  
  ngOnInit() {

  }

  // onKey(event:any){
  //   if(event.target.value == '' || event.target.value == null){
  //     this.router.navigate(['/home']);
  //   } else{
  //     this.options = this.sampleList.filter((element) => {
  //       element = event.target.value
  //       return this.stockName = element.toLocaleUpperCase();
  //     })
  //   }
  // }



  

   //build list of states as map of key-value pairs
   loadSymbols() {
      // var allSymbols = 'Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware,\
      //    Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana,\
      //    Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana,\
      //    Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina,\
      //    North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina,\
      //    South Dakota, Tennessee, Texas, Utah, Vermont, Virginia, Washington, West Virginia,\
      //    Wisconsin, Wyoming';

      var allSym = 'AA, AAN, AAP, AAT, AB, ABB, ABBV, ABC, ABEV, ABG, ABM, ABR, ABT,AC,ACA,ACB,ACC,ACCO,ACEL,ACH,ACM,ACN,ACP,ACRE, ACV,\
      ADC, ADCT, ADM, ADNT, ADS, ADSW, ADT, ADX, AEB, AEE, AEFC, AEG, AEL, AEM, AEO, AEP, AER, AES, AFB, AFC, AFG, AFGB, AFGC, AFGH, AFI,\
      AFL, AFT, AG, AGCO, AGD, AGI, AGM, AGO, AGR, AGRO, AGS, AGX, AHC, AHH, AHT, AI, AIC, AIF,AIG, AIN, AIO, AIR, AIT, AIV, AIW, AIZ, AIZP,\
      AJG, AJRD, AJX, AJXA, AKR, AL, ALB, ALC, ALE, ALEX, ALG,ALK, ALL, ALLE, ALLY, ALSN, ALTG, ALUS, ALV, ALX, AM, AMBC, AMC, AMCR, AME, AMG,\
      AMH, AMK, AMN, AMOV, AMP, AMPY, AMRC, AMRX, AMT, AMX, AN, ANET,ANF, ANH, ANTM, AOD, AON, AOS, AP, APA, APAM, APD, APG, APH, APHA, APLE,\
      APO, APRN, APTS, APTV, APY, AQN, AQNA, AQNB, AQUA, AR, ARA, ARC, ARCH, ARCO,ARD, ARDC, ARE, ARES, ARGD, ARGO, ARI, ARL, ARLO, ARMK, ARNC,\
      AROC, ARR, ARW, ASA, ASB, ASC, ASG, ASGN, ASH, ASIX, ASPN, ASR, ASX, AT, ATCO, ATEN,ATGE, ATH, ATHM, ATI, ATKR, ATO, ATR, ATTO, ATUS, ATV,\
      AU, AUY, AVA, AVAL, AVB, AVD, AVK, AVLR, AVNS, AVTR, AVY, AVYA, AWF, AWI, AWK, AWP, AWR, AX, AXE, AXL, AXO, AXP, AXR, AXS, AXTA, AYI, AYX, AZN, AZO, AZRE, AZUL, AZZ';
      
      
  
      this.symbols =  allSym.split(/, +/g).map( function (symbol) {
         return {
            value: symbol.toUpperCase(),
            display: symbol
         };
      });
   }

}
