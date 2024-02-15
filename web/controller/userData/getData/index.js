const { Users } = require('../../../../models');

const getData = async (req, res, next) => {
  try {
    if (!req?.query) {
      const error = {
        status: 404,
        message: 'param is required',
      };
      throw error;
    }
    const getUser = await Users.find(req?.query);

    //end_year filter
    // const allEndYears = getUser.map((data) => data?.end_year);
    // const uniqueAllEndYears = [...new Set(allEndYears)];
    // console.log('uniqueAllEndYears', uniqueAllEndYears);

    // if (uniqueAllEndYears.includes(req?.body?.end_year)) {
    //   const selectedEndYear = getUser.filter((user) => {
    //     return user?.end_year === req?.body?.end_year;
    //   });
    //   const selectedEndYearLength = selectedEndYear.length;
    //   console.log(`${req?.body?.end_year}`, selectedEndYearLength);
    // }
    // const endYear = getUser.filter((user) => {
    //   return user?.end_year !== null;
    // });
    // const endYearLength = endYear.length;

    //topics filter
    const namesTopics = getUser.map((data) => data?.topic);
    const uniqueNamesTopics = [...new Set(namesTopics)];

    if (uniqueNamesTopics.includes(req?.body?.topic)) {
      const selectedTopic = getUser.filter((user) => {
        return user?.topic === req?.body?.topic;
      });
      const selectedTopicLength = selectedTopic.length;
      console.log(`${req?.body?.topic}`, selectedTopicLength);
    }

    //sector filter
    const namesSector = getUser.map((user) => user?.sector);
    const uniqueSectorName = [...new Set(namesSector)];

    if (uniqueSectorName.includes(req?.body?.sector)) {
      const selectedSector = getUser.filter((user) => {
        return user?.sector === req?.body?.sector;
      });
      const selectedSectorLength = selectedSector.length;
      console.log(`${req?.body?.sector}`, selectedSectorLength);
    }

    //filter region
    const namesRegion = getUser.map((user) => user?.region);
    const uniqueRegionName = [...new Set(namesRegion)];
    // console.log('uniqueRegionName', uniqueRegionName);

    if (uniqueRegionName.includes(req?.body?.region)) {
      const selectedRegion = getUser.filter((user) => {
        return user?.region === req?.body?.region;
      });
      const selectedRegionLength = selectedRegion.length;
      console.log(`${req?.body?.region}`, selectedRegionLength);
    }

    //filter PEST
    const namesPestle = getUser.map((user) => user?.pestle);
    const uniquePestleName = [...new Set(namesPestle)];
    // console.log('uniquePestleName', uniquePestleName);

    if (uniquePestleName.includes(req?.body?.pestle)) {
      const selectedPestle = getUser.filter((user) => {
        return user?.pestle === req?.body?.pestle;
      });
      const selectedPestleLength = selectedPestle.length;
      console.log(`${req?.body?.pestle}`, selectedPestleLength);
    }

    //filter source
    const namesSource = getUser.map((user) => user?.source);
    const uniqueSourceName = [...new Set(namesSource)];
    // console.log('uniqueSourceName', uniqueSourceName);

    if (uniqueSourceName.includes(req?.body?.source)) {
      const selectedSource = getUser.filter((user) => {
        return user?.source === req?.body?.source;
      });
      const selectedSourceLength = selectedSource.length;
      console.log(`${req?.body?.source}`, selectedSourceLength);
    }

    //filter country
    const namesCountry = getUser.map((user) => user?.country);
    const uniqueCountryName = [...new Set(namesCountry)];
    // console.log('uniqueCountryName', uniqueCountryName);

    if (uniqueCountryName.includes(req?.body?.country)) {
      const selectedCountry = getUser.filter((user) => {
        return user?.country === req?.body?.country;
      });
      const selectedCountryLength = selectedCountry.length;
      console.log(`${req?.body?.country}`, selectedCountryLength);
    }

    res.send({
      status: 200,
      message: 'Success',
      data: getUser,
      // length: endYearLength,
    });
  } catch (error) {
    next(error);
  }
};
module.exports = getData;
