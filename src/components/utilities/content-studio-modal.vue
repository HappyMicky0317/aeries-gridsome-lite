<style>
.shadow-underneath-xl {
box-shadow: 0px 0px 100px rgb(0 0 0 / 25%);
}

.highlightMark {
  background-color: rgb(255 255 0 / 50%) !important;
  padding: 2px;
}

/* FEEDBACK MODAL */
#openFeedbackModal { 
    border:dashed 1px #CCC; 
    width:360px; 
    height:calc(45%);
    min-width:360px; 
    margin:5px; 
    font:13px Arial; 
    position: fixed !important;
    bottom: 0%;
    right: 0%;
    z-index: 9998;
} 
.handle {
  cursor:move; 
}
#openFeedbackModal .feedbackFormInput {
  display:inline-block;
  min-height: 60px;
}

.elementSelectorFeedbackForm {
  white-space: pre-line;
}

.contentContainer {
  height: calc(100% - 50px);
}

body.contentStudioHover *:hover {
  outline: 1px dotted red;
}

body.contentStudioHover #openFeedbackModal *:hover,
body.contentStudioHover #openFeedbackModal:hover {
  outline: none;
}

.feedbackFab {
  bottom: 4%;
  left: 94%;
  z-index: 9999;
}
</style>

<template lang='pug'>
  div#contentStudio(v-if="this.isDev")
    div.fixed.feedbackFab(v-show="!contentStudioModalIsActive" @click="contentStudioModalIsActive = true;" title="Feedback")
      button.p-0.w-16.h-16.bg-blue-600.rounded-full.mouse.shadow.transition.ease-in.duration-200(class='hover:bg-blue-700 active:shadow-lg focus:outline-none')
        svg(class="inline" width='24' height='24' viewbox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg')
          path(fill-rule='evenodd' clip-rule='evenodd' d='M4 2H20C21.1 2 22 2.9 22 4V16C22 17.1 21.1 18 20 18H6L2 22L2.01001 4C2.01001 2.9 2.90002 2 4 2ZM5.17004 16H20V4H4V17.17L4.57996 16.59L5.17004 16ZM11 12H13V14H11V12ZM13 6H11V10H13V6Z' fill='white')



    #openFeedbackModal(v-show="contentStudioModalIsActive" class="bg-white shadow-xl")
      .handle(class="w-full bg-blue-600 h-4")
      
      .contentContainer(class="p-2 flex flex-col overflow-y-scroll overflow-x-hidden")
        h3(class="pb-2 flex justify-between items-center")
          span(class="font-bold text-subhead font-aeries") Aeries Content Studio
          div
            a(@click="openContentStudioMenu()" v-if="currentRespondent" class="cursor-pointer text-blue-600 font-bold pr-2") Menu
            a(@click="closeContentStudio()" class="cursor-pointer text-blue-600 font-bold") Close
        
        Divider(noMargins=true class="mb-3")
        
        .landingView(v-show="selectedView == 'landingView'")
          p(class="pb-4 leading-normal tracking-")
            | Hello Eagles! With your help, we're always improving aeries.com for customers.
          p(class="pb-4")
            | This page has #[b {{this.relevantQuestions.length}} question(s)] for you from the design team if you've got a free moment!
          .bottomSection(class="flex-1")
            p First, let us know who you are. This answer will be saved for future pages.
            span(class="font-bold text-subhead font-aeries mt-5 block") Who are you?
            input(class="w-full px-2 py-3 my-2 bg-neutral-400 shadow-inner" type="text" placeholder="Who's this?" v-model="currentRespondent")
            a(@click="startQuestions()" :class="{'opacity-50 cursor-not-allowed' : !currentRespondent}" class="text-white p-3 mt-2 inline-block font-bold font-aeries text-subhead cursor-pointer bg-blue-600") Review {{this.relevantQuestions.length}} question(s)
        
        .contentStudioMenu(v-show="selectedView == 'contentStudioMenu'")
          div.flex
            a(@click="startQuestions()" class="text-blue-600 font-bold cursor-pointer block w-1/2 text-center px-3 py-5 rounded border border-neutral-500 shadow-lg mx-2") 
              svg(class="m-auto" width='52' height='52' viewbox='0 0 52 52' fill='none' xmlns='http://www.w3.org/2000/svg')
                path(fill-rule='evenodd' clip-rule='evenodd' d='M10.8333 3.25H41.1667C43.55 3.25 45.5 5.2 45.5 7.58333V37.9167C45.5 40.3 43.55 42.25 41.1667 42.25H32.5L26 48.75L19.5 42.25H10.8333C8.42833 42.25 6.5 40.3 6.5 37.9167V7.58333C6.5 5.2 8.42833 3.25 10.8333 3.25ZM30.7017 37.9167H41.1667V7.58333H10.8333V37.9167H21.2983L22.555 39.1733L26 42.6183L29.4233 39.195L30.7017 37.9167ZM23.8333 35.75V31.4167H28.1667V35.75H23.8333ZM30.3333 18.4167C30.3333 16.0333 28.3833 14.0833 26 14.0833C23.6167 14.0833 21.6667 16.0333 21.6667 18.4167H17.3333C17.3333 13.6283 21.2117 9.75 26 9.75C30.7883 9.75 34.6667 13.6283 34.6667 18.4167C34.6667 21.1963 32.955 22.6922 31.2883 24.1487C29.7072 25.5304 28.1667 26.8767 28.1667 29.25H23.8333C23.8333 25.3039 25.8746 23.7393 27.6693 22.3636C29.0772 21.2845 30.3333 20.3216 30.3333 18.4167Z' fill='#1649A0')

              p Answer {{this.relevantQuestions.length}} question(s)
            a(@click="startElementSelector() " class="text-blue-600 font-bold cursor-pointer block w-1/2 text-center px-3 py-5 rounded border border-neutral-500 shadow-lg mx-2") 
              svg(class="m-auto" width='52' height='52' viewbox='0 0 52 52' fill='none' xmlns='http://www.w3.org/2000/svg')
                path(fill-rule='evenodd' clip-rule='evenodd' d='M26 2.24249C35.5333 2.24249 43.2466 9.91249 43.3333 19.4242V32.4242C43.3333 42.0008 35.5766 49.7575 26 49.7575C16.4233 49.7575 8.66663 42.0008 8.66663 32.4242V19.4242C8.75329 9.91249 16.4666 2.24249 26 2.24249ZM28.1666 19.4242H39C38.9133 13.0542 34.255 7.78919 28.1666 6.77086V19.4242ZM23.8333 6.77086V19.4242H13C13.0866 13.0542 17.745 7.78919 23.8333 6.77086ZM26 45.4241C33.1716 45.4241 39 39.5958 39 32.4242V23.7575H13V32.4242C13 39.5958 18.8283 45.4241 26 45.4241Z' fill='#1649A0')

              p Select elements to give feedback
        
        .elementSelectorView(v-show="selectedView == 'elementSelectorView'")
          
          div(v-show="selectedElement.tagName")
            a.submitRevision(@click="submitRevisionRequest()" v-if="selectedElement.classList && (selectedElement.innerHTML !== selectedElementInnerHTMLOriginal || revisionFeedback !== '')" class="block px-10 py-3 bg-blue-600 text-center text-white font-bold mb-4 rounded text-subhead shadow cursor-pointer") Submit revision
            a.submitRevision(v-if="selectedElement.classList && (selectedElement.innerHTML == selectedElementInnerHTMLOriginal && revisionFeedback == '')" title="You need to revise something before you can submit a revision." class="opacity-50 cursor-not-allowed block px-10 py-3 bg-blue-600 text-center text-white font-bold mb-4 rounded text-subhead shadow") Submit revision
            h3(class="text-subhead text-neutral-1700 pb-2 font-bold")
              | {{getElementDescriptorText(selectedElement.tagName)}}
            p.text-neutral-1300.pb-2 {{getElementPromptText(selectedElement.tagName)}}
            div
              p.text-neutral-1500.pt-2 Briefly describe your revision suggestion:
              textarea.elementSelectorTextFeedbackForm.feedbackFormInput(v-model="revisionFeedback" contenteditable=true class="w-full mt-2 p-3 bg-neutral-500 shadow-inner flex-1")
              //- div.elementSelectorFeedbackForm.feedbackFormInput(v-model="selectedElement.innerTextEditable" contenteditable=true class="w-full mt-2 p-3 bg-neutral-500 shadow-inner flex-1")
          div(v-show="selectedElement.tagName == ''")
            div(class="p-4")
              svg(class="block mb-4" width='39' height='39' viewbox='0 0 39 39' fill='none' xmlns='http://www.w3.org/2000/svg')
                path(d='M25.8542 0V5.08333H9.10458L38.5625 34.5413L34.9787 38.125L5.52083 8.66708V25.4167H0.437499V0H25.8542Z' fill='#060E1E')

              h3(class="text-subhead text-neutral-1700 pb-2 font-bold")
                | Click an element on the page to start revising it.

        .elementSelectorView(v-show="selectedView == 'elementSelectorSubmittedView'")
          
          div
            h3(class="text-subhead text-neutral-1700 pb-2 font-bold")
              | Your revision has been submitted! The design team will respond as soon as they review it.
            a.restartElementSelector(@click="restartElementSelector()" class="block px-10 py-3 bg-blue-600 text-center text-white font-bold mb-4 rounded text-subhead shadow cursor-pointer") Select another element



        
        .questionView(v-show="selectedView == 'questionView'")
          h3.text-subhead.text-neutral-1300.pb-2
            b Section: 
            select(class="bg-neutral-500 w-full px-2 py-3" v-model="selectedSection" @change="selectNewSection($event.target.value)")
              option(v-for="section in allSections") {{section}}
          //- h3(v-if="this.selectedQuestion.highlightMarkElementSelector").text-subhead.text-neutral-1300.pb-2
          //-   b Highlighted: 
          //-   span {{this.selectedQuestion.highlightMarkElementSelector}}
          p(class="text-minimum-text")
            a(v-if="selectedQuestion.confluenceLink" href="docs.aeries.works" class="text-blue-600 underline") View Confluence documentation on this section
          Divider(noMargins=true).pt-3.pb-2
          .questionContainer(v-show="selectedQuestion.question !== ''")
            h4(class="text-subhead font-aeries font-bold tracking-tight leading-tight") Question {{this.selectedQuestionIndex + 1}} of {{this.relevantQuestions.length}}
            .nextLink(class="text-right flex justify-between pb-1")
              a(@click="previousQuestion()" v-bind:class="{'invisible' : previousQuestionIndex == 0}" class="text-blue-600 font-bold font-aeries text-subhead cursor-pointer underline") Previous
              a(@click="nextQuestion()" v-if="relevantQuestions[nextQuestionIndex]" class="text-blue-600 font-bold font-aeries text-subhead cursor-pointer underline") Next
            p.pb-2.leading-4 {{selectedQuestion.question}}
            p#lastSavedAt.italic
            div.feedbackForm.feedbackFormInput(v-model="selectedQuestion" contentEditable="true" class="w-full mt-2 p-3 bg-neutral-500 shadow-inner flex-1")
          

</template>

<script>
export default {
    data() {
        return {
            selectedElement: {
              classList: "",
              tagName: "",
              innerHTML: "",
              innerText: "",
              page: ""
            },
            selectedElementInnerTextOriginal : "",
            selectedElementInnerHTMLOriginal : "",
            currentRespondent: "",
            allSections: [],
            selectedSection: "",
            selectedQuestion: {},
            relevantQuestions: [], //Questions relevant to elements on the current page.
            allQuestions: [],
            selectedView: 'landingView',
            contentStudioModalIsActive: false,
            showDefaultQuestions : false,
            contentChanged : false,
            revisionFeedback: "",
        }
    },
    metaInfo() {
        return {
            script: [
                { src: this.externalDevelopmentURLs.jquery, body: true },
                { src: this.externalDevelopmentURLs.jqueryUi, body: true }
            ],
            link: [
                { href: this.externalDevelopmentURLs.jqueryUiCSS, rel: "stylesheet" }
            ]
        }
    },
    methods: {
        getElementDescriptorText(tagName) {
          if (tagName == "NONLINK") {
            return "Type in the highlighted area to revise this link"
          } else if (tagName == "SPAN") {
            return "Type in the highlighted area to revise this text"
          } else if (tagName == "DIV" || tagName == "SECTION") {
            return "Type in the highlighted area to revise this section"
          } else if (tagName == "P") {
            return "Type in the highlighted area to revise this paragraph"
          } else if (
              tagName == "H1" ||
              tagName == "H2" ||
              tagName == "H3" ||
              tagName == "H4" ||
              tagName == "H5" ||
              tagName == "H6") {
                return "Type in the highlighted area to revise this header"
          } else if (
              tagName == "IMG") {
                return "Type in the box below to describe your suggested change to this image"
          } else {
            return "Type in the highlighted area to revise this text";
          }
          
        },
        getElementPromptText(tagName) {
          if (tagName == "NONLINK") {
            return "Issues to watch for: Typos? Grammar? Does this link go to the right page? Is the link text a clear and compelling call to action? Is there a better location this link could point to? Is there a link missing that should be here?"
          } else if (tagName == "SPAN") {
            return "Issues to watch for: Typos? Grammar? What little changes can be made here to improve the overall flow of this piece of text?"
          } else if (tagName == "DIV" || tagName == "SECTION") {
            return "Issues to watch for: Typos? Grammar? Could any elements be added, removed or edited within this section to improve it?"
          } else if (tagName == "P") {
            return "Issues to watch for: Typos? Grammar? Could any part of this text be stronger within the context of the surrounding text? Could this paragraph use a rewrite?"
          } else if (
              tagName == "H1" ||
              tagName == "H2" ||
              tagName == "H3" ||
              tagName == "H4" ||
              tagName == "H5" ||
              tagName == "H6") {
                return "Issues to watch for: Typos? Grammar? Can we change this header in any way to make it more of an attention-grabber?"
          } else if (
              tagName == "IMG") {
                return "Issues to watch for: Is this image broken? Is the image relevant to the elements surrounding it? If there is text in this image, are there typos/grammar issues?"
          } else {
            return "Issues to watch for: Typos? Grammar? What would you change about this?";
          }
        },
        selectNewSection(eventTargetValue) {
            var newSectionID = eventTargetValue;
            //Locate first question from that section, or else serve default questions.

            var questionServed = false;

            for (var i = 0; i < this.relevantQuestions.length; i++) {
                if (this.relevantQuestions[i].elementID == newSectionID) {
                    this.selectedQuestion = this.relevantQuestions[i];
                    questionServed = true;
                    console.log(this.relevantQuestions[i])
                    this.focusSection(this.selectedQuestion)
                    break;
                }
            }

            if (questionServed !== true) { //If we get to the end and haven't found a question
                console.log("No question for that element ID! Default questions?")

                //Send us to the section and serve default questions
                var question = {
                    elementID: newSectionID,
                    highlightMarkElementSelector: "",
                    question: "No data was found for this section, but you can still help us review it.",
                    confluenceLink: false
                }
                this.selectedQuestion = question;
                this.focusSection(question)
            }

        },
        mountContentStudio() {
            $("#openFeedbackModal").resizable().draggable({ handle: '.handle' });
            $('section').removeClass('opacity-25');
            $('.highlightMark').removeClass('highlightMark')
            this.loadSectionQuestions();
            
            if (this.currentRespondent) {
              this.selectedView = 'contentStudioMenu';
              if (this.$route.query.selectedSection) {
                this.contentStudioModalIsActive = true;
                this.startQuestions(this.$route.query.selectedSection);
              }
            }
            
        },
        setSelectedElement(element) {
          console.log(element)
          var classList = Object.values(element.classList).join(' ')
          this.selectedElement.page = this.$route.path;
          this.selectedElement.classList = classList;
          this.selectedElement.tagName = element.tagName;
          this.selectedElement.innerHTML = element.innerHTML;
          this.selectedElement.innerText = element.innerText;

          $('.elementSelectorFeedbackForm').html(element.innerText)
          //Parse the passed element and set the object data
        },
        submitRevisionRequest() {
          var globalScope = this;
          var payload = {
            page : this.selectedElement.page,
            classList : this.selectedElement.classList,
            tagName : this.selectedElement.tagName,
            innerHTML : this.selectedElement.innerHTML,
            originalInnerHTML : this.selectedElementInnerHTMLOriginal,
            originalInnerText : this.selectedElementInnerTextOriginal,
            innerText : this.selectedElement.innerText,
            revisionFeedback: this.revisionFeedback,
            contentChanged: this.contentChanged,
            user : this.currentRespondent,
          }

          console.log(payload)
          $.ajax({
              url: "https://aeries.services/content-studio-revisions/",
              method: "POST",
              data: payload,
              success: function (response) {
                  console.log(response);
                  globalScope.selectedView = "elementSelectorSubmittedView"
                  globalScope.revisionFeedback = ""
              },
              error: function (error) {

              }
          })
        },
        enableAutoSave() {
          var feedbackTimeout;
          var globalScope = this;
          $('.feedbackForm')[0].addEventListener("input", function() {
            clearTimeout(feedbackTimeout);
            feedbackTimeout = setTimeout(function() {
            console.log("Saved feedback input");
            var questionFeedback = $('.feedbackForm').html() // The HTML of the element we just blur()d
            var entityID = btoa(globalScope.$route.path + '|' + globalScope.selectedSection + '|' + globalScope.selectedQuestion.highlightMarkElementSelector + '|' + globalScope.selectedQuestion._id + '|' + globalScope.currentRespondent).replace(/\//g, '_');


            var newFeedbackData = {
              currentPage: globalScope.$route.path,
              currentRespondent : globalScope.currentRespondent,
              selectedQuestion : globalScope.selectedQuestion,
              feedback: questionFeedback,
              _id: entityID
            };

            console.log(newFeedbackData);

            $.ajax({
                url: "https://aeries.services/content-studio-feedback/" + entityID,
                method: "GET",
                success: function (response) {
                    //Entity exists, PUT over it to replace the current feedback
                    $.ajax({
                        url: "https://aeries.services/content-studio-feedback/" + entityID,
                        method: "PUT",
                        data: newFeedbackData, //TODO: make newFeedbackData
                        success: function (response) {
                            console.log(response);
                            $('#lastSavedAt').html('Saved at ' + new Date().toLocaleTimeString())
                        },
                        error: function (error) {
                            //The PUT didn't work for some reason
                        }
                    })
                },
                error: function (error) {
                    //Entity does not exist, POST a new one with the _id included in the object
                    $.ajax({
                        url: "https://aeries.services/content-studio-feedback/",
                        method: "POST",
                        data: newFeedbackData,
                        success: function (response) {
                            console.log(response);

                            $('#lastSavedAt').html('Saved at ' + new Date().toLocaleTimeString())
                        },
                        error: function (error) {

                        }
                    })
                }
            })
            }, 1000);
              }, false)
        },
        restartElementSelector() {
          //Un-set selected item
          this.selectedElement.tagName = "";
          this.startElementSelector()
        },
        openContentStudioMenu() {
          this.resetSectionOpacities();
          this.selectedView = "contentStudioMenu"
        },
        startElementSelector() {
          
          //Change the page to the elementselectorView
          this.selectedView = "elementSelectorView";

          //Un-set any highlighted elements
          $('.highlightMark').removeClass('highlightMark')

          this.replaceLinksWithNonlinks();

          $('body').addClass('contentStudioHover')
          var globalScope = this;
          $('*:not(#openFeedbackModal, #openFeedbackModal *)').click(function(event) {
              
              //If the element is the one we clicked, and the element is not highlighted, and the element is not a
              //descendant of an element that is highlighted (which would clear out the user's text if they were editing)
              //a section.
              if (this === event.target 
              && $(this).hasClass('highlightMark') == false
              && $(this).closest('.highlightMark').length == 0) {

                //Make sure we don't lose our changes.
                if (globalScope.contentChanged == true || globalScope.revisionFeedback !== "") {

                  if (confirm('If you select a new element without submitting a revision your changes will be lost. Continue selecting a new element?')) {
                    $('.highlightMark').html(globalScope.selectedElementInnerHTMLOriginal);
                    globalScope.selectElement(this, event)                    
                  }
                  
                  

                } else {
                  globalScope.selectElement(this, event)
                }
              }
          });

        },
        replaceLinksWithNonlinks() {
          //Disable links by replacing them with spans. This so we can click on them to give
          //feedback without navigating away.
          $('a').each(function() {
            
            //Don't disable links on the actual content studio.
            if ($(this).closest('#openFeedbackModal').length == 0) {
              var className = Object.values($(this)[0].classList).join(' ');
              var href = $(this).attr('href');
              $(this).replaceWith('<nonlink data-href="'+href+'" class="'+className+'">' + $(this).html() + '</nonlink>');
            }
          })
        },
        replaceNonlinksWithLinks() {
                    //Disable links by replacing them with spans. This so we can click on them to give
          //feedback without navigating away.
          $('nonlink').each(function() {
            
            //Don't disable links on the actual content studio.
            if ($(this).closest('#openFeedbackModal').length == 0) {
              var className = Object.values($(this)[0].classList).join(' ');
              var href = $(this).attr('data-href')
              $(this).replaceWith('<a href="'+href+'" class="'+className+'">' + $(this).html() + '</a>');
            }
          })
        },
        stopElementSelector() {
          //Unset the element selector
          $('*:not(#openFeedbackModal, #openFeedbackModal *)').off('click');
          $('body').removeClass('contentStudioHover');
          $('.highlightMark[contenteditable="true"]').removeAttr('contenteditable');
          $('.highlightMark').removeClass('highlightMark');
          this.selectedElement.tagName = "";
          this.replaceNonlinksWithLinks();
        },
        selectElement(element, event) {
          this.resetSectionOpacities();
          this.contentChanged = false;
          $('.highlightMark[contenteditable="true"]').removeAttr('contenteditable');
          $('.highlightMark').removeClass('highlightMark');
          $(element).addClass('highlightMark');
          $(element).attr('contenteditable', 'true');
          
          //Clear the revisionFeedback input
          this.revisionFeedback = "";

          var globalScope = this;

          //Trigger 'content changed' and update the locally-stored element
          element.addEventListener("input", function() {
            globalScope.setSelectedElement(element)
            globalScope.contentChanged = true;
          }, false);

          this.selectedElementInnerTextOriginal = element.innerText;
          this.selectedElementInnerHTMLOriginal = element.innerHTML;
          
          this.setSelectedElement(event.target);
        },
        startQuestions(selectedSectionQuery) {

          this.stopElementSelector();

          if (this.currentRespondent.length) {
            window.localStorage.setItem('currentRespondent', this.currentRespondent)
            this.selectedQuestion = this.relevantQuestions[0];
            this.selectedQuestion.index = 0;
            var firstRelevantQuestion = this.relevantQuestions[0]
            this.focusSection(firstRelevantQuestion)
          
          if (selectedSectionQuery) {
            console.log(this.$route.query.selectedSection)
            this.selectNewSection(this.$route.query.selectedSection);
          }

          this.loadExistingResponse()
          

          }
        },
        resetSectionOpacities() {
          $('section').removeClass('opacity-25').removeClass('shadow-underneath-xl');
        },
        closeContentStudio() {
          this.resetSectionOpacities();
          this.contentStudioModalIsActive = false;
          this.stopElementSelector()
          this.selectedView = "contentStudioMenu"
        },
        nextQuestion() {
            var nextIndex = this.nextQuestionIndex;
            this.selectedQuestion = this.relevantQuestions[nextIndex];
            this.selectedQuestion.index = nextIndex;
            this.clearFeedbackBox()
            this.focusSection(this.selectedQuestion)
        },
        previousQuestion() {
            var previousIndex = this.previousQuestionIndex - 1;
            this.selectedQuestion = this.relevantQuestions[previousIndex];
            this.selectedQuestion.index = previousIndex;
            this.clearFeedbackBox()
            this.focusSection(this.selectedQuestion)
        },
        clearFeedbackBox() {
          $('.feedbackForm').html('');
          $('#lastSavedAt').html('')
        },
        focusSection(questionObject) {
            console.log(questionObject.elementID)
            $('section').addClass('opacity-25')
            $('#' + questionObject.elementID).removeClass('opacity-25').addClass("shadow-underneath-xl");
            $('.highlightMark').removeClass('highlightMark');

            var elementID = document.getElementById(questionObject.elementID);
            var scrollElementSelector = "#" + elementID.id;
            var scrollBlock = 'center'

            if (questionObject.highlightMarkElementSelector) {
                $(questionObject.highlightMarkElementSelector).addClass("highlightMark");
                scrollElementSelector = questionObject.highlightMarkElementSelector;
                scrollBlock = 'center';
            }

            
            //If there is a highlighted element, scroll to that. Otherwise, scroll to the section.

            // smooth scroll to element and align it at the bottom
            $(scrollElementSelector)[0].scrollIntoView({ behavior: 'smooth', block: scrollBlock });

            this.selectedView = 'questionView';
            this.selectedSection = questionObject.elementID;
            this.loadExistingResponse()
        },
        loadExistingResponse() {
            //If we've already responded to this question, load our response
            var entityID = btoa(this.$route.path + '|' + this.selectedSection + '|' + this.selectedQuestion.highlightMarkElementSelector + '|' + this.selectedQuestion._id + '|' + this.currentRespondent).replace(/\//g, '_');
            console.log(this.$route.path + '|' + this.selectedSection + '|' + this.selectedQuestion.highlightMarkElementSelector + '|' + this.selectedQuestion._id + '|' + this.currentRespondent, entityID)
            $.ajax({
              url: "https://aeries.services/content-studio-feedback/" + entityID,
              method: "GET",
              success: function (response) {
                console.log(response.feedback);
                $('.feedbackForm').html(response.feedback);
              }, error: function(error) {
   
              }
            })

        },
        loadSectionQuestions() {
            var globalScope = this;
            $('section').each(function () {
                var questionsFound = false;
                var newRelevantQuestions = globalScope.relevantQuestions;
                var id = $(this).attr('id');

                if (id) {
                    var ids = globalScope.allSections;
                    ids.push(id);
                    globalScope.allSections = ids;
                }

                for (var i = 0; i < globalScope.allQuestions.length; i++) {
                    if (globalScope.allQuestions[i].elementID == id) {
                        newRelevantQuestions.push(globalScope.allQuestions[i]);
                        questionsFound = true;
                    }
                    globalScope.relevantQuestions = newRelevantQuestions;

                }

                //If there are no specific questions about this section, push a default question.
                if (questionsFound == false) {
                    var defaultQuestionTypos = {
                        _id : "defaultQuestionTypos",
                        elementID: id,
                        highlightMarkElementSelector: "",
                        question: "Please read the focused section and identify any typos or grammar errors. If there are none, leave the following box blank.",
                        confluenceLink: false,
                    },
                    defaultQuestionAnythingWrong = {
                        _id : "defaultQuestionAnythingWrong",
                        elementID: id,
                        highlightMarkElementSelector: "",
                        question: "Besides typos and grammar, can you identify anything wrong with this section?",
                        confluenceLink: false,
                    },
                    defaultQuestionChangeAnything = {
                        _id : "defaultQuestionChangeAnything",
                        elementID: id,
                        highlightMarkElementSelector: "",
                        question: "Is there any wording here you would change about this section to make it clearer, more accurate, more impactful, or more relevant? If not, leave the box blank.",
                        confluenceLink: false,
                    }

                    //Push all section questions
                    newRelevantQuestions.push(defaultQuestionTypos, defaultQuestionAnythingWrong, defaultQuestionChangeAnything)
                    globalScope.relevantQuestions = newRelevantQuestions;
                    globalScope.enableAutoSave()
                }
            })
        }

    },
    mounted() {
        //If we're viewing a dev instance
        console.log(this.isDev)
        if (this.isDev) {

          if (this.$route.query.currentRespondent) {
            window.localStorage.setItem('currentRespondent', this.$route.query.currentRespondent);
          }

          if (window.localStorage.getItem('currentRespondent')) {
            this.currentRespondent = window.localStorage.getItem('currentRespondent');
          }

            var globalScope = this;

            //Activate the floating feedback modal
            setTimeout(function () {
                $.ajax({
                  url: "https://aeries.services/content-studio-questions?$sort[_id]=1&$limit=9999",
                  method: "GET",
                  success: function(response) {
                  console.log(response);
                  globalScope.allQuestions = response.data;
                  globalScope.mountContentStudio()
                  }
                })
            }, 1000);

        }

    },
    computed: {
        selectedQuestionIndex() { //
            if (this.selectedQuestion) {
                for (var i = 0; i < this.relevantQuestions.length; i++) {
                    if (this.selectedQuestion.elementID == this.relevantQuestions[i].elementID
                        && this.selectedQuestion.highlightMarkElementSelector == this.relevantQuestions[i].highlightMarkElementSelector
                        && this.selectedQuestion.question == this.relevantQuestions[i].question) {
                        return i;
                        this.selectedQuestion.index = i;
                    }
                }
            }
        },
        nextQuestionIndex() {
            return this.selectedQuestionIndex + 1;
        },
        previousQuestionIndex() {
            if (this.selectedQuestionIndex !== 0) {
                return this.nextQuestionIndex - 1;
            } else {
                return 0;
            }
        },
        isDev() {
            return process.env.GRIDSOME_ENV === 'dev';
        },
        externalDevelopmentURLs() {
            //If we're on dev, load external dev scripts for the feedback tools
            return (this.isDev) ? {
                "jquery": "https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js",
                "jqueryUi": "https://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js",
                "jqueryUiCSS": "https://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/themes/smoothness/jquery-ui.css"
            } : ''
        }
    }
}
</script>
