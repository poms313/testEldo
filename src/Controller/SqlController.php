<?php

namespace App\Controller;

use App\Repository\ReviewRepository;
use App\Repository\ArtisanRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class SqlController extends AbstractController
{
    /**
     * @Route("/sql", name="sql")
     */
    public function index(ReviewRepository $ReviewRepository, ArtisanRepository $ArtisanRepository): Response
    {
        $listAllArtisans = $ArtisanRepository->findAll();

        $AllLastReviewsByArtisanId = array();

        foreach ($listAllArtisans as $artisan) {
            $artisanId = $artisan->getId();
            $listLastReviewsById = $ReviewRepository->findBy(array('artisanId' => $artisanId), array('reviewDate' => 'desc'), 3, 0);
            array_push($AllLastReviewsByArtisanId, $listLastReviewsById);
        }
        return $this->render('sql/index.html.twig', [
            'listLastReviewsById' => $AllLastReviewsByArtisanId,
        ]);
    }
}
