<?php

namespace App\Controller;

use App\Entity\Review;
use App\Form\AddReviewType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use \Doctrine\Persistence\ManagerRegistry;

class AddReviewController extends AbstractController
{
    /**
     * @Route("/sql/add/review", name="add_review")
     */
    public function index(Request $request, ManagerRegistry $doctrine): Response
    {
        $review = new Review();
        $form = $this -> createForm(AddReviewType::class);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $review = $form->getData();
            $review = $review->setReviewDate(new \DateTime('now'));
            $entityManager = $doctrine->getManager();
            $entityManager->persist($review);
            $entityManager->flush();
            return $this->redirectToRoute('sql');
        }
        return $this->render('/sql/add_review/index.html.twig', [
            'addReviewForm' => $form->createView(),
        ]);
    }
}
