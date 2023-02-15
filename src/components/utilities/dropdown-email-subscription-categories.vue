<template lang="pug">
.w-full
  div(class="w-1/6 inline")
    Icon(
          @click='isOpen = !isOpen' class="cursor-pointer"
          class="cursor-pointer fill-current text-neutral-600 inline pb-1"
          name="cheveron-down"
          width="24"
          height="24"
          style="display: inline;"
        )
  div(class="5/6 inline")
    .button( @click='isOpen = !isOpen' class='w-5/6 font-bold inline text-subhead text-left md:pr-5 mt-5 focus:outline-none focus:border-white')
      | Subscribing to {{dropdownText}} #[span.font-bold.text-blue-500(v-if="topicsSelected[0] !== 'all' && topicsSelected.length == 1") - {{getTopicByID(topicsSelected).title}}]
    //-TODO: Replace this downward arrow when we get icons implemented.
  a.fixed.inset-0.h-full.w-full.cursor-default(v-if='isOpen' @click='isOpen = false' tabindex='-1')
  .absolute.mt-2.py-2.w-64.bg-white.rounded-lg.shadow-xl(v-if='isOpen')
    //- Loop through each link passed by data
    div(v-for="(topic, index) in topics" :key="topic.id" class="text-left md:px-5 py-1") 
      input(:id='topic.id' type='checkbox' :name='topic.title' :value="topic.id" v-model="topicsSelected" @change="toggleItem")
      label.text-subhead.ml-2.cursor-pointer(:for='topic.id') {{topic.title}}
</template>

<script>
import icons from '~/components/utilities/icons/index.js'

export default {
    props: ['selectedCategories'],
    data() {
        return {
            isOpen: false,
            topics: [
                { title: "All topics", id: "all",  },
                { title: "Announcements", id: "company-announcements"  },
                { title: "Inside Aeries", id: "inside-aeries"  },
                { title: "Product News", id: "product-news"  },
                { title: "Resources & Guides", id: "resources-guides"  },
                { title: "AeriesCon/Tradeshows", id: "aeriescon" }
            ],
            topicsSelected: ['all']
        }
    },
    computed: {
      dropdownText : function() {
      //- If 'all topics' is selected, display "All topics".
      //- If one item is selected, display "1 topic".
      //- If many are selected, display that number.
      //- If all are selected, don't account for "All topics" as a topic. 

      var value = "1";
      var plurality = " topic"

        if (this.topicsSelected.length == 1
          && this.topicsSelected[0] == 'all') {
            value = "";
            plurality = "all topics";
        } else if (this.topicsSelected.length == 1) {
            value = "1";
            plurality = " topic";
        } else if (this.topicsSelected.length == this.topics.length) {
            value = this.topicsSelected.length - 1;
            plurality = " topics";
        } else {
            value = this.topicsSelected.length;
            plurality = " topics";
        }
        return value + plurality;
      }
    },
    methods: {
      
      getTopicByID(categoryID) {
        for (var i = 0; i < this.topics.length; i++) {
          if (this.topics[i].id == categoryID) {
            return this.topics[i];
          }
        }
      },

        //- Here we provide special logic to handle the scenario when users are selecting which email mailing list topics
        //- they're interested in subscribing to.
        
        //- If they check "All topics", it unchecks everything else.
        //- If "All topics" is checked, you can only uncheck it by checking another option.
        //- If the user tries to uncheck all options, "All topics" becomes checked as a default.
        toggleItem: function (e) {
            //- If we're clicking "All topics", make it the only thing selected and prevent the uncheck.
            if (e.target.id == "all") {
                this.topicsSelected = ['all']
                e.target.checked = true;
            } else {
              //- Otherwise, if we're clicking something else, uncheck "All topics".
              this.topicsSelected = this.topicsSelected.filter(item => item !== "all")
            }
            //- If nothing is checked, re-check "All topics"
            if (this.topicsSelected.length == 0) {
                  this.topicsSelected = ['all'] 
            }
            console.log(this.topicsSelected)
            this.$emit('selectCategory', this.topicsSelected)
        }
    },
    mounted() {
      if (this.selectedCategories) {
        this.topicsSelected = [this.selectedCategories];
      }
    },
    created() {
      
      //- Close the dropdown when pressing Esc
        const handleEscape = (e) => {
            if (e.key === 'Esc' || e.key === 'Escape') {
                this.isOpen = false
            }
        }
        if (process.isClient) {

          document.addEventListener('keydown', handleEscape)
          this.$once('hook:beforeDestroy', () => {
              document.removeEventListener('keydown', handleEscape)
          })
          
        }
    }
}
</script>
