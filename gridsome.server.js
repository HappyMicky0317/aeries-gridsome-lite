//TODO: Manually register as collections all the routes for WordPress API endpoints that were previously imported automatically by the WPGraphQL plugin
// [x] eagles = /team-members (Use case is simple, so just directly copied the HTML from the live site)
// [x] partners = /partners (images are broken - add a custom field for the image URL?)
// [x] userGroups = /user-groups (now pulling from the API)
// [] courses = /courses

// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const axios = require("axios");
const Parser = require("rss-parser");
const RSSparser = new Parser();

const getData = async url => {
  const { data } = await axios.get(url);
  return data;
};

module.exports = function(api) {
  //Load job listings from MyStaffingPro RSS feed (because there's no API lol)
  api.loadSource(async actions => {
    try {
      // const { data } = await axios.get(`https://client.hrservicesinc.com/downloads/rss/portals/17059.xml`)
      const data = await getData(
        `https://client.hrservicesinc.com/downloads/rss/portals/17059.xml`
      );
      const feed = await RSSparser.parseString(data);

      const collection = actions.addCollection({
        typeName: "JobListings"
      });

      let jobListingIndex = 0;
      for (const item of feed.items) {
        let node = {
          id: jobListingIndex,
          title: item.title,
          description: item.content,
          link: item.link,
          pubDate: item.pubDate
        };

        collection.addNode(node);
        jobListingIndex++;
      }
    } catch (e) {
      console.error(e);
    } finally {
      console.log("\n✅ Job listings complete...\n");
    }
  });

  //Load events from our screen-scrape API
  api.loadSource(async actions => {
    try {
      // const { data } = await axios.get(`https://my.aeries.com/api/Events`)
      const data = await getData(`https://my.aeries.com/api/Events`);
      const collection = actions.addCollection({
        typeName: "EventAdminEvents"
      });

      for (const item of data) {
        // console.log(item)

        var selectedDays = [];
        if (item.SelectedDays) {
          selectedDays = item.selectedDays;
        }

        collection.addNode({
          EventId: item.EventId,
          Name: item.Name,
          SubTitle: item.SubTitle,
          FirstDay: item.FirstDay,
          Blurb: item.Blurb,
          RegistrationDeadline: item.RegistrationDeadline,
          SelectedDays: item.SelectedDays[0],
          EventType: item.EventType
        });
      }
    } catch (e) {
      console.error(e);
    } finally {
      console.log("\n✅ Events complete...\n");
    }
  });

  //Load blog posts
  api.loadSource(async actions => {

        // Adding this workaround to get around wpgraphql
    // Loop through each page of the WordPress API, e.g. http://cms.aeries.com/wp-json/wp/v2/posts?page=pageNumber
    // until we reach the last page, which will return an object where the 'code' property is 'rest_post_invalid_page_number'.
    // Merge all the requests into one array of posts.
    const posts = [];

    let pageNumber = 1;
    let lastPage = false;
    while (!lastPage) {
      //Use Axios
      try {
        const { data } = await axios.get(
          `http://cms.aeries.com/wp-json/wp/v2/posts?per_page=100&page=${pageNumber}`
        );
        if (data.code === "rest_post_invalid_page_number") {
          lastPage = true;
        } else {
          posts.push(...data);
          pageNumber++;
        }

        const collection = actions.addCollection({
          typeName: "posts"
        });
        
        for (const item of posts) {
          collection.addNode(
            {
              id: item['id'],
             date: item['date'],
             date_gmt: item['date_gmt'],
             guid: {
                 rendered: item['guid']['rendered']
             },
             modified: item['modified'],
             modified_gmt: item['modified_gmt'],
             slug: item['slug'],
             status: item['status'],
             type: item['type'],
             link: item['link'],
             title: {
                 rendered: item['title']['rendered']
             },
             content: {
                 rendered: item['content']['rendered'],
                 protected: item['content']['protected']
             },
             excerpt: {
                 rendered: item['excerpt']['rendered'],
                 protected: item['excerpt']['protected']
             },
             author: item['author'],
             featured_media: item['featured_media'],
             comment_status: item['comment_status'],
             ping_status: item['ping_status'],
             sticky: item['sticky'],
             template: item['template'],
             format: item['format'],
             meta: item['meta'],
             categories: item['categories'],
             tags: item['tags'],
             acf: {
                 featured_image: item['acf']['featured_image']
             }
             }
          );
        }


      } catch (e) {
        // console.error(e);
        lastPage = true;
      }
    }

    

  });



  //Load Aeries leadership team members
  api.loadSource(async actions => {
    const data = await getData(`http://cms.aeries.com/wp-json/wp/v2/team-members?per_page=100`);

    const collection = actions.addCollection({
      typeName: "teamMembers"
    });
    
    // id
    // date
    // date_gmt
    // guid
    // modified
    // modified_gmt
    // slug
    // status
    // type
    // link
    // title
    // content
    // featured_media
    // template
    // meta
    // team_category
    // acf

    for (const item of data) {
      collection.addNode({
        id: item['id'],
        date: item['date'],
        date_gmt: item['date_gmt'],
        guid: {
            rendered: item['guid']['rendered']
        },
        modified: item['modified'],
        modified_gmt: item['modified_gmt'],
        slug: item['slug'],
        status: item['status'],
        type: item['type'],
        link: item['link'],
        title: {
            rendered: item['title']['rendered']
        },
        content: {
            rendered: item['content']['rendered'],
            protected: item['content']['protected']
        },
        featured_media: item['featured_media'],
        template: item['template'],
        meta: item['meta'],
        team_category: item['team_category'],
        acf: {
          title: item['acf']['title'],
          personality_photo: item['acf']['personality_photo'],
          executive: item['acf']['executive'],
        }
      });
    }
  });


  //Load partners
  api.loadSource(async actions => {
    const data = await getData(`http://cms.aeries.com/wp-json/wp/v2/partners?per_page=100`);

    const collection = actions.addCollection({
      typeName: "partners"
    });

    for (const item of data) {
      collection.addNode({
        id: item['id'],
       date: item['date'],
       date_gmt: item['date_gmt'],
       guid : {
       rendered: item['guid']['rendered']
       },
       modified: item['modified'],
       modified_gmt: item['modified_gmt'],
       slug: item['slug'],
       status: item['status'],
       type: item['type'],
       link: item['link'],
       title: {
       rendered: item['title']['rendered']
       },
       content : {
       rendered: item['content']['rendered'],
       protected: item['content']['protected']
       },
       featured_media: item['featured_media'],
       template: item['template'],
       meta: item['meta'],
       partner_category: item['partner_category'],
       acf : {
       partner_url: item['acf']['partner_url']
       }
       })
      }
  });

  //Load user group data
  api.loadSource(async actions => {
    
    //Fetch user groups from http://cms.aeries.com/wp-json/wp/v2/user-group?per_page=100
    const data = await getData(`http://cms.aeries.com/wp-json/wp/v2/user-group?per_page=100`);

    //Create a new collection
    const userGroupCollection = actions.addCollection({
      typeName: "userGroups"
    });

    //Add each user group to the collection
    for (const item of data) {
      userGroupCollection.addNode({
        id: item.id,
        date: item.date,
        date_gmt: item.date_gmt,
        guid: {
          rendered: item.guid.rendered
        },
        modified: item.modified,
        modified_gmt: item.modified_gmt,
        slug: item.slug,
        status: item.status,
        type: item.type,
        link: item.link,
        title: {
          rendered: item.title.rendered
        },
        content: {
          rendered: item.content.rendered,
          protected: item.content.protected
        },
        featured_media: item.featured_media,
        template: item.template,
        meta: item.meta,
        categories: item.categories,
        tags: item.tags,
        acf: {
          leaderCoordinatorName: item.acf['leader_coordinator-name'],
          leaderCoordinatorTitle: item.acf['leader__coordinator_-_title'],
          leaderCoordinatorOffice: item.acf['leader_coordinator-office'],
          leaderCoordinatorEmail: item.acf['leader_coordinator-email'],
          leaderCoordinatorPhone: item.acf['leader_coordinator-phone'],
          region: item.acf.region,
          districts_served: item.acf.districts_served,
          frequency_cadence: item.acf.frequency_cadence,
          liason: item.acf.liason,
          isActiveGroup: item.acf.isActiveGroup,
          state: item.acf.state
        }

      });
    }


  });




  //Load Aeries Academy course data
  api.loadSource(async actions => {
    const courses = require("./src/data/aeries-academy-courses.json");

    const generalCourseCollection = actions.addCollection({
      typeName: "GeneralCourses"
    });

    const teacherCourseCollection = actions.addCollection({
      typeName: "TeacherCourses"
    });

    for (const course of courses.generalCourses) {
      generalCourseCollection.addNode({
        id: course.id,
        title: course.title,
        image: course.image,
        description: course.description,
        price: course.price,
        salePrice: course.salePrice,
        hoursToComplete: course.hoursToComplete,
        subModules: course.subModules,
        featured: course.featured,
        itemType: course.itemType
      });
    }

    for (const course of courses.teacherCourses) {
      teacherCourseCollection.addNode({
        id: course.id,
        title: course.title,
        image: course.image,
        description: course.description,
        price: course.price,
        hoursToComplete: course.hoursToComplete,
        tier: course.tier,
        subModules: course.subModules,
        itemType: course.itemType,
        featured: course.featured,
        disabled: course.disabled
      });
    }
  });

  //Load Aeriescon Sessions from /v2/session
  api.loadSource(async actions => {
    const data = await getData(`http://cms.aeries.com/wp-json/wp/v2/session?per_page=100`);

    const collection = actions.addCollection({
      typeName: "sessions"
    });

    for (const item of data) {
      collection.addNode({
        id: item['id'],
        date: item['date'],
        date_gmt: item['date_gmt'],
        guid: {
          rendered: item['guid']['rendered']
        },
        modified: item['modified'],
        modified_gmt: item['modified_gmt'],
        slug: item['slug'],
        status: item['status'],
        type: item['type'],
        link: item['link'],
        title: {
          rendered: item['title']['rendered']
        },
        content: {
          rendered: item.content.rendered,
          protected: item.content.protected
        },
        featured_media: item.featured_media,
        template: item.template,
        meta: item.meta,
        tags: item.tags,
        session_category: item.session_category,
        acf: {
          session_id: item.acf['session_id'],
          california_texas_specific: item.acf['california_texas_specific']
        }
      });
    }
  });

  // Load AeriesCon session categories
  api.loadSource(async actions => {
    const data = await getData(`http://cms.aeries.com/wp-json/wp/v2/session_category?per_page=100`);

    const collection = actions.addCollection({
      typeName: "sessionCategories"
    });

    for (const item of data) {
      collection.addNode({
        id: item['id'],
        count: item['count'],
        description: item['description'],
        link: item['link'],
        name: item['name'],
        slug: item['slug'],
        taxonomy: item['taxonomy'],
        meta: item['meta'],
        acf: item['acf']
      });
    }
  });

  //Load AeriesCon session tags
  api.loadSource(async actions => {
    const data = await getData(`http://cms.aeries.com/wp-json/wp/v2/tags?per_page=100`);

    const collection = actions.addCollection({
      typeName: "sessionTags"
    });

    for (const item of data) {
      collection.addNode({

        id: item['id'],
        count: item['count'],
        description: item['description'],
        link: item['link'],
        name: item['name'],
        slug: item['slug'],
        taxonomy: item['taxonomy'],
        meta: item['meta']
      });
    }
  });

  //Load training course catalog
  api.loadSource(async actions => {

    const data = await getData(`http://cms.aeries.com/wp-json/wp/v2/courses?per_page=100`);

    const collection = actions.addCollection({
      typeName: "courses"
    });

    for (const item of data) {
      collection.addNode({
        id: item['id'],
        date: item['date'],
        date_gmt: item['date_gmt'],
        guid: {
          rendered: item['guid']['rendered']
        },
        modified: item['modified'],
        modified_gmt: item['modified_gmt'],
        slug: item['slug'],
        status: item['status'],
        type: item['type'],
        link: item['link'],
        title: {
          rendered: item['title']['rendered']
        },
        template: item['template'],
        meta: item['meta'],
        audience: item['audience'],
        course_category: item['course_category'],
        acf: {
          course_duration: item['acf']['course_duration'],
          course_description: item['acf']['course_description'],
          course_category: item['acf']['course_category'],
          recommended_attendees: item['acf']['recommended_attendees']
        }
      });
    }
  });



  //Load Aeries Academy course data
  api.loadSource(async actions => {
    const trainingCatalog = require("./src/data/aeries-training-catalog.json");

    const trainingCatalogCollection = actions.addCollection({
      typeName: "TrainingCatalog"
    });

    for (const course of trainingCatalog) {
      trainingCatalogCollection.addNode({
        title: course.title,
        description: course.description,
        duration: course.duration,
        id: course.id
      });
    }
  });

  // Create Blog Pages
  // api.createPages(async ({ graphql, createPage, context}) => {
  //   createPage({
  //     path: '/blog/blog-2/',
  //     component: './src/templates/blog-2.vue',
  //     queryVariables: {
  //       spicy: null
  //     }
  //   })
  // })

  // Create blog posts
  api.createPages(async ({ graphql, createPage }) => {
    // Adding this workaround to get around wpgraphql
    // Loop through each page of the WordPress API, e.g. http://cms.aeries.com/wp-json/wp/v2/posts?page=pageNumber
    // until we reach the last page, which will return an object where the 'code' property is 'rest_post_invalid_page_number'.
    // Merge all the requests into one array of posts.
    const posts = [];

    let pageNumber = 1;
    let lastPage = false;
    while (!lastPage) {
      //Use Axios
      try {
        const { data } = await axios.get(
          `http://cms.aeries.com/wp-json/wp/v2/posts?per_page=100&page=${pageNumber}`
        );
        if (data.code === "rest_post_invalid_page_number") {
          lastPage = true;
        } else {
          posts.push(...data);
          pageNumber++;
        }
      } catch (e) {
        // console.error(e);
        lastPage = true;
      }
    }

    posts.forEach(post => {
      createPage({
        path: `/blog/${post.slug}`,
        component: "./src/templates/CrmPost.vue",
        context: { id: post.id }
      });
    });
  });

  // // Create career single pages
  // api.createPages(async ({graphql, createPage}) => {
  //   const data = await graphql(`{
  //     openings(first: 50) {
  //       nodes {
  //         id
  //         databaseId
  //         slug
  //         title
  //         openingFields {
  //           department
  //         }
  //       }
  //     }
  //   }`)

  //   const openings = data.data.openings.nodes
  //   openings.forEach((opening) => {
  //     createPage({
  //       path: `/careers/${opening.slug}/${opening.databaseId}`,
  //       component: './src/templates/CrmOpening.vue',
  //       context: { id: opening.id, opening }
  //     })
  //   })
  // })

  // Create event admin pages
  api.createPages(async ({ graphql, createPage }) => {
    const data = await graphql(`
      {
        allEventAdminEvents {
          edges {
            node {
              EventId
              Name
              SubTitle
              FirstDay
              Blurb
              RegistrationDeadline
              SelectedDays {
                EventDayId
                AeriesEvent {
                  EventId
                  ClosedForEnrollment
                  Hide
                  Deleted
                  Capacity
                  RegistrationDeadline
                  DeadlineHasPast
                }
                Date
                NumCourses
                NumCourses
                Delete
              }
              EventType
            }
          }
        }
      }
    `);
    const events = data.data.allEventAdminEvents.edges;

    events.forEach(({ node }) => {
      createPage({
        path: `/events/${node.EventId}`,
        component: "./src/templates/Event.vue",
        context: {
          event: node
        }
      });
    });
  });

  //General courses
  api.createPages(async ({ graphql, createPage }) => {
    const courses = require("./src/data/aeries-academy-courses.json");
    var courseArray = courses.generalCourses;
    for (var i = 0; i < courseArray.length; i++) {
      createPage({
        path: `/academy/course/${courseArray[i].id}`,
        component: "./src/templates/aeries-academy-course.vue",
        context: {
          id: courseArray[i].id,
          title: courseArray[i].title,
          image: courseArray[i].image,
          description: courseArray[i].description,
          price: courseArray[i].price,
          salePrice: courseArray[i].salePrice,
          hoursToComplete: courseArray[i].hoursToComplete,
          subModules: courseArray[i].subModules,
          itemType: courseArray[i].itemType,
          featured: courseArray[i].featured
        }
      });
    }
  });

  //Teacher courses
  api.createPages(async ({ graphql, createPage }) => {
    const courses = require("./src/data/aeries-academy-courses.json");
    var courseArray = courses.teacherCourses;
    for (var i = 0; i < courseArray.length; i++) {
      createPage({
        path: `/academy/course/${courseArray[i].id}`,
        component: "./src/templates/aeries-academy-course.vue",
        context: {
          id: courseArray[i].id,
          title: courseArray[i].title,
          image: courseArray[i].image,
          description: courseArray[i].description,
          price: courseArray[i].price,
          hoursToComplete: courseArray[i].hoursToComplete,
          tier: courseArray[i].tier,
          subModules: courseArray[i].subModules,
          itemType: courseArray[i].itemType,
          featured: courseArray[i].featured,
          disabled: courseArray[i].disabled
        }
      });
    }
  });

  api.chainWebpack(config => {
    config.module
      .rule("pug")
      .test(/\.pug$/)
      .use("pug-plain-loader")
      .loader("pug-plain-loader");
  });
};
